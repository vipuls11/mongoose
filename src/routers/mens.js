const express = require("express");

const router = new express.Router();
const MensRanking = require('../model/marathonrace')

router.post("/mens", async (req,res)=>{
    try {
        const addingMensRecords =  new MensRanking(req.body);
       const insertMens = await addingMensRecords.save();
            res.status(201).send(insertMens)
        console.log(insertMens) 
    } catch (error) {
        res.status(400).send("error")
    }
})
 
//for all data get 
router.get("/mens", async (req,res)=>{
    try {
        const getMens = await MensRanking.find({}).sort({"ranking":1})  // this will give ascendong order data
        res.status(200).send(getMens)
        console.log(getMens)
        //res.send("hello worl")
    } catch (error) {
        req.send("Error is thei")
    }
})

//we will handle get req of indivisible
router.get("/mens/:id", async(req, res)=>{
try {
    const _id = req.params.id 
    const getMens = await MensRanking.findById(_id)
    res.status(200).send(getMens)
} catch (error) {
    res.status(400).send(error)
}
})


//we will handle patch req of indivisible
router.patch("/mens/:id", async(req, res)=>{
    try {
        const _id = req.params.id 
        const getMens = await MensRanking.findByIdAndUpdate(_id, req.body,{new:true})
        res.status(200).send(getMens)
        console.log(getMens)
    } catch (error) {
        res.status(500).send(error)
    }
    })

 //we will handle patch delete of indivisible
 router.delete("/mens/:id", async(req, res)=>{
    try {
        const _id = req.params.id 
        const getMens = await MensRanking.findByIdAndDelete(_id)
        res.status(204).send(getMens)
        console.log(getMens)
        return
    } catch (error) {
        res.status(500).send(error)
    }
    })   

    
    module.exports =router