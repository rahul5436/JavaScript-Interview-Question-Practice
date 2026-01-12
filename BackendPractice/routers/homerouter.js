import { Router } from "express";

const homerouters = Router()

homerouters.get('/' ,(req,res)=>{
    console.log("right router hitted")
    return res.status(200).json({
        status:"succceded operation",
        info:"you hited the right router"
    })
})

export default homerouters 

