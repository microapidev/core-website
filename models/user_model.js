const fs = require('fs');

const jsonString = fs.readFileSync('models/userdata.json');
const Users = JSON.parse(jsonString);
// console.log(Users)

module.exports = Users;
