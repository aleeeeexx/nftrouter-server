module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema(
    {
      __v: { type: Number, select: false },
      email: { type: String, required: false },
      phone: { type: String, required: true },
      passwd: { type: String, required: false, select: false },
      nickname: { type: String, required: false },
      avatar: { type: String, required: false, default: '/user.png' },
    },
    { timestamps: true }
  );
  return mongoose.model('User', UserSchema);
};
