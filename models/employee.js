const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb')
// mongoose.connect('mongodb://127.0.0.1:27017/mydb')

// 
const empSchema = new mongoose.Schema({
    empName: String,
    empPass: String,
    created: {type: Date, default: Date.now}
},{
    collection: 'myUsers'
});
// 
module.exports = mongoose.model('mydb', empSchema);