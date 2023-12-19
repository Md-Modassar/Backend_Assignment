const express=require("express")
const app=express();

const cors=require('cors');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(require("./src/routes"))

app.listen(3001,()=>{
    console.log("server running")
})