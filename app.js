const express = require("express");
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
   
    const logip = req.ip + "at" + new Date() + "/n"
    fs.appendFile('logs.txt',logip, (err) =>{
        if(err){
            throw err;
        }else{
            console.log('file appending completed')
        }
    } )
    res.send(req.ip);
})


/*  
Lets assume a scenerio where there are three user roles.
1. admin
2. user
3. manager
*/

app.listen(port, () => {
    console.log(`server started at ${port}`)
})