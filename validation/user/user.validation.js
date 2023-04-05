const {employee,role}=require("./user.schema");

module.exports={
    addEmployeeValidation:async(req,res,next)=>{
        const value =await employee.validate(req.body);
        if(value.error){
            res.json({
                success:0,
                message:value.error.details[0].message
            })
        }
        else{
            next();
        }
    } ,

    roleDataValidation:async(req,res,next)=>{
        const value =await role.validate(req.body);
        if(value.error){
            res.json({
                success:0,
                message:value.error.details[0].message
            })
        }
        else{
            next();
        }
    } ,
    



}