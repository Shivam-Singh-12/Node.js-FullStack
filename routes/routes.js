const controller = require('../controllers/controller')

module.exports = function(router){
    router.get('/', controller.getdefault);
    router.get('/aboutus', controller.aboutus);
    router.post('/addEmployee',  controller.addEmployee);
    router.get('/getEmployees', controller.getEmployees);
    router.put('/updateEmployees', controller.updateEmployees);
}