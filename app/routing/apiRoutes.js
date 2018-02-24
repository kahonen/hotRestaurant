var path = require("path");
var reserved = require("data/reserved.js");
var waitlist = require("data/waitlist.js"); 

function getAPI(app) {
    app.get("api/reservation", function(req, res) {
        res.json(reserved);
    });
    app.get("api/waitlist", function(req, res) {
        res.json(waitlist);
    })
}

module.exports = getAPI;