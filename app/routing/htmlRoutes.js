var path = require("path");

function getHTML(app) {

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/tables.html"))
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/reservation.html"))
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/index.html"))
});

};

module.exports = getHTML;