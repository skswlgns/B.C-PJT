import mongoose, { Schema } from "mongoose"

const ResumeSchema = new mongoose.Schema({
  resume_name: { type: String, required: true },
  resume_desc: { type: String, required: true },
  resume_file: { type: String },
  resume_validation: { type: Boolean, default: false },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})

const ResumeModel = mongoose.model("Resume", ResumeSchema)

export { ResumeModel }
