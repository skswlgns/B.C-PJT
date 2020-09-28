import express from "express"
import cors from "cors"
import requestLogger from "./middleware/requestLogger"

import { authRoutes } from "./router/authRoutes"
import { userRoutes } from "./router/userRoutes"
import { articleRoutes } from "./router/articleRoutes"

const app = express()
app.use(cors())
app.use(express.json())
app.use(requestLogger)

require("./model/ArticleModel")
require("./model/CandidateModel")
require("./model/GoodLangModel")
require("./model/ResumeModel")
require("./model/UserModel")

// routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/articles", articleRoutes)

// main
app.get("/api/", (req: express.Request, res: express.Response) => {
  res.send(`start, ${req.statusCode}`)
})

export { app }
