

const sql= require('mysql');
const connection = require('../config/db.connection');


exports.createDbcollege1=(req,res)=>{
    const qry=`insert into college(ID,CUUID,Name,code,UUID)values('${req.body.ID}','${req.body.CUUID}','${req.body.Name}','${req.body.code}','${req.body.UUID}')`;
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
    exports.allCollege=(req,res)=>{
        const quer='select * from college';
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
    exports.collegeByUuid=(req,res)=>{
        const quer=`select * from college where CUUID=${req.params.CUUID}`;
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
    exports.CollegeUpdate=(req,res)=>{
        const quer=`update college set ID ='${req.body.ID}',Name='${req.body.Name}',code='${req.body.code}',UUID='${req.body.UUID}'where CUUID='${req.body.CUUID}'`;
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
    exports.CollegeByUUID=(req,res)=>{
        const quer=`select * from college where UUID='${req.params.UUID}'`;
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
    exports.CollegeDelete=(req,res)=>{
        const quer=`delete from college where ID='${req.body.ID}'`;
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