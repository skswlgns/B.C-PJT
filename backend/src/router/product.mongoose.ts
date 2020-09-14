import express from "express"
import { ProductModel } from "../model/Product"

/*
mongoose 사용
*/

const productRoutes = express.Router()

// GET 요청
productRoutes.get("/", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    // 해당 Model에서 items 가져오기
    let items: any = await ProductModel.find({})
    items.map((item: any) => {
      return { id: item._id, description: item.description }
    })
    res.json(items)
  } catch (err) {
    res.status(500)
    res.end()
    console.error("Caught error", err)
  }
})

// POST 요청
productRoutes.post("/", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const description = req.body["description"]
  const item = new ProductModel({ description: description })
  await item.save()
  res.end()
})

// PUT 요청 (id는 hash값)
productRoutes.put("/:id", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const description = req.body["description"]
  const id = req.params["id"]
  await ProductModel.findOneAndUpdate({ _id: id }, { description: description })
  res.end()
})

// DELETE 요청 (id는 hash값)
productRoutes.delete("/:id", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const id = req.params["id"]
  await ProductModel.findOneAndRemove({ _id: id })
  res.end()
})

export { productRoutes }
