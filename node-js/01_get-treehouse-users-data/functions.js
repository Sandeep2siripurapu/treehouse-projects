module.exports.logMessage = function (username, badges, points) {
    var msg = 'User "' + username + '" has '
        + badges.length + ' badges and '
        + points.JavaScript + ' points in JavaScript.';
    console.log(msg);
};

module.exports.logError = function (error) {
    console.error(error.message);
};
