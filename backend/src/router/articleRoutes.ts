import express from "express"
import { UserModel } from "../model/UserModel"
import { ArticleModel } from "../model/ArticleModel"
import { CandidateModel } from "../model/CandidateModel"

const articleRoutes = express.Router()

// jwt middleware
const verificationMiddleware = require("../middleware/verification")
const verificationAdminMiddleware = require("../middleware/verificationAdmin")

/*
통역 요청 Article 작성을 위한 router
*/

// 전체 Article 조회: GET
articleRoutes.get("/", async (req: express.Request, res: express.Response) => {
  try {
    // 해당 Model에서 items 가져오기
    let items: any = await ArticleModel.find({})
    res.json(items)
  } catch (err) {
    res.status(500)
    res.end()
    console.error("Caught error", err)
  }
})

// Article 1개 조회: GET
articleRoutes.get("/:article_id", async (req: express.Request, res: express.Response) => {
  const article_id = req.params["article_id"]
  ArticleModel.findOne({ _id: article_id }, async (err: Error, article: any) => {
    if (err) {
      console.log(err)
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
  const item = new ArticleModel({
    user_id: user_id,
    article_content: requestBody.article_content,
    article_from: requestBody.article_from,
    article_to: requestBody.article_to,
    article_start: requestBody.article_start,
    article_end: requestBody.article_end,
    article_egg: requestBody.article_egg,
  })
  await item.save()
  res.status(200).send({ message: "article이 생성되었습니다." })
})

// Article 수정 (id는 hash값): PUT
articleRoutes.put("/:article_id", verificationMiddleware)
articleRoutes.put("/:article_id", async (req: express.Request, res: express.Response) => {
  const article_id = req.params["article_id"]
  const requestBody = req.body
  ArticleModel.findOne({ _id: article_id }, async (err: Error, article: any) => {
    if (err) {
      console.log(err)
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
            article_start: requestBody.article_start,
            article_end: requestBody.article_end,
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
      console.log(err)
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
작성된 Article에 통역가를 신청하기 위한 router
*/

// 특정 Article의 모든 통역 후보자 조회: GET
articleRoutes.get("/:article_id/candidates", async (req: express.Request, res: express.Response) => {
  const article_id = req.params["article_id"]
  ArticleModel.findOne({ _id: article_id }, async (err: Error, article: any) => {
    if (err) {
      console.log(err)
    } else {
      if (article === null) {
        res.status(403).send({ message: "존재하지 않는 게시글 입니다." })
      } else {
        UserModel.find(
          {
            _id: { $in: article.article_candidate },
          },
          function (err, users) {
            res.status(200).send(users)
          }
        )
      }
    }
  })
})

// 특정 Article의 통역 후보자 등록: POST
articleRoutes.post("/:article_id/candidates", verificationMiddleware)
articleRoutes.post("/:article_id/candidates", async (req: express.Request, res: express.Response) => {
  const article_id = req.params["article_id"]
  ArticleModel.findOne({ _id: article_id }, async (err: Error, article: any) => {
    if (err) {
      console.log(err)
    } else {
      if (article === null) {
        res.status(403).send({ message: "존재하지 않는 게시글 입니다." })
      } else {
        await UserModel.findOne({ user_email: req.headers.user_email }, async (err: Error, user: any) => {
          if (err) {
            console.log(err)
          } else {
            const user_id = user._id
            const articleCandidateList = article.article_candidate
            if (articleCandidateList.includes(user_id)) {
              res.status(403).send({ message: `이미 등록된 후보자 입니다.` })
            } else {
              articleCandidateList.push(user_id)
              await ArticleModel.update({ _id: article_id }, { article_candidate: articleCandidateList }).then(
                (_: any) => {
                  res.status(200).send({ message: `${article_id} article에 ${user_id} candidate를 추가하였습니다.` })
                }
              )
            }
          }
        })
      }
    }
  })
})

// Article의 통역 후보자 취소: DELETE
articleRoutes.post("/:article_id/candidates", verificationMiddleware)
articleRoutes.post("/:article_id/candidates", async (req: express.Request, res: express.Response) => {
  const article_id = req.params["article_id"]
  ArticleModel.findOne({ _id: article_id }, async (err: Error, article: any) => {
    if (err) {
      console.log(err)
    } else {
      if (article === null) {
        res.status(403).send({ message: "존재하지 않는 게시글 입니다." })
      } else {
        await UserModel.findOne({ user_email: req.headers.user_email }, async (err: Error, user: any) => {
          if (err) {
            console.log(err)
          } else {
            const user_id = user._id
            const articleCandidateList = article.article_candidate
            if (articleCandidateList.includes(user_id)) {
              res.status(403).send({ message: `이미 등록된 후보자 입니다.` })
            } else {
              articleCandidateList.push(user_id)
              await ArticleModel.update({ _id: article_id }, { article_candidate: articleCandidateList }).then(
                (_: any) => {
                  res.status(200).send({ message: `${article_id} article에 ${user_id} candidate를 추가하였습니다.` })
                }
              )
            }
          }
        })
      }
    }
  })
})

export { articleRoutes }
