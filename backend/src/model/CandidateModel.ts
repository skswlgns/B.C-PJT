import mongoose, { Schema } from "mongoose"

const CandidateSchema = new mongoose.Schema({
  speak_id: {
    type: Schema.Types.ObjectId,
    ref: "Article",
  },
  user_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
})

const CandidateModel = mongoose.model("Candidate", CandidateSchema)

export { CandidateModel }
