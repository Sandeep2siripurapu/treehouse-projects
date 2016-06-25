var profile = require('./profile');

// console.log(process);
var users = process.argv.slice(2);

users.forEach(profile.get);
