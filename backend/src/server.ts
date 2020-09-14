import { app } from "./app"
import http from "http"

import { MongoHelper } from "./mongoHelper"
import mongoose from "mongoose"

const PORT = 5000
const MONGO_URL = "mongodb://localhost:27017/test"
const server = http.createServer(app)
server.listen(PORT)
server.on("listening", async () => {
  console.info(`Listening on port ${PORT}`)

  /*
  mongo 쿼리문 사용 시

  try {
    await MongoHelper.connect(MONGO_URL)
    console.info(`Connected to Mongo.`)
  } catch (err) {
    console.info(err)
  }
  */

  // mongoose 사용시
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useFindAndModify: false })
  mongoose.connection.on("open", () => {
    console.info("Connection to Mongo.")
  })
  mongoose.connection.on("error", (err: any) => {
    console.error(err)
  })
})
