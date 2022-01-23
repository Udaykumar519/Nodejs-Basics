const express=require('express');
const app=express();
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.send("I am connected to api");
})
const PORT=5003;

app.listen(PORT,()=>{
    console.log(`server listening at ${PORT}`);
})