const mongoose=require("mongoose")
mongoose.connect(process.env.mongodb_connection_url)
const dbConnect=mongoose.connection;

dbConnect.on('connected',() => console.log("Database is connected"))
dbConnect.on('error',(error) => {
    console.log("Database is not connected", error) 
    process.exit(1)
})