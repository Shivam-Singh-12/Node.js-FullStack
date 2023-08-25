const controller = require('../controllers/controller');
let authUser = require('../controllers/auth');
const {fieldChecks, validate} = require('./../controllers/validator');

module.exports = function(router){
    router.get('/', controller.getdefault);
    router.get('/aboutus',authUser, controller.aboutus);
    router.post('/addemployee',fieldChecks(),validate, controller.addemployee);
    router.get('/getemployees', controller.getemployees);
    router.put('/updateEmployees', controller.updateEmployees);
    router.post('/loginuserJWTtoken', controller.loginuser);
    router.get('/pughome', controller.pughome);
    router.get('/getemployee/:empName', controller.getemployee);
}