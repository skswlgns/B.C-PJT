import mongoose, { Schema } from "mongoose"

const UserSchema = new mongoose.Schema({
  user_email: { type: String, required: true, unique: true },
  user_nickname: { type: String, required: true },
  user_pwd: { type: String, required: true },
  user_phone: { type: String, default: "" },
  user_egg: { type: Number, default: 0 },
  user_wallet: { type: String, default: "" },
  user_created_at: { type: Date, default: Date.now() },
  user_image: { type: String, default: "" },
  user_is_ts: { type: Boolean, default: false },
  user_name: { type: String, default: "" },
  user_gender: { type: String, default: "" },
  user_lang: { type: String, default: "" },
  user_intro: { type: String, default: "" },
  user_good_lang: [
    {
      type: Schema.Types.ObjectId,
      ref: "GoodLang",
    },
  ],
  user_resume: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resume",
    },
  ],
})

const UserModel = mongoose.model("User", UserSchema)

export { UserModel }
