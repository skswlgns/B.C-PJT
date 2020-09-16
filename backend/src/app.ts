import express from "express"
import cors from "cors"
import requestLogger from "./middleware/requestLogger"

import { authRoutes } from "./router/auth"
import { productRoutes } from "./router/product"

const app = express()
app.use(cors())
app.use(express.json())
app.use(requestLogger)

// routes
app.use("/auth", authRoutes)
app.use("/product", productRoutes)

// main
app.get("/", (req: express.Request, res: express.Response) => {
  res.send(`start, ${req.statusCode}`)
})

export { app }
