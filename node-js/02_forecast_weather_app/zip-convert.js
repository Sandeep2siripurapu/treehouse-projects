var http = require("http"),
    messages = require("./messages"),
    username = require("./config").geoNamesUsername;

var printError = messages.printError,
    printLocationInfo = messages.printLocationInfo;

function getLocation(zip, countryCode, callback) {
    var apiUrl = "http://api.geonames.org/postalCodeLookupJSON"
        + "?postalcode=" + zip
        + "&country=" + countryCode
        + "&username=" + username;

    var req = http.get(apiUrl, function(res) {
        var body = "";
        //  Read the data
        res.on('data', function (dataStream) {
            body += dataStream;
        });
        res.on('end', function() {
            if(res.statusCode === 200 && body) {
                try {
                    var json = JSON.parse(body);
                    if (json.postalcodes) {
                        var location = json.postalcodes[0]
                        callback(null, location);
                    } else {
                        printError(json.status);
                    }
                } catch(error) {
                    printError(error);
                }
            } else {
                var code = res.statusCode;
                var msg = {
                    message: "[" + code + "] " + http.STATUS_CODES[code] + " - "
                        + "There was an error getting the location for zip \"" + zip + "\" to the geonames.org call, "
                        + "this may be a server error or a zip code that may not exist in the U.S."
                }
                printError(msg);
            }
        });
    });

    req.on('error', printError);
}

var showLocation = function(error, location) {
    if (location) {
        try {
            var zipCode = location.postalcode,
                locationName = location.placeName,
                region = location.adminName1,
                country = location.countryCode,
                longitude = location.lng,
                latitude = location.lat;

            printLocationInfo(zipCode, locationName, region, country, longitude, latitude);
            // return location;
        } catch(error) {
            printError(error);
        }
    } else {
        var errorMsg = "There was an error getting the location from the geonames.org server.\n"
                + "[ERROR]: " + error + "\n";
        var notifMsg = "It seems zip code you provided does not exists";

        var msg = {
            message: error ? errorMsg : notifMsg
        }
        printError(msg);
    }
};

module.exports.getLocation = getLocation;
module.exports.showLocation = showLocation;
