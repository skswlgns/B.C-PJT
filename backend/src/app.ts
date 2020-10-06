import express from "express"
import cors from "cors"
import requestLogger from "./middleware/requestLogger"
import Web3 from "web3"
import { authRoutes } from "./router/authRoutes"
import { userRoutes } from "./router/userRoutes"
import { articleRoutes } from "./router/articleRoutes"
import { ChoiceRoutes } from "./router/ChoiceRoutes"
import { starRateRoutes } from "./router/starRateRoutes"

const app = express()
app.use(cors())
app.use(express.json())
app.use(requestLogger)

require("./model/ArticleModel")
require("./model/CandidateModel")
require("./model/GoodLangModel")
require("./model/ResumeModel")
require("./model/StarRateModel")
require("./model/UserModel")

// routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/articles", articleRoutes)
app.use("/api/eth", ChoiceRoutes)
app.use("/api/rate", starRateRoutes)

// main
app.get("/api/", (req: express.Request, res: express.Response) => {
  let web3: any = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
  web3.eth.getAccounts().then(console.log)
  res.send(`Server: Start, Web3.js: ${web3.eth.net.isListening() ? true : false}`)
})

export { app }
