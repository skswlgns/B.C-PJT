import express from "express"
import { UserModel } from "../model/User"

const authRoutes = express.Router()
// const crypto = require("crypto")
// const nodemailer = require("nodemailer")
// const smtpTransporter = require("nodemailer-smtp-transport")
// const fileUpload = require("express-fileupload")

// jwt middleware
const verificationMiddleware = require("../middleware/verification")
const verificationAdminMiddleware = require("../middleware/verificationAdmin")

// jwt
const jwt = require("jsonwebtoken")
const secretObj = require("../config/jwt")
// const { rejects } = require("assert")

// 로그인
authRoutes.post("/signin", async (req: express.Request, res: express.Response) => {
  // 이미 로그인이 되어있다면 이미 되어있다고 알리기

  if (req.headers.token) {
    res.status(403).json({ message: "이미 로그인 되어있습니다." })
  } else {
    const reqeustData = req.body
    console.log(reqeustData)
    //이메일 값으로 아이디가 존재하는지 확인
    await UserModel.findOne({ username: reqeustData.username })
      .then((user: any) => {
        console.log(user)
        // 비밀번호 일치 여부 확인
        if (user.password !== reqeustData.password) {
          res.status(403).send({ message: "비밀번호가 다릅니다." })
        } else {
          // 아아디, 비밀번호 일치
          const token = jwt.sign(
            {
              // 첫번째 인자: 로그인을 위한 정보
              username: user.username,
              password: user.password,
            },
            // 두번째 인자: 비밀 키
            secretObj.secret,
            // 세번째 인자:  유효 시간
            { expiresIn: "1h" },

            // 네번째 인자: 콜백함수
            function (err: Error, token: any) {
              if (err) {
                res.send(err)
              } else {
                res.json({
                  message: "로그인에 성공하여 토큰이 발급되었습니다.",
                  token: token,
                  status: "login",
                  username: user.username,
                  password: user.password,
                })
              }
            }
          )
        }
      })
      .catch((err: Error) => {
        console.log(err)

        res.status(403).send({ message: "존재하지 않는 아이디 입니다." })
      })
  }
})

//회원가입
authRoutes.post("/signup", async (req: express.Request, res: express.Response) => {
  // 이미 로그인이 되어있다면 이미 되어있다고
  if (req.headers.token) {
    res.status(403).json({ message: "이미 로그인 되어있습니다." })
  } else {
    const username = req.body.username
    const password_1 = req.body.password_1
    const password_2 = req.body.password_2

    // 빈 아이딩 및 비밀번호 검증
    if (
      username !== "" &&
      password_1 !== "" &&
      password_2 !== "" &&
      username !== undefined &&
      password_1 !== undefined &&
      password_2 !== undefined
    ) {
      // email 중복 확인
      await UserModel.findOne({ username: username }).then(async (user: any) => {
        // 이메일이 중복이면 중복 메세지 보내기
        if (user) {
          res.status(403).send({ message: "이미 존재하는 아이디입니다." })
        } else {
          // 비밀번호 확인하기
          if (password_1 !== password_2) {
            res.status(403).send({ message: "비밀번호 확인이 잘못되었습니다." })
          } else {
            // DB에 저장하기
            const item = new UserModel({
              username: username,
              password: password_1,
            })
            await item.save()
            res.status(200).send({
              message: "회원가입이 완료되었습니다.",
            })
          }
        }
      })
    } else {
      res.status(403).send({ message: "아이디 또는 비밀번호를 입력해주세요." })
    }
  }
})

export { authRoutes }
