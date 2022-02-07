import express from "express";

const router = express.Router();

// import model mahasiswa
import Mahasiswa from "../models/mahasiswa.js";

// import verifyToken
import verifyToken from "./verifytoken.js"
// Create
router.post("/", verifyToken, async (req, res) =>{
    const reqMhs = new Mahasiswa({
        nama : req.body.nama,
        nim : req.body.nim,
        prodi : req.body.prodi,
        jurusan : req.body.jurusan,
    });

    try{    
        const mahasiswa = await reqMhs.save();
        res.json(mahasiswa);
    } catch(err){
        res.json({message : err});
    }
});

//Read
router.get("/", verifyToken, async (req, res) =>{
    try{
        const mahasiswa = await Mahasiswa.find();
        res.json(mahasiswa);
    }catch (error){
        res.json({message : error});
    }
});

//Read by id
router.get("/:id", verifyToken, async (req, res)=>{
    try{
        const mahasiswa = await Mahasiswa.findOne({_id: req.params.id});
        res.json(mahasiswa);
    }catch
    (error){
        res.json({message : error});
    }
});

//Update
router.put("/:id", verifyToken, async (req, res)=>{
    try{
        const updateMhs = await Mahasiswa.updateOne(
            {_id : req.params.id},
            {
                nama: req.body.nama,
                nim: req.body.nim,
                prodi: req.body.prodi,
                jurusan: req.body.jurusan,
            }
        );
        res.json(updateMhs);
    } catch(err){
        res.json({message : err});
    }
});

//Delete
router.delete("/:id", verifyToken, async (req, res) =>{
    try{
        const deleteMhs = await Mahasiswa.deleteOne({ _id : req.params.id });
        res.json(deleteMhs);
    } catch (err) {
        res.json({message: err});
    }

});

export default router;