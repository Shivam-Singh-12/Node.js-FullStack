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
const routes = require('./routes/routes')
const port = 8000;
const app = express();
const router = express.Router();
// 
routes(router);
app.use(express.json());
app.use(express.urlencoded({extended : false}));

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
// 
app.listen(port, function(){
    console.log(`Server running on http://localhost:${port}`);
})