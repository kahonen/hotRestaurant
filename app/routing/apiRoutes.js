var path = require("path");
var reserved = require("../data/reserved.js");
var waitlist = require("../data/waitlist.js"); 

module.exports = function(app) {
    app.get("/api/reservation", function(req, res) {
        console.log(reserved);
        res.json(reserved);
    });

    app.get("/api/waitlist", function(req, res) {
        console.log(reserved);
        res.json(waitlist);
    });

    app.post("/api/reservation/new", function(req, res) {
        
        var newRes = req.body;
        var isReserved = false;

        if (reserved.length <= 5) {
            reserved.push(newRes);
            isReserved = true;
        }
        else {
            waitlist.push(newRes);
        };
        res.json(isReserved);
    })
};