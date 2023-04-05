const express = require("express");

const cors=require('cors')
const adminCategoryRouter = express.Router();

adminCategoryRouter.use((req,res,next)=>{
  res.header('Access-Control-Allow-origin','*');
  next();
})
adminCategoryRouter.use(cors());
adminCategoryRouter.use(express.json())

const{getCategory,addCategory}=require('../../controller/admin_category/admin_category');


adminCategoryRouter.get('/showCategory', getCategory);
adminCategoryRouter.post('/addCategory', addCategory);

module.exports=adminCategoryRouter