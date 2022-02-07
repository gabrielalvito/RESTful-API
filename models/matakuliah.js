import mongoose from "mongoose";

// Schema database
const matkulDB = mongoose.Schema({
    nama: {
        type:String,
        required:true,
    },
    sks:{
        type:Number,
        required:true,
    },
    materi:{
        type:String,
        required:true,
    },
})

export default mongoose.model("MataKuliah",matkulDB);