
const sql= require('mysql');
const connection = require('../config/db.connection');


exports.createDB=(req,res)=>{
const qry=`insert into universityno1(ID,UUID,Name,code,Totalcollege)values('${req.body.ID}','${req.body.UUID}','${req.body.Name}','${req.body.code}','${req.body.Totalcollege}')`;
connection.query(qry,function(err,rows,fields){
if(!err){
    return res.status(200).json({
        status: 1,
        message: rows
    })

}
else{
    console.log(err);
}
})
}
exports.allUniversity=(req,res)=>{
        const quer='select * from universityno1';
    connection.query(quer,function(err,rows,fields){
    if(!err){
        return res.status(200).json({
            status: 1,
            message: rows
        })
    
    }
    else{
        console.log(err);
    }
    })
    }
    exports.UniversityByUuid=(req,res)=>{
        const quer=`select * from universityno1 where UUID=${req.params.UUID}`;
    connection.query(quer,function(err,rows,fields){
    if(!err){
        return res.status(200).json({
            status: 1,
            message: rows
        })
    
    }
    else{
        console.log(err);
    }
    })
    }
    exports.UniversityUpdate=(req,res)=>{
        const quer=`update universityno1 set ID ='${req.body.ID}',Name='${req.body.Name}',code='${req.body.code}',Totalcollege='${req.body.Totalcollege}'where UUID='${req.body.UUID}'`;
    connection.query(quer,function(err,rows,fields){
    if(!err){
        return res.status(200).json({
            status: 1,
            message: rows
        })
    
    }
    else{
        console.log(err);
    }
    })
    }
    exports.UniversitiesDelete=(req,res)=>{
        const quer=`delete from college where UUID='${req.body.UUID}'`;
    connection.query(quer,function(err,rows,fields){
    if(!err){
        return res.status(200).json({
            status: 1,
            message: rows
        })
    
    }
    else{
        console.log(err);
    }
    })
    }
