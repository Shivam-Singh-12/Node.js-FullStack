// express-validator - check input addEmployee field username and password should not be empty!

const {check, validationResult} = require('express-validator');
// const w = require('./../controllers.winston_config');
const w = require('./winston_config');
const fieldChecks = function(){
    return [
        check('empName', 'Name cannot be empty!').not().isEmpty(),
        check('empPass', 'Password cannot be empty!').not().isEmpty()
    ]
}
// 
const validate = function(req, res, next){
    const errors = validationResult(req);
    // 
    if(errors.isEmpty()){
        return next();
    };
    w.log({
        level: 'error',
        message: errors.array()
    })
    const extractedErrors = [];
    errors.array().map(
        err => extractedErrors.push({[err.param] : err.msg})
    );
    res.status(400).end(errors.array()[0].msg);
}
// 
module.exports = {
    fieldChecks,
    validate
}