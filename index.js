const express=require("express");

const app=express();

//Middleware
app.use(express.json());

const userRouter=require('./routes/admin_user/admin_user.js');
const roleRouter=require('./routes/admin_role/admin_role.js');
const userRoleRouter = require("./routes/admin_users_role/admin_users_role");
const adminPowerRouter=require("./routes/admin_power/admin_power")
const adminCategoryRouter=require("./routes/admin_category/admin_category")

//It is working as middleware (Index.js and routes>admin_user>admin_user.js)
app.use('/admin',userRouter);
app.use('/admin',roleRouter);
app.use('/admin',userRoleRouter);
app.use('/admin',adminPowerRouter);
app.use('/admin',adminCategoryRouter);
app.listen(3999,()=>{
    console.log("Running on 3999");
})