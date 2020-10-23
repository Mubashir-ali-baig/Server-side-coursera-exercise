const express=require('express')
const bodyParser=require('body-parser')
const dishRouter=express.Router()
dishRouter.use(bodyParser.json())
dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain')
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the dishes to you');
})
.post((req,res,next)=>{
    res.end('Will add dishes: '+ req.body.name + ' with details ' + req.body.description)
});
dishRouter.get('/:dishId',(req,res,next)=>{
    res.end(`Getting all dishes with dishId: ${req.params.dishId}`)
})
dishRouter.put('/:dishId',(req,res,next)=>{
    res.write(`Updating the dish: ${req.params.dishId}\n`)
    res.end(`will update the dish ${req.params.dishId}`)
});
dishRouter.delete('/:dishId',(req,res,next)=>{
    res.end(`Deleting all the dishes of dishId: ${req.params.dishId}`)
});

module.exports = dishRouter;