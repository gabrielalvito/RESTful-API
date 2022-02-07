// import express
import express from "express";

// import mongoose
import mongoose from "mongoose";

// import mahasiswa routes
import mahasiswaRoutes from "./routes/mahasiswa.js";

// import dosen routes
import dosenRoutes from "./routes/dosen.js";

// import matakuliah routes
import matakuliahRoutes from "./routes/matakuliah.js"

//import bodyParser
import bodyParser from "body-parser";

// import routes
import userRoutes from "./routes/auth.js";

// import packages dotenv & cors
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Router
app.get("/",(req,res)=>{
    res.send("Hello World");
});

// listen
app.listen(process.env.PORT, () =>{
    console.log(`Server running in port ${process.env.PORT}`);
});

// middleware
app.use(bodyParser());
app.use(cors());

//contoh route
app.use("/api/mahasiswa", mahasiswaRoutes)
app.use("/api/matakuliah", matakuliahRoutes);
app.use("/api/dosen", dosenRoutes)
app.use("/api/user", userRoutes);

// Koneksi ke Database
mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

let db = mongoose.connection;

db.on("Error", console.error.bind(console,"Database koneksi Error!!"));
db.once("open", () =>{
    console.log("Koneksi database telah berhasil");
});


