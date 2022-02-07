import express from "express";

const router = express.Router();

// import model dosen
import Dosen from "../models/dosen.js";

// import verifyToken
import verifyToken from "./verifytoken.js"

// Create
router.post("/", verifyToken, async (req, res) =>{
    const reqDsn = new Dosen({
        nama : req.body.nama,
        nip : req.body.nip,
        prodi : req.body.prodi,
        jurusan : req.body.jurusan,
    });

    try{    
        const dosen = await reqDsn.save();
        res.json(dosen);
    } catch(err){
        res.json({message : err});
    }
});

//Read
router.get("/", verifyToken, async (req, res) =>{
    try{
        const dosen = await Dosen.find();
        res.json(dosen);
    }catch (error){
        res.json({message : error});
    }
});

//Read by id
router.get("/:id", verifyToken, async (req, res)=>{
    try{
        const dosen = await Dosen.findOne({_id: req.params.id});
        res.json(dosen);
    }catch
    (error){
        res.json({message : error});
    }
});

//Update
router.put("/:id", verifyToken, async (req, res)=>{
    try{
        const updateDsn = await Dosen.updateOne(
            {_id : req.params.id},
            {
                nama: req.body.nama,
                nip: req.body.nip,
                prodi: req.body.prodi,
                jurusan: req.body.jurusan,
            }
        );
        res.json(updateDsn);
    } catch(err){
        res.json({message : err});
    }
});

//Delete
router.delete("/:id", verifyToken, async (req, res) =>{
    try{
        const deleteDsn = await Dosen.deleteOne({ _id : req.params.id });
        res.json(deleteDsn);
    } catch (err) {
        res.json({message: err});
    }

});

export default router;