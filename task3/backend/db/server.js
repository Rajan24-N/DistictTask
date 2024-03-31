const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://rnandha02:1234@ cluster0.e1slhse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=> {
    console.log("Database is connected successfully")
}).catch((error)=> {
    console.log(`Error in connnecting Database: ${error}`)
})