import express from "express"
import { ProductModel } from "../model/Product"

/*
mongoose 사용
*/

const productRoutes = express.Router()

// GET 요청
productRoutes.get("/", async (req: express.Request, res: express.Response) => {
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
productRoutes.post("/", async (req: express.Request, res: express.Response) => {
  const description = req.body["description"]
  const item = new ProductModel({ description: description })
  await item.save()
  res.status(200).send({ message: "product가 생성되었습니다." })
})

// PUT 요청 (id는 hash값)
productRoutes.put("/:id", async (req: express.Request, res: express.Response) => {
  const description = req.body["description"]
  const id = req.params["id"]
  await ProductModel.findOneAndUpdate({ _id: id }, { description: description })
  res.status(200).send({ message: `${id} product가 수정되었습니다.` })
})

// DELETE 요청 (id는 hash값)
productRoutes.delete("/:id", async (req: express.Request, res: express.Response) => {
  const id = req.params["id"]
  await ProductModel.findOneAndRemove({ _id: id })
  res.status(200).send({ message: `${id} product가 삭제되었습니다.` })
})

export { productRoutes }
