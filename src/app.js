const express = require("express")
const path = require("path")
const hbs = require("hbs")
const User = require("../models/user")
require("../db/connection")
const sendMailTo = require("../mail/mail")
const app = express()

const port = process.env.PORT || 3000

const publicDirPath = path.join(__dirname, "../public")
const viewsDirPath = path.join(__dirname, "../templates/views")
const partialsDirPath = path.join(__dirname, "../templates/partials")

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(publicDirPath))
app.set("view engine", "hbs")
app.set("views", viewsDirPath)
hbs.registerPartials(partialsDirPath)

app.get("/", (req, res)=>{
    res.render("index")
})

app.post("/", async(req, res)=>{
    
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            query: req.body.query,
            message: req.body.message
        })

        if(!user){
            return res.status(404).send("No user")
        }

        await user.save()
        sendMailTo(req.body.email)
        res.status(201).render("index")


    } catch (e) {
        res.status(400).send(e)
    }

})

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`)
})