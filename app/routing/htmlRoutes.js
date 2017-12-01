//Dependecies
var path = require("path");

module.exports = function(app) {

	//GET routes to send user to survey page or home
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};