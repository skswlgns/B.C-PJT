import express from "express"
import { UserModel } from "../model/UserModel"
import { ArticleModel } from "../model/ArticleModel"
import { CandidateModel } from "../model/CandidateModel"

const candidateRoutes = express.Router()

// jwt middleware
const verificationMiddleware = require("../middleware/verification")
const verificationAdminMiddleware = require("../middleware/verificationAdmin")

/* 
작성된 Article에 통역가를 신청하기 위한 router
*/

// 특정 Article의 모든 통역 후보 조회: GET
candidateRoutes.get("/", async (req: express.Request, res: express.Response) => {
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

// Article 생성: POST
candidateRoutes.post("/", verificationMiddleware)
candidateRoutes.post("/", async (req: express.Request, res: express.Response) => {
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
candidateRoutes.put("/:id", verificationMiddleware)
candidateRoutes.put("/:id", async (req: express.Request, res: express.Response) => {
  const _id = req.params["id"]
  const requestBody = req.body
  ArticleModel.findOne({ _id: _id }, async (err: Error, article: any) => {
    if (err) {
      console.log(err)
    } else {
      if (article === null) {
        res.status(403).send({ message: "존재하지 않는 게시글 입니다." })
      } else {
        await ArticleModel.findOneAndUpdate(
          { _id: _id },
          {
            article_content: requestBody.article_content,
            article_from: requestBody.article_from,
            article_to: requestBody.article_to,
            article_start: requestBody.article_start,
            article_end: requestBody.article_end,
            article_egg: requestBody.article_egg,
          }
        )
        res.status(200).send({ message: `${_id} article이 수정되었습니다.` })
      }
    }
  })
})

// Article 삭제 (id는 hash값): DELETE
candidateRoutes.delete("/:id", verificationMiddleware)
candidateRoutes.delete("/:id", async (req: express.Request, res: express.Response) => {
  const _id = req.params["id"]
  const requestBody = req.body
  ArticleModel.findOne({ _id: _id }, async (err: Error, article: any) => {
    if (err) {
      console.log(err)
    } else {
      if (article === null) {
        res.status(403).send({ message: "존재하지 않는 게시글 입니다." })
      } else {
        await ArticleModel.deleteOne({ _id: _id })
        res.status(200).send({ message: `${_id} article이 삭제되었습니다.` })
      }
    }
  })
})

export { candidateRoutes }
