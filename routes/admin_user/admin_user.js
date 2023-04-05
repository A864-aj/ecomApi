const express=require("express");
const userRouter=express.Router();
const cors=require('cors')

userRouter.use((req,res,next)=>{
    res.header('Access-Control-Allow-origin','*');
    next();
  })
  userRouter.use(cors());
  userRouter.use(express.json())


const {addEmployeeValidation}=require("../../validation/user/user.validation")
const {userGet,userAdd, userDel, userUpdate, userGetHalf}=require('../../controller/admin_user/admin_user');

userRouter.get('/getUserDetails',userGet);
userRouter.get('/getHalfUserDetails',userGetHalf);
userRouter.post('/AddUser',addEmployeeValidation,userAdd);
userRouter.delete('/DelUser',userDel);
userRouter.put('/UserUpdate',addEmployeeValidation,userUpdate);
module.exports=userRouter;
