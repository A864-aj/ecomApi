const express=require("express");
const roleRouter=express.Router();
const cors=require('cors')

roleRouter.use((req,res,next)=>{
    res.header('Access-Control-Allow-origin','*');
    next();
  })
  roleRouter.use(cors());
  roleRouter.use(express.json())
const {roleDataValidation}=require("../../validation/user/user.validation")
const {getRoles, addRoles, updateRoles, deleteRoles}=require('../../controller/admin_role/admin_role');

roleRouter.get('/getRoles',getRoles);
roleRouter.post('/addRoles',roleDataValidation,addRoles);
roleRouter.put('/updateRoles',roleDataValidation,updateRoles);
roleRouter.delete('/deleteRoles',deleteRoles);
module.exports=roleRouter;
