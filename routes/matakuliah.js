import express from "express";

const router = express.Router();

// import model matakuliah
import MataKuliah from "../models/matakuliah.js";

// import verifyToken
import verifyToken from "./verifytoken.js"

// Create
router.post("/", verifyToken, async (req, res) =>{
    const reqMkl = new MataKuliah({
        nama : req.body.nama,
        sks : req.body.sks,
        materi : req.body.materi,
    });

    try{    
        const matakuliah = await reqMkl.save();
        res.json(matakuliah);
    } catch(err){
        res.json({message : err});
    }
});

//Read
router.get("/", verifyToken, async (req, res) =>{
    try{
        const matakuliah = await MataKuliah.find();
        res.json(matakuliah);
    }catch (error){
        res.json({message : error});
    }
});

//Read by id
router.get("/:id", verifyToken, async (req, res)=>{
    try{
        const matakuliah = await MataKuliah.findOne({_id: req.params.id});
        res.json(matakuliah);
    }catch
    (error){
        res.json({message : error});
    }
});

//Update
router.put("/:id", verifyToken, async (req, res)=>{
    try{
        const updateMkl = await MataKuliah.updateOne(
            {_id : req.params.id},
            {
                nama: req.body.nama,
                sks: req.body.sks,
                materi: req.body.materi,
            }
        );
        res.json(updateMkl);
    } catch(err){
        res.json({message : err});
    }
});

//Delete
router.delete("/:id", verifyToken, async (req, res) =>{
    try{
        const deleteMkl = await MataKuliah.deleteOne({ _id : req.params.id });
        res.json(deleteMkl);
    } catch (err) {
        res.json({message: err});
    }

});

export default router;