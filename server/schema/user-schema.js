import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    phone: Number,
    password: String,
    reEntered: String,
    viewCount: { type: Number, default: 0 }
})

const User = mongoose.model('users', userSchema);
export default User;