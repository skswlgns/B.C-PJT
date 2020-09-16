import mongoose, { Schema } from "mongoose"

const GoodLangSchema = new mongoose.Schema({
  user_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  good_lang: { type: String, required: true },
})

const GoodLangModel = mongoose.model("GoodLang", GoodLangSchema)

export { GoodLangModel }
