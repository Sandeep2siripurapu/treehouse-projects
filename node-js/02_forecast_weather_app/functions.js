module.exports.getCountryCode = function (country) {
    var codes = {
        USA: 'US',
        Canada: 'CA',
        Germany: 'DE',
        Austria: 'AT',
        Belguim: 'BE',
        France: 'FR',
        Italy: 'IT',
        Netherlands: 'NL',
        Poland: 'PL',
        Spain: 'ES',
        Sweden: 'SE',
        Switzerland: 'CH',
        GreatBritain: 'GB'
    };
    return codes[country] || false;
}

module.exports.getCountryName = function (code) {
    var countries = {
        US: 'USA',
        CA: 'Canada',
        DE: 'Germany',
        AT: 'Austria',
        BE: 'Belguim',
        FR: 'France',
        IT: 'Italy',
        NL: 'Netherlands',
        PL: 'Poland',
        ES: 'Spain',
        SE: 'Sweden',
        CH: 'Switzerland',
        GB: 'Great Britain'
    };
    return countries[code] || code;
}

module.exports.getWindDirection = function (bearing) {
    if (bearing >= 357.0 && bearing <= 3.0){
        return "North (N)";
    } else if(bearing >= 3.01 && bearing <= 38.50) {
        return "North-northwest (NNW)";
    } else if(bearing >= 38.51 && bearing <= 51.50) {
        return "Northwest (NW)"
    } else if(bearing >= 51.51 && bearing <= 87.0) {
        return "West-northwest (WNW)";
    } else if(bearing >= 87.01 && bearing <= 93.0) {
        return "West (W)";
    } else if(bearing >= 93.01 && bearing <= 128.50) {
        return "West-southwest (WSW)";
    } else if(bearing >= 128.51 && bearing <= 141.50) {
        return "Southwest (SW)";
    } else if(bearing >= 141.51 && bearing <= 177.0) {
        return "South-southwest (SSW)";
    } else if(bearing >= 177.01 && bearing <= 183.0) {
        return "South (S)"
    } else if(bearing >= 183.01 && bearing <= 218.50) {
        return "South-southeast (SSE)";
    } else if(bearing >= 218.51 && bearing <= 231.50) {
        return "Southeast (SE)";
    } else if(bearing >= 231.51 && bearing <= 267.0) {
        return "East-southeast (ESE)";
    } else if(bearing >= 267.0 && bearing <= 273.0) {
        return "East (E)";
    } else if(bearing >= 273.01 && bearing <= 308.50) {
        return "East-northeast (ENE)";
    } else if(bearing >= 308.51 && bearing <= 321.50) {
        return "Northeast (NE)";
    } else {
        return "North-northeast (NNE)";
    }
}

module.exports.changeToPercent = function (float) {
    return float * 100;
}

module.exports.convertFahrenheitToCelcium = function (value) {
    // (°F  -  32)  x  5/9 = °C
    return (value - 32) * 5 / 9;
}

module.exports.convertMphToKph = function (value) {
    return value * 1.609344;
}

// http://www.aqua-calc.com/what-is/pressure/hectopascal
module.exports.convertHpaToMmhg = function (value) {
    // Convert hpA (HectoPascal) to mmHg (millimeter mercury)
    return value * 0.750061561303;
}
