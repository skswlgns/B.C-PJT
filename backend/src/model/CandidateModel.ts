import mongoose, { Schema } from "mongoose"

const CandidateSchema = new mongoose.Schema({
  article_id: {
    type: Schema.Types.ObjectId,
    ref: "Article",
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  candidate_content: { type: String, required: true, default: "" },
})

const CandidateModel = mongoose.model("Candidate", CandidateSchema)

export { CandidateModel }
