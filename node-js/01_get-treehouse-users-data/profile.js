var http = require('http'),
    https = require('https'),
    logMessage = require('./functions').logMessage,
    logError = require('./functions').logError;

function getProfile(username) {
    var req = http.get('http://teamtreehouse.com/' + username + '.json', function (res) {
        // console.log(res);
        var code = res.statusCode;
        if (code === 200) {
            var body = '';
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function () {
                // Parse response
                var json = JSON.parse(body);
                logMessage(username, json.badges, json.points);
            });
        } else if (code === 301) {
            var pathTo = res.headers.location;
            if (pathTo.match(/^https:/)) {
                getHttpsProfile(username);
            }
            console.log('Server redicted your request to ' + pathTo);
        } else {
            var msgObj = {
                message: '[' + code + '] '
                    + http.STATUS_CODES[code]
                    + ' - There was an error getting profile data for "'
                    + username + '".'
            };
            logError(msgObj);
        }
    });

    req.on('error', logError);
}

function getHttpsProfile(username) {
    var req = https.get('https://teamtreehouse.com/' + username + '.json', function (res) {
        // console.log(res);
        var code = res.statusCode;
        if (code === 200) {
            var body = '';
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function () {
                // Parse response
                var json = JSON.parse(body);
                logMessage(username, json.badges, json.points);
            });
        } else {
            var msgObj = {
                message: '[' + code + '] '
                    + http.STATUS_CODES[code]
                    + ' - There was an error getting profile data for "'
                    + username + '".'
            };
            logError(msgObj);
        }
    });

    req.on('error', logError);
}

module.exports.get = getProfile;
