import mongoose, { Schema } from "mongoose"

const CandidateSchema = new mongoose.Schema({
  article_id: {
    type: Schema.Types.ObjectId,
    ref: "Article",
  },
  article_content: { type: String, required: true, default: "" },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
})

const CandidateModel = mongoose.model("Candidate", CandidateSchema)

export { CandidateModel }
