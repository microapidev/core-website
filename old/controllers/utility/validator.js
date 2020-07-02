const Joi = require('@hapi/joi');
 class validation{
    static signupvalidation(req,option){
       const userSchema = Joi.object({
        first_name: Joi.string().min(3).pattern(new RegExp('^[a-zA-Z]{0,30}$')).required(),
        last_name: Joi.string().min(3).max(30).pattern(new RegExp('^[a-zA-Z]{0,30}$')).required(),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).max(30)
        .required(),
        phone: Joi.string().max(12),
        password: Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{0,30}$')).required(),
        cpassword: Joi.string().min(6),
        });

       return userSchema.validate(req,option) 
    }

    static loginvalidation(req, option){
        const userSchema = Joi.object({
            email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).max(30)
            .required(),
            password: Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{0,30}$')).required(),
            });
           return userSchema.validate(req,option) 
    }

}
module.exports = validation;
