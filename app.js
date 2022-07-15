const { urlencoded } = require("express");
const Express = require("express")
const app = Express();

const mainRoutes = require("./controllers/mainRoutes")

const PORT = 4000;

let staticServer = Express.static(process.cwd() + "public")

console.log(process.cwd() + "public")

app.use(Express.urlencoded({extended:true}))
app.use(staticServer)
app.use(mainRoutes)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})