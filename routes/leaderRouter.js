const express=require('express');
const leaderRouter=express.Router()
const bodyParser=require('body-parser');
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end(`Getting the data of team leads`);
})
.post((req,res,next)=>{
    res.end(`Writing the data of team leads: ${req.body.name} of designation: ${req.body.designation}`)
})
leaderRouter.get('/:leaderId',(req,res)=>{
    res.end(`getting team lead data of leaderId: ${req.params.leaderId}`)
})
leaderRouter.put('/:leaderId',(req,res)=>{
    res.end(`Editing team lead data of leaderId: ${req.params.leaderId}`)

})
leaderRouter.delete('/:leaderId',(req,res)=>{
    res.end(`Deleting team lead data record of leaderId: ${req.params.leaderId}`)
})

module.exports=leaderRouter;