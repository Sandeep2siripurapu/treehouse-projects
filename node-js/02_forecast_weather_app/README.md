Node.js console app to get Weather Forecast
===========================================

This application provide forecast about current weather.

### [ USAGE ]

Copy config file

```bash
    cp config.js.example config.js
```

Type in console the following command to start the app

```bash
    node app <country> <zipcode> <zipcode> <zipcode>
```

### [ TEST ]

To test this app you can just type in console

> node app USA 97214

> node app Germany 34246

OR with array of zipcodes

> node app USA 10011 20050 91308 90069 94101 97215

Test when country not set

> node app

Test for unexisting zipcodes

> node app Germany 10011 20050 91308 90069 94101 97215
