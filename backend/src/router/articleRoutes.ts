import express from "express"
import { UserModel } from "../model/UserModel"
import { ArticleModel } from "../model/ArticleModel"
import { CandidateModel } from "../model/CandidateModel"

const articleRoutes = express.Router()

// jwt middleware
const verificationMiddleware = require("../middleware/verification")

/*
통역 요청 Article 작성을 위한 router
*/

// 전체 Article 조회: GET
articleRoutes.get("/", async (req: express.Request, res: express.Response) => {
  await ArticleModel.find({})
    .populate("user_id", "user_nickname user_image")
    .exec((err: Error, articles: any) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send(articles)
      }
    })
})

// Article 1개 조회: GET
articleRoutes.get("/:article_id", async (req: express.Request, res: express.Response) => {
  const article_id = req.params["article_id"]
  await ArticleModel.findOne({ _id: article_id })
    .populate("user_id", "user_nickname user_image")
    .exec((err: Error, article: any) => {
      if (err) {
        res.status(500).send(err)
      } else {
        if (article === null) {
          res.status(403).send({ message: "존재하지 않는 게시글 입니다." })
        } else {
          res.status(200).send(article)
        }
      }
    })
})

// Article 생성: POST
articleRoutes.post("/", verificationMiddleware)
articleRoutes.post("/", async (req: express.Request, res: express.Response) => {
  const requestBody = req.body
  const user_id = await UserModel.findOne({ user_email: req.headers.user_email })
  const article = new ArticleModel({
    user_id: user_id,
    article_title: requestBody.article_title,
    article_content: requestBody.article_content,
    article_from: requestBody.article_from,
    article_to: requestBody.article_to,
    article_start_date: requestBody.article_start_date,
    article_start_time: requestBody.article_start_time,
    article_end_date: requestBody.article_end_date,
    article_end_time: requestBody.article_end_time,
    article_egg: requestBody.article_egg,
  })
  await article.save((err, _) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send({ message: `article이 생성되었습니다.` })
    }
  })
})

// Article 수정 (id는 hash값): PUT
articleRoutes.put("/:article_id", verificationMiddleware)
articleRoutes.put("/:article_id", async (req: express.Request, res: express.Response) => {
  const article_id = req.params["article_id"]
  const requestBody = req.body
  ArticleModel.findOne({ _id: article_id }, async (err: Error, article: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      if (article === null) {
        res.status(403).send({ message: "존재하지 않는 게시글 입니다." })
      } else {
        await ArticleModel.findOneAndUpdate(
          { _id: article_id },
          {
            article_content: requestBody.article_content,
            article_from: requestBody.article_from,
            article_to: requestBody.article_to,
            article_start_date: requestBody.article_start_date,
            article_start_time: requestBody.article_start_time,
            article_end_date: requestBody.article_end_date,
            article_end_time: requestBody.article_end_time,
            article_egg: requestBody.article_egg,
          }
        )
        res.status(200).send({ message: `${article_id} article이 수정되었습니다.` })
      }
    }
  })
})

// Article 삭제 (id는 hash값): DELETE
articleRoutes.delete("/:article_id", verificationMiddleware)
articleRoutes.delete("/:article_id", async (req: express.Request, res: express.Response) => {
  const article_id = req.params["article_id"]
  const requestBody = req.body
  ArticleModel.findOne({ _id: article_id }, async (err: Error, article: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      if (article === null) {
        res.status(403).send({ message: "존재하지 않는 게시글 입니다." })
      } else {
        await ArticleModel.deleteOne({ _id: article_id })
        res.status(200).send({ message: `${article_id} article이 삭제되었습니다.` })
      }
    }
  })
})

/* 
작성된 Article에 Candidate를 신청하기 위한 router
*/

// 특정 Article의 통역 후보자 등록: POST
articleRoutes.post("/:article_id/candidates", verificationMiddleware)
articleRoutes.post("/:article_id/candidates", async (req: express.Request, res: express.Response) => {
  const article_id = req.params["article_id"]
  // user_id 가져오기
  await UserModel.findOne({ user_email: req.headers.user_email }, (err: Error, user: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      ArticleModel.findOne({ _id: article_id })
        .populate("article_candidate")
        .exec((err: Error, article: any) => {
          if (err) {
            res.status(500).send(err)
          } else {
            if (article === null) {
              res.status(403).send({ message: "존재하지 않는 게시글 입니다." })
            } else {
              console.log(article)

              // 현재 user가 article의 cadidate로 등록되어 있는지 확인하기
              const articleCandidateList: any = article.article_candidate
              const isCandidate: boolean = articleCandidateList.some(
                (element: any) => element.user_id.toString() === user._id.toString()
              )
              console.log(articleCandidateList)
              console.log(user._id)
              if (isCandidate) {
                // 이미 등록되어 있다면 오류 메세지 반환
                res.status(403).send({ message: "이미 등록된 통역사입니다." })
              } else {
                // 등록되어 있지 않다면 새로운 candidate 만들기
                const item = new CandidateModel({
                  user_id: user._id,
                  article_id: article_id,
                  candidate_content: req.body.candidate_content,
                })
                item.save(async (err, candidate) => {
                  if (err) {
                    res.status(500).send(err)
                  } else {
                    // candidate_id 값을 article.article_candidate에 추가하기
                    const candidateId = candidate._id
                    articleCandidateList.push(candidateId)
                    await ArticleModel.update({ _id: article_id }, { article_candidate: articleCandidateList }).then(
                      (_: any) => {
                        res
                          .status(200)
                          .send({ message: `${article_id} article에 ${user._id} candidate를 추가하였습니다.` })
                      }
                    )
                  }
                })
              }
            }
          }
        })
    }
  })
})

// Article의 통역 후보자 취소: DELETE
articleRoutes.delete("/:article_id/candidates", verificationMiddleware)
articleRoutes.delete("/:article_id/candidates", async (req: express.Request, res: express.Response) => {
  const article_id = req.params["article_id"]
  // user_id 가져오기
  await UserModel.findOne({ user_email: req.headers.user_email }, (err: Error, user: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      ArticleModel.findOne({ _id: article_id })
        .populate("article_candidate")
        .exec(async (err: Error, article: any) => {
          if (err) {
            res.status(500).send(err)
          } else {
            if (article === null) {
              res.status(403).send({ message: "존재하지 않는 게시글 입니다." })
            } else {
              console.log(article)

              // 현재 user가 article의 cadidate로 등록되어 있는지 확인하기
              const articleCandidateList = article.article_candidate
              const isCandidate: any = (candidateList: any) => {
                let tmp_object: any = {}
                for (let i = 0; i < candidateList.length; i++) {
                  if (candidateList[i].user_id.toString() === user._id.toString()) {
                    tmp_object = candidateList[i]
                    break
                  }
                }
                return tmp_object
              }
              console.log("isCandidate", isCandidate(articleCandidateList))
              if (isCandidate === {}) {
                // 등록되어있지 않다면 오류 메세지 반환
                res.status(403).send({ message: "등록되지 않은 통역사입니다." })
              } else {
                // 등록되어 있는 candidate 없애기
                const candidateId = isCandidate._id
                await CandidateModel.deleteOne({ _id: isCandidate._id })
                res.status(200).send({ message: `${article_id} article이 삭제되었습니다.` })
              }
            }
          }
        })
    }
  })
})

export { articleRoutes }
