const router = require("express").Router()

let adjective;
let noun;
let verb;
let noun2;
let adjective2;

router.get("/", (req, res) => {

    res.sendFile("/public/start-page.html", {root:process.cwd()})
    
})

router.get("/first-word", (req, res) => {
    res.sendFile("/public/first-word.html", {root:process.cwd()})
})

router.post("/second-word", (req, res) => {
    // console.log(req.body.adjective)
    adjective = req.body.adjective
    res.sendFile("/public/second-word.html", {root:process.cwd()})
})

router.post("/third-word", (req, res) => {
    res.sendFile("/public/third-word.html", {root:process.cwd()})
})

router.post("/fourth-word", (req, res) => {
    res.sendFile("/public/fourth-word.html", {root:process.cwd()})
})

router.post("/fifth-word", (req, res) => {
    res.sendFile("/public/fifth-word.html", {root:process.cwd()})
})

router.post("/end", (req, res) => {

})


module.exports = router