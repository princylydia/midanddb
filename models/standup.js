const mongoose=require('mongoose')

const standupSchema=new mongoose.Schema({
    ProductName:{type:String},
    ProductDesc:{type:String},
    ProductPrice:{type:Number},
    ManufacDate:{type:Date,default:Date.now},
    ExpirationDate:{type:Date,default:Date.now},
    Barcode:{type:Number}
    
})

module.exports=mongoose.model('Standup',standupSchema)