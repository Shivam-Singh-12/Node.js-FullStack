"# node.js" 


npm run server
npx json-server --watch -p 1111 db.json

json-server --watch db.json
npx json-server --watch -p 2222 db.json

npx json server 1111 db.json

npm init -y
node index

npm install express

npm install nodemon --save -dev
ADD : package.json file : "scripts": {"start" : "nodemon index.js"}
npm start


mongosh
show dbs
use mydb

show dbs
use mydb
db.createCollection("myUsers")
db.myUsers.insertOne({empName : "Shivam", empPass : "12345"})
db.myUsers.find()
show collections
npm install mongoose

npm install cors

npm install jsonwebtoken
incryption
dealing with databases

npm install morgan
npm install winston
npm install express-validator
npm install mocha chai chai-http --save -dev
ADD : package.json file : "scripts": {"start" : "nodemon index.js, "test": "mocha""}
npm run test


