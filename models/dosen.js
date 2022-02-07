import mongoose from "mongoose";

// Schema database
const dosenDB = mongoose.Schema({
    nama: {
        type:String,
        required:true,
    },
    nip:{
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

export default mongoose.model("Dosen",dosenDB);