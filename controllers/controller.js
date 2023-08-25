const jwt = require('jsonwebtoken');
const Users = require('./../models/employee');
const path = require("path");
const w = require('./winston_config');

exports.getdefault = function (req, res) {
    // res.send("you are on the controller");
    res.sendFile(path.join(__dirname + '../HTML/allemployees.html'))
    res.json({ msg: 'This is CORS-enabled for all origins!' })
}
exports.aboutus = function (req, res) {
    res.send("You are on about us route");
}
exports.addemployee = function (req, res) {
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    // res.send("Post Success output : " + empName +" "+ "Password : " + empPass);
    // res.send("you are on the addemployee route");
    const Emp = new Users();
    Emp.empName = empName;
    Emp.empPass = empPass;
    Emp.save().then(msg => res.send({ "message": "Created" + Emp.empName }));

};
exports.getemployees = function (req, res) {
    Users.find({})
        .then(employeeData => res.send(JSON.stringify(employeeData)))
        .catch(err => console.log(err));

};
// exports.getemployees = function (req, res) {
//     Users.find({}, function(err, results){
//         if(err) res.end(err);
//         res.json(results);
//     })
// };

// get user data by user name as api url param http://localhost:8000/getemployee/Shivam
exports.getemployee = async (req, res) => {
    const empDataByName = req.params.empName;

    try {
        // Find the employee with the provided name using Mongoose
        const employee = await Users.findOne({ empName: empDataByName }
        //     , function (err, results){
        //     if(err){
        //         w.log({
        //             level: 'error',
        //             message: err
        //         });
        //         res.status(503).send("Technical issue, check with your admin");
        //     }
        //     res.json(results);
        // }
        );

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    };
};

exports.updateEmployees = function (req, res) {
    let empName = req.body.empName;
    let newPass = req.body.newPass;
    let empToFind = empName;
    Users.findOneAndUpdate(
        { empName: empToFind },
        { $set: { empPass: newPass } },
        { new: true })
        .then(
            result => {
                if (!result) {
                    res.send({ message: empName + " was NOT UPDATED!" });
                } else {
                    res.send({ message: "Updated " + empName });
                }
            })
        .catch(err => res.send({ message: "Updated Failed" + err.message }));
};
// login user
exports.loginuser = function (req, res) {
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    Users.find({ empName: empName })
        .then(employeeData => {
            if (employeeData.length === 0) {
                res.send({ 'message': empName + 'was not found!' })
            } else {
                if (employeeData[0].empPass == empPass) {
                    // good data  - employee exits so invoke jwt
                    // let token = 
                    jwt.sign(
                        // 
                        {
                            empName: employeeData[0].empName,
                            userID: employeeData[0]._id
                        },
                        "mysecret",
                        { expiresIn: "1h" },
                        (err, token) => {
                            if (err) { res.send(err) };
                            res.send(token)
                        }
                    );
                } else {
                    // res.end("Login Failed !")
                    res.status(401).json({
                        message: 'Login Failed'
                    });
                }
            }
        })
        .catch(err => res.send(err));
};
// 
exports.pughome = function (req, res) {
    //res.send('You are on the pug home route.');
    res.render('pughome');
};


// exports.loginuser = function (req, res) {
//     let empName = req.body.empName;
//     let empPass = req.body.empPass;
//     Users.find({ empName: empName }, function (err, results) {
//         if (err) res.send(err);
//         if (results[0].empPass == empPass) {
//             // good to go
//             jwt.sign(
//                 {
//                     empName: results[0].empName,
//                     userID: results[0]._id
//                 },
//                 "mysecret",
//                 { expiresIn: "1h" },
//                 function (err, token) {
//                     if (err) throw err;
//                     res.end(token)
//                 }
//             );
//         } else {
//             res.end("login Failed");
//         }
//     })
// }