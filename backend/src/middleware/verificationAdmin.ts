import * as express from "express"

const jwt = require("jsonwebtoken")
const secretObj = require("../config/jwt")

const authAdminMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // read the token from header or url
  const token = req.headers.token

  // token does not exist
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "로그인 되어있지 않습니다.",
    })
  }

  // create a promise that decodes the token
  const p = new Promise((resolve, reject) => {
    jwt.verify(token, secretObj.secret, (err: Error, decoded: any) => {
      if (err) reject(err)
      resolve(decoded)
    })
  })

  // if it has failed to verify, it will return an error message
  const onError = (error: Error) => {
    res.status(403).json({
      success: false,
      message: error.message,
    })
  }

  // process the promise
  p.then((decoded: any) => {
    if (decoded.user_email != req.headers.user_email) {
      res.status(403).send({ message: "인증된 사용자가 아닙니다." })
    } else {
      if (!decoded.isAdmin) {
        res.status(403).send({ message: "관리자가 아닙니다." })
      } else {
        next()
      }
    }
  }).catch(onError)
}

module.exports = authAdminMiddleware
