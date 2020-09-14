import express from "express"
import cors from "cors"
import requestLogger from "./middleware/requestLogger"

import { productRoutes } from "./router/product.mongoose"

const app = express()
app.use(cors())
app.use(express.json())
app.use(requestLogger)

// routes
app.use("/product", productRoutes)

// main
app.get("/", (req: express.Request, res: express.Response) => {
  res.send(`start, ${req.statusCode}`)
})

export { app }
