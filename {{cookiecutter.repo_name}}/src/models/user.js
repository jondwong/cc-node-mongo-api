import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema ({
  username: String,
  email: String,
  password: String,
});

var User = mongoose.model ('User', UserSchema);

export default User;
