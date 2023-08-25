const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const expect = chai.expect;
// 
chai.use(chaiHttp);
// C:\Users\HP\Desktop\Demo\node.js\index.js
// describe('The App', function(){
//     describe('GET/getemployees', function(){
//         it('it should get all document', function(done){
//             chai.request(app).get('/getemployees');
//             done();
//         });
//     });
// });
// describe('The App', () => {
//     it('GET/getemployees should get all documents', async () => {
//       const res = await chai.request(app).get('/getemployees');
//       expect(res).to.have.status(200);
//       // Add more assertions as needed
//     });
//   });
describe('GET /getemployees', function () {
    it('should get all documents', function (done) {
      chai
        .request(app)
        .get('/getemployees')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          // Add more assertions as needed
          done(); // Don't forget to call done() to indicate the completion of the test
        });
    });
  });
  
// 
module.exports = app;