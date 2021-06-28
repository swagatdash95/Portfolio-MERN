import express from 'express'
import response from '../models/responseSchema'
const fs = require("fs");

const router = express.Router({ mergeParams : true });

router.get('/getDetails',(req,res)=>{
    res.send({data:jsonData});
});

router.get('/downloadResume', function(req, res) {
    var file = fs.createReadStream("./attachments/Swagat_Dash.pdf");
    file.pipe(res);
  })

router.post('/submit',(req,res)=>{
    console.log('Submit called in server');
    const {name,email,subject,message} = req.body;
    if(!name || !email)
    {

    }
    const formData = new response({name,email,subject,message});
    formData.save().then(()=>{
       return res.status(201).json({message:"Details saved successfully"});
    }).catch(error => {
       return res.status(500).json({error:"Couldn't save your response"});
    });
});

export default router;