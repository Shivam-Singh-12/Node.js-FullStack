const Users = require('./../models/employee')

exports.getdefault = function(req, res){
    res.send("you are on the controller");
}
exports.aboutus = function(req, res){
        res.send("You are on about us route");
}
exports.addEmployee = function(req, res){
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    // res.send("Post Success output : " + empName +" "+ "Password : " + empPass);
    // res.send("you are on the addEmployee route");
    const Emp = new Users();
    Emp.empName = empName;
    Emp.empPass = empPass;
    Emp.save().then(msg => res.send({"message":"Created" + Emp.empName}));

};
exports.getEmployees = function(req, res){
        Users.find({})
        .then(employeeData => res.send(JSON.stringify(employeeData)))
        .catch(err => console.log(err));

};
exports.updateEmployees = function (req, res){
    let empName = req.body.empName;
    let newPass = req.body.newPass;
    let empToFind = empName;
    Users.findOneAndUpdate(
        {empName : empToFind},
        {$set : {empPass : newPass}},
        {new : true})
        .then(
            result => {
                if(!result){
                    res.send({message : empName + " was NOT UPDATED!"});
                }else{
                    res.send({message : "Updated " + empName});
                }
            })
            .catch(err => res.send({message:"Updated Failed" + err.message}));
};