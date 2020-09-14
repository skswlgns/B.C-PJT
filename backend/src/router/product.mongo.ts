import express from "express"
import mongodb from "mongodb"
import { MongoHelper } from "../mongoHelper"

/*
기본 mongodb 쿼리문 사용
*/

const productRoutes = express.Router()

const getCollection = () => {
  // DB(test1)에서 collection(product)를 가져온다.
  return MongoHelper.client.db("test1").collection("product")
}

// GET 요청
productRoutes.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // 해당 collection에서
  const collection = getCollection()

  // 모든 값을 찾는다.(가져온다)
  collection.find({}).toArray((err, items) => {
    if (err) {
      res.status(500)
      res.end()
      console.error("Caught error", err)
    } else {
      items = items.map((item) => {
        return { id: item._id, description: item.description }
      })
      res.json(items)
    }
  })
})

// POST 요청
productRoutes.post("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const description = req.body["description"]
  const collection = getCollection()

  // 작성(insert)
  collection.insert({ description: description })

  res.end()
})

// PUT 요청 (id는 hash값)
productRoutes.put("/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const description = req.body["description"]
  const id = req.params["id"]
  const collection = getCollection()

  // id를 이용해서 하나의 객체를 찾아 업데이트(findOneAndUpdate)
  collection.findOneAndUpdate({ _id: new mongodb.ObjectId(id) }, { $set: { description: description } })

  res.end()
})

// DELETE 요청 (id는 hash값)
productRoutes.delete("/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const id = req.params["id"]
  const collection = getCollection()

  // id를 이용해서 하나의 객체를 찾아 삭제(remove)
  collection.remove({ _id: new mongodb.ObjectId(id) })

  res.end()
})

export { productRoutes }
