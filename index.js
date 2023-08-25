// console.log("Hello");
// Create Own Server for appliocation
// const http = require('http');
// const hostname = "localhost";
// const port = 8000;
// const ShivamServer = http.createServer(function (request, response){
//     response.writeHead(200, {'content-type': 'text/plain'});
//     response.write('Hello from Shivam !!');
//     response.end();
// });
// // 
// ShivamServer.listen(port, hostname)
// console.log(`Server running on http://localhost:${port}`);

// express
const express = require('express');
// 
const routes = require('./routes/routes');
// 
const m = require('./controllers/morgan_config');
// 
const port = 8000;
const app = express();
const router = express.Router();
routes(router);
// 
var cors = require('cors');
app.use(cors());
// 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug');

// morgan - user goes to particular app path help to login 
// const Morgan = require('morgan');  //moving to middleware file controllers
// const fs = require('fs');
// const path = require('path');
// const m = new Morgan(
//     'dev',
//     {
//         stream: fs.createWriteStream('./logs/morgan_access.log')
//     }
// );
app.use(m);
// //////////////////////////////////////////////////////////////

// router.get('/', (req, res) =>{
//     res.send("Hello from express");
// });
// // 
// router.post('/apiPost', (req, res) =>{
//     let empName = req.body.empName;
//     let empPass = req.body.empPass;
//     res.send("Post Success output : " + empName + "Password : " + empPass);
// });

//  configiure with router with app
app.use('/', router);
app.use(express.static('HTML'));
// 
app.listen(port, function () {
    console.log(`Server running on http://localhost:${port}`);
    console.log('CORS-enabled web server listening on port 8000');
})