import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type : String,
        required: true,
        max: 255,
    },
    email:{
        type : String,
        required: true,
        max: 100,
    },
    password:{
        type : String,
        required: true,
        min: 8,
        max: 1024,
    },
    createdAt:{
        type : Date,
        default: Date.now,
    },
});

export default mongoose.model("User", userSchema);