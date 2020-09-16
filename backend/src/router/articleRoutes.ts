import express from "express"
import { UserModel } from "../model/UserModel"
import { ArticleModel } from "../model/ArticleModel"

const articleRoutes = express.Router()

// jwt middleware
const verificationMiddleware = require("../middleware/verification")
const verificationAdminMiddleware = require("../middleware/verificationAdmin")

// 통역가 신청하기

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
articleRoutes.put("/:id", verificationMiddleware)
articleRoutes.put("/:id", async (req: express.Request, res: express.Response) => {
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
articleRoutes.delete("/:id", verificationMiddleware)
articleRoutes.delete("/:id", async (req: express.Request, res: express.Response) => {
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

export { articleRoutes }
