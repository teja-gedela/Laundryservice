const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3001
const API = process.env.dbUrl
const app = require("./app")
mongoose.connect(API).then(()=>{
    console.log("Connected to DB");
})
.catch(()=>{
    console.log("Cannot be connected to DB");
});
app.listen(port,()=>{console.log("Server connected and running on the port ", port);})
