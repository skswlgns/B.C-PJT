import { app } from "./app"
import http from "http"

import mongoose from "mongoose"

const PORT = 3000

const MONGO_URL = "mongodb://j3b103.p.ssafy.io:5000/test"
const server = http.createServer(app)
server.listen(PORT)
server.on("listening", async () => {
  console.info(`Listening on port ${PORT}`)

  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  mongoose.connection.on("open", () => {
    console.info("Connection to Mongo.")
  })
  mongoose.connection.on("error", (err: any) => {
    console.error(err)
  })
})
