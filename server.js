
const express=require('express');
const app=express("express");
const mongoose=require("mongoose");
const products=require('./babai/productmodel')

const cors=require('cors')
app.use(cors())
mongoose.connect('mongodb+srv://svnmurali1:12345@cluster0.thuw9pg.mongodb.net/testing1?retryWrites=true&w=majority').then(console.log("database connected successfully"));
app.use(express.json())
let islogin=false;
app.post("/dataentry",async(req,res)=>{
    const data=await products.create(req.body);
    res.send(data);
});
app.get("/",async(req,res)=>{
    res.send("hello");
});
app.post("/signup",async(req,res)=>{
    const data= await products.create(req.body);
    res.send(data);
});
app.get("/data",async(req,res)=>{
    const data=await products.find({})
    const filtereddata=data.filter(item=>{return item.name=="murali"})
    res.json(filtereddata);
})
app.get("/fulldata",async(req,res)=>{
    
    const fulldata=await products.find({})
    const elements=fulldata.map(item=>{
        const html=('<div class="box">'+
        '<h1 class="head">Name :'+item.name+'</h1>'+
        '<h1 class="head">Rollnumber :'+item.rollnumber+'</h1>'+
        '<h1 class="head">Date :'+item.date+'</h1>'+
        '<h1 class="head">Branch :'+item.branch+'</h1>'+
        '<h1 class="head">Section :'+item.section +'</h1>'+
        '<h1 class="head">Phonenumber :'+item.phonenumber+'</h1>'+
        '<div  class="query" >'+item.query+'</div></div>');
        return html;
    }).join("\n");
    
    res.send('<h1 class="head">Queries Received</h1>'+elements);
    
    /*else{
        let text=(
        <div className="w-95 h-50 bg-white p-8 rounded shadow-md">
          <p className="text-green-500 text-lg font-semibold">Please login to proceed</p>
        </div>
      );
        res.send(text);
    }*/
});
const seconddatabase=mongoose.createConnection('mongodb+srv://svnmurali1:12345@cluster0.thuw9pg.mongodb.net/logins?retryWrites=true&w=majority')
const loginSchema = mongoose.Schema({
    rollnumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true    
    },
    name: {
        type: String,
        required: true
    }
});


const LoginModel = seconddatabase.model('LoginModel', loginSchema);


let logindetails={}
app.post("/testlogin",async(req,res)=>{
    logindetails=req.body;
});
app.get("/testlogin",async(req,res)=>{
    let data=await LoginModel.find({});
    let filtereddata=data.filter(item=>{if (item.rollnumber==logindetails.rollnumber && item.password==logindetails.password){return item}})
    
    if (filtereddata.length==1){
        islogin=true
        res.send(true);
    }else{
        islogin=false; 
        logindetails=[]
        res.send(false)
    }
    //res.send(logindetails)
    //res.send(filtereddata)
});
app.post("/signup1",async(req,res)=>{
    let details=await LoginModel.find({});
    let match="true"
    details.map(item=>{
        
        if (item.rollnumber==req.body.rollnumber){
            console.log(item,req.body)
            match="false"
            return true
        }
    });
    
    if (match==="true"){
        let data=await LoginModel.create(req.body);
        res.send("true")
    }else{
        res.send('false')
    }
    
});
app.get("/getlogin",async(req,res)=>{
    res.send(logindetails);
})
app.listen(5000,console.log("server started"));
   
/*const express =require('express');
const mongoose = require('mongoose');
const app=express('express')
const Product =require('./babai/productmodel')
//const Product=require('./babai/productmodel')
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("on ganeshaya namah")
})
mongoose.set('strictQuery',false)

mongoose.connect('mongodb+srv://svnmurali1:12345@cluster0.thuw9pg.mongodb.net/testing1?retryWrites=true&w=majority').then(()=>{
    console.log("connected to database")
    app.listen(3000,()=>console.log("server started"))
}).catch(err=>{console.log(err.message)})

app.get('/blog',(req,res)=>{
    res.send("data blog")
})
app.post('/addproduct',async(req,res)=>{
    try {
    const products=await Product.create(req.body);
    res.send(products);
    }
    catch (error){
        console.log(error.message);
        res.json({message:"murali"})
    }
})

app.get('/products',async(req,res)=>{
    const products=await Product.find({});
    console.log(products);
    res.status(200).json(products);
});*/
