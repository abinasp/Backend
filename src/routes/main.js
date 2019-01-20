import express from 'express';
import SmartQAPI from '../providers/smartq-api';


const router = express.Router();

const API = new SmartQAPI();

router.get("/",(req,res)=>{
    res.send("SmartQ Resturant Backend APP");
});

router.get("/get-resturants", async(req,res)=>{
    try{
        let results = await API.getResturants();
        res.json(results);
    }catch(ex){
        res.json("Failed to get Resurants",ex);
    }
});

router.get("/get-resturant-location", async(req,res)=>{
    try{
        let results = await API.getResturantLocations();
        res.json(results);
    }catch(ex){
        res.json("Failed to get resurants locations",ex);
    }
})


export default router;