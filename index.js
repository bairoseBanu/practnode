// const express = require("express");
// const mongodb = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const MongoClient = mongodb.MongoClient;
// const client = new MongoClient(url);
// const app = express();
//const PORT=3000;

// app.post("/hello", async (req,res)=>{
//      await client.connect();


// })

// app.listen(PORT,()=>{
//     console.log(`Server is running ${PORT}`)
// });
const express = require('express');

const app = express();
const PORT =(3000);


app.get("/",(req,res)=>{
   res.send('welcome to the server from port $ {PORT}')
});

app.listen(PORT,()=>{
    console.log('server is running at port ${PORT}')
});

