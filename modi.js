const express =require('express');
const { default: mongoose } = require('mongoose');
const app=express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('<h1>hello murali</h1>')
});
const movies=[
    {
        name:"athadu",
        year:"2030"
    },
    {
        name:"polimera",
        year:"2023"
    }
]
app.get("/movies",(req,res)=>{
    res.send(movies);
});
app.get("/movies/:id",(req,res)=>{
    const result=movies.filter(data=>data.name.toString()==req.params.id);
    return res.send(result);
})
const products =[
    
    {
        id:1,
        name:"iphone"
    },
    {
        id:2,
        name:"redmi"
    }
]
app.get("/products",(req,res)=>{
    res.json(products)
});
app.get("/products/:id",(req,res)=>{
 const readData=products.filter(item=> item.id.toString() ==req.params.id)
 return res.json(readData);
});
app.post("/addproducts",(req,res)=>{
const {id,name} =req.body;
    console.log(id,name);
    return res.send("data stored")
})
app.get("/bayya",(req,res)=>{
    res.send("<h1>hello bacchom</h1>")
});
app.listen(3000,()=> console.log("server is running"));
