import * as express from "express"

const jwt = require("jsonwebtoken")
const secretObj = require("../config/jwt")

const verificationMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
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
    console.log("decode", decoded)
    console.log("req.headers", req.headers)
    if (decoded.user_email.toString() !== (req.headers.email || "").toString()) {
      res.status(403).send({ message: "인증된 사용자가 아닙니다." })
    } else {
      next()
    }
  }).catch(onError)
}

module.exports = verificationMiddleware
