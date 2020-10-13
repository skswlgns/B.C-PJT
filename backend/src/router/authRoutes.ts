import express from "express"
import { UserModel } from "../model/UserModel"
import { ArticleModel } from "../model/ArticleModel"
import { CandidateModel } from "../model/CandidateModel"
import { ResumeModel } from "../model/ResumeModel"

const authRoutes = express.Router()
const crypto = require("crypto")

// jwt
const jwt = require("jsonwebtoken")
const secretObj = require("../config/jwt")

// jwt middleware
const verificationMiddleware = require("../middleware/verification")

// SET STORAGE
const multer = require("multer")
const path = require("path")

const upload = multer({
  storage: multer.diskStorage({
    // set a localstorage destination
    destination: (req: any, file: any, cb: any) => {
      cb(null, `../../image`)
    },
    // convert a file name
    filename: (req: any, file: any, cb: any) => {
      cb(null, new Date().valueOf() + path.extname(file.originalname))
    },
  }),
})

/*
계정 인증을 위한 router
*/

// 비밀번호 암호화 함수
const hashPassword = (password: string) => {
  return crypto.createHash("sha512").update(password).digest("hex")
}

// 로그인
authRoutes.post("/signin", async (req: express.Request, res: express.Response) => {
  // 이미 로그인이 되어있다면 이미 되어있다고 알리기

  if (req.headers.token) {
    res.status(403).json({ message: "이미 로그인 되어있습니다." })
  } else {
    const userEmail = req.body.user_email
    const userPwd = hashPassword(req.body.user_pwd)
    //이메일 값으로 아이디가 존재하는지 확인
    await UserModel.findOne({ user_email: userEmail })
      .then((user: any) => {
        // 비밀번호 일치 여부 확인
        if (user.user_pwd !== userPwd) {
          res.status(403).send({ message: "비밀번호가 다릅니다." })
        } else {
          // 아아디, 비밀번호 일치
          jwt.sign(
            {
              // 첫번째 인자: 로그인을 위한 정보
              user_email: user.user_email,
            },
            // 두번째 인자: 비밀 키
            secretObj.secret,
            // 세번째 인자:  유효 시간
            { expiresIn: "1d" },

            // 네번째 인자: 콜백함수
            function (err: Error, token: any) {
              if (err) {
                res.send(err)
              } else {
                res.json({
                  message: "로그인에 성공하여 토큰이 발급되었습니다.",
                  token: token,
                  status: "login",
                  user_email: user.user_email,
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
    const userEmail = req.body.user_email
    const userPwd = req.body.user_pwd
    const userNickname = req.body.user_nickname
    const userPhone = req.body.user_phone
    const userWallet = req.body.user_wallet
    const userLang = req.body.user_lang

    // 빈 아이딩 및 비밀번호 검증
    if (
      userEmail !== "" &&
      userEmail !== undefined &&
      userPwd !== "" &&
      userPwd !== undefined &&
      userWallet !== "" &&
      userWallet !== undefined &&
      userNickname !== "" &&
      userNickname !== undefined &&
      userPhone !== "" &&
      userPhone !== undefined &&
      userLang !== "" &&
      userLang !== undefined
    ) {
      // email 중복 확인
      await UserModel.findOne({ user_email: userEmail }).then(async (user: any) => {
        // 이메일이 중복이면 중복 메세지 보내기
        if (user) {
          res.status(403).send({ message: "이미 존재하는 아이디입니다." })
        } else {
          // DB에 저장하기
          const item = new UserModel({
            user_email: userEmail,
            user_pwd: hashPassword(userPwd),
            user_nickname: userNickname,
            user_phone: userPhone,
            user_wallet: userWallet,
            user_lang: userLang,
          })
          await item.save()
          res.status(200).send({
            message: `${userEmail} 회원가입이 완료되었습니다.`,
          })
        }
      })
    } else {
      res.status(403).send({ message: "아이디 또는 비밀번호를 입력해주세요." })
    }
  }
})

// 회원정보 수정
authRoutes.put("/", verificationMiddleware)
authRoutes.put("/", upload.single("user_image"), async (req: express.Request, res: express.Response) => {
  await UserModel.findOne({ user_email: req.headers.email }, async (err: Error, user: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      if (user === null) {
        // 회원정보가 존재하지 않으면 오류반환
        res.status(403).send({ message: "존재하지 않는 아이디 입니다." })
      } else {
        // image file 있는지 확인
        // const imageFile = req.files
        // console.log(req.file)
        // 회원정보가 존재하면 수정
        await UserModel.findOneAndUpdate(
          { _id: user._id },
          {
            user_nickname: req.body.user_nickname,
            user_image: req.file.filename,
            user_phone: req.body.user_phone,
          }
        )
        res.status(200).send({ message: "회원정보가 수정되었습니다." })
      }
    }
  })
})

// 회원탈퇴
authRoutes.delete("/", verificationMiddleware)
authRoutes.delete("/", async (req: express.Request, res: express.Response) => {
  await UserModel.findOne({ user_email: req.headers.email }, async (err: Error, user: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      if (user === null) {
        // 회원정보가 존재하지 않으면 오류반환
        res.status(403).send({ message: "존재하지 않는 아이디 입니다." })
      } else {
        // 회원정보가 존재하면 수정
        await UserModel.deleteOne({ user_email: user._id })
        await ArticleModel.deleteMany({ user_id: user._id })
        await CandidateModel.deleteMany({ user_id: user._id })
        await ResumeModel.deleteMany({ user_id: user._id })
        res.status(200).send({ message: "회원 탈퇴 되었습니다." })
      }
    }
  })
})

export { authRoutes }
