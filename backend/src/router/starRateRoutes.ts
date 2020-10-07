import express from "express"
import { UserModel } from "../model/UserModel"
import { ArticleModel } from "../model/ArticleModel"
import { CandidateModel } from "../model/CandidateModel"
import { StarRateModel } from "../model/StarRateModel"

const starRateRoutes = express.Router()

// jwt middleware
const verificationMiddleware = require("../middleware/verification")

/*
별점을 위한 router
*/

// 유저의 평가 목록 조회: GET
starRateRoutes.get("/:user_id", async (req: express.Request, res: express.Response) => {
  const userId = req.params["user_id"]
  await StarRateModel.find({ star_rate_ts_user_id: userId }).exec((err: Error, starRate: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(starRate)
    }
  })
})

// 유저의 별점 조회: GET
starRateRoutes.get("/:user_id/score", async (req: express.Request, res: express.Response) => {
  const userId = req.params["user_id"]
  await StarRateModel.find({ star_rate_ts_user_id: userId }).exec((err: Error, starRate: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      if (starRate === null) {
        res.status(200).send({ messege: "평가가 없습니다." })
      } else {
        console.log(starRate)
        let scoreSum: any = 0
        starRate.forEach((rate: any) => {
          scoreSum += rate.star_rate_score
        })
        res.status(200).send({ score: scoreSum / starRate.length })
      }
    }
  })
})

// 유저 평가: POST
// starRateRoutes.post("/", verificationMiddleware)
starRateRoutes.post("/", async (req: express.Request, res: express.Response) => {
  await UserModel.findOne({ user_email: req.headers.email }).exec(async (err: any, user: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      const starRateRqUserId = user._id
      const starRateTsUserId = req.body.star_rate_ts_user_id
      const articleId = req.body.article_id
      const starRateScore = req.body.star_rate_score
      const starRateContent = req.body.star_rate_content
      const starRate = new StarRateModel({
        star_rate_ts_user_id: starRateTsUserId,
        star_rate_rq_user_id: starRateRqUserId,
        article_id: articleId,
        star_rate_score: starRateScore,
        star_rate_content: starRateContent,
      })
      await starRate.save((err, newStarRate) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(200).json(newStarRate)
        }
      })
    }
  })
})

export { starRateRoutes }
