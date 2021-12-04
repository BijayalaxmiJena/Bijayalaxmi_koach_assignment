

const sql= require('mysql');


const connection=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'university'

});

connection.connect((error)=>{
    if(!error)
    {
        console.log("Dbconnected");
    }
    else{
        console.log("error occors at");
    }
});
module.exports=connection;