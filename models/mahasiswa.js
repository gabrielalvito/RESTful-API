import mongoose from "mongoose";

// Schema database
const mahasiswaDB = mongoose.Schema({
    nama: {
        type:String,
        required:true,
    },
    nim:{
        type:Number,
        required:true,
    },
    prodi:{
        type:String,
        required:true,
    },
    jurusan:{
        type:String,
        required:true,
    },
})

export default mongoose.model("Mahasiswa",mahasiswaDB);