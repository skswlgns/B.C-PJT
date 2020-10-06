import mongoose, { Schema } from "mongoose"

const StarRateSchema = new mongoose.Schema({
  star_rate_ts_user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  star_rate_rq_user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  article_id: {
    type: Schema.Types.ObjectId,
    ref: "Article",
  },
  star_rate_score: { type: Number, required: true },
})

const StarRateModel = mongoose.model("StarRate", StarRateSchema)

export { StarRateModel }
