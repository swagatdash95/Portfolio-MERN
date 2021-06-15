import mongoose from 'mongoose';

const responseSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
})

const response = mongoose.model('RESPONSE',responseSchema);

module.exports = response;