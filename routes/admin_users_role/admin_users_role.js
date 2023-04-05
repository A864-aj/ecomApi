const express=require("express");
const userRoleRouter=express.Router();

const {seeUserRoles, giveUserRoles,updateUserRoles,deleteUserRoles}=require('../../controller/admin_users_role/admin_users_role');

userRoleRouter.get('/seeUserRoles',seeUserRoles);
userRoleRouter.post('/giveUserRoles',giveUserRoles);
userRoleRouter.patch('/updateUserRoles',updateUserRoles);
userRoleRouter.delete('/deleteUserRoles',deleteUserRoles);
module.exports=userRoleRouter;
