const express=require('express');
const promoRouter=express.Router()
const bodyParser=require('body-parser');
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end(`Getting the prmotion data of employees`);
})
.post((req,res,next)=>{
    res.end(`Writing the data of employee: ${req.body.name} of designation: ${req.body.designation}`)
})
promoRouter.get('/:promoId',(req,res)=>{
    res.end(`getting promotions of promoId: ${req.params.promoId}`)
})
promoRouter.put('/:promoId',(req,res)=>{
    res.end(`Editing promotion of promoId: ${req.params.promoId}`)

})
promoRouter.delete('/:promoId',(req,res)=>{
    res.end(`Deleting promotions record of promoId: ${req.params.promoId}`)
})

module.exports=promoRouter;