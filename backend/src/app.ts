import express from "express"
import cors from "cors"
import requestLogger from "./middleware/requestLogger"

import { authRoutes } from "./router/authRoutes"
import { articleRoutes } from "./router/articleRoutes"

const app = express()
app.use(cors())
app.use(express.json())
app.use(requestLogger)

// routes
app.use("/auth", authRoutes)
app.use("/articles", articleRoutes)

// main
app.get("", (req: express.Request, res: express.Response) => {
  res.send(`start, ${req.statusCode}`)
})

export { app }
