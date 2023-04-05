const Joi = require("@hapi/joi");


const schema = {

    employee: Joi.object({

        user_name: Joi.string().min(5).max(30).required(),

        user_email: Joi.string().email().min(5).max(50).optional(),

        user_mob: Joi.number().required().min(1000000000).message("Invalid Mobile Number").max(9999999999).message("Invalid Mobile Number"),

        gender: Joi.string().valid("M", "F").required(),

        landmark: Joi.string().min(5).optional(),


        address_line1: Joi.string().min(2).max(100).required(),

        state: Joi.string().min(2).max(100).required(),

        city: Joi.string().min(2).max(100).required(),

        pincode: Joi.number().required().max(999999),

        aadhar_no: Joi.number().required().max(999999999999),


        dob: Joi.date().required(),

        doj: Joi.date().required(),

        emp_password: Joi.string().required().min(8).max(16),
    }
    ),
    role: Joi.object({
        role_id: Joi.string().required(),
        role_name: Joi.string().min(2).message("role name must be given").required()
    }),
    category:Joi.object({
        cat_id:Joi.string().required(),
        category_name:Joi.string().required(),
    })

};

module.exports = schema;
