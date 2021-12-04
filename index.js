const express = require('express');
const bodyparser= require('body-parser');
const app= express();
const sql= require('mysql');

const port=3443;

app.use(express.json());

const route=require('./router/routes')
app.use('/',route)


// const connection=sql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'university'

// });

// connection.connect((error)=>{
//     if(!error)
//     {
//         console.log("Dbconnected");
//     }
//     else{
//         console.log("error occors at");
//     }
// });

app.listen(port,function( req,res){
console.log(`server running on the port ${port}`);
});