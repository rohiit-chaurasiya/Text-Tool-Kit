const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require('./models/Register')

const app = express()
app.use(cors({
    origin: ['https://text-toolkit.vercel.app'],
    methods: ['POST', 'GET'],
    credentials: true
}));

app.use(express.json())

mongoose.connect('mongodb+srv://rohiit:Kietian9211@cluster0.kw9fxdl.mongodb.net/texttoolkit?retryWrites=true&w=majority');


app.get("/", (req, res) => {
    res.json("Hello");
})

app.post('/signin',async (req,res)=>{
    const {userName, userPassword} = req.body;
    RegisterModel.findOne({userName: userName})
    .then(user => {
        if(user) {
            console.log(user.userName);
            res.json(user.userName)
        } else {
            res.json("User Not Found")
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
  
  })


app.post('/signup', (req, res) => {
    const {userName, userPassword} = req.body;
    RegisterModel.findOne({userName: userName})
    .then(user => {
        if(user) {
            res.json("Already have an account")
        } else {
            RegisterModel.create({userName: userName, userPassword: userPassword})
            .then(result => res.json(result))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running")
})
