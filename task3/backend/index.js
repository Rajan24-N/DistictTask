const express = require("express")
const app = express()
const cors = require("cors");   // for local access of api
const router = require("./routes/router")
require("./db/server")


app.use(cors());
app.use(express.json());
app.use(router)
const PORT = 5000


app.listen(PORT, ()=> {
    console.log("Backend is up and Running")
})
