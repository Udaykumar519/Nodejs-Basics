// Good, I made it

const express=require("express");
//using app is not good practice.
//use, router instead
const cors=require("cors")
const app=express()
const router =express.Router();
//This is for our whole app
app.use(cors())
//We are creating end points using router(good practice)
//we are creating node api
router.get("/",(req,res) => {
    res.send("Welcome to your first node API")
})

//We are creating node api
router.get("/students",(req,res) => {
    const students=[
        {
            id:1,
            name:"Scott",
            age:45,
            skill:"ReactJS"
        },
        {
            id:2,
            name:"Adam",
            age:43,
            skill:"Angular"
        },
        {
            id:3,
            name:"Tuan",
            age:41,
            skill:"NodeJS"
        }
    ]
    res.json(students);
})


const PORT=5001

app.use("/api",router)
app.listen(PORT,() => {
    console.log(`Server listening at PORT ${PORT}`);
})