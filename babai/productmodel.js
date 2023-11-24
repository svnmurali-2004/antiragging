const mongoose=require("mongoose")
const productsSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[false,"enter the name"]
        },
        rollnumber:{
            type:Number,
            required:false,
            default:0
        },
        branch:{
            type:String,
            required:false
        },
        query:{
            type:String,
            required:false
        },
        email:{
            type:String,
            required:false
        },
        phonenumber:{
            type:String,
            required:false
        },
        date:{
            type:String,
            required:false
        }
    }
)
const Product=mongoose.model('product',productsSchema);
module.exports=Product;