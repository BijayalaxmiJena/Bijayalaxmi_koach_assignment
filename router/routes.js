const express=require('express');
const app=express();
const router = express.Router();
//const {createDB,allUniversity}=require('../controller/university.controller');

const insert=require('../controller/university.controller')
router.post('/universities/add',insert.createDB);
router.get('/universities/list',insert.allUniversity);
router.get('/universities/Details/:UUID',insert.UniversityByUuid);
router.patch('/universities/update',insert.UniversityUpdate);
router.delete('/universities/Delete',insert.UniversitiesDelete);
const collegeInsert=require('../controller/college.controller');
router.post('/colleges/add',collegeInsert.createDbcollege1);
router.get('/colleges/list',collegeInsert.allCollege);
router.get('/colleges/Details/:CUUID',collegeInsert.collegeByUuid);
router.patch('/colleges/update',collegeInsert.CollegeUpdate);
router.get('/colleges/list/:UUID',collegeInsert.CollegeByUUID);
router.delete('/colleges/Delete',collegeInsert.CollegeDelete);
module.exports=router;