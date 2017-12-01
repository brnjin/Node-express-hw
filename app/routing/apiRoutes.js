
var listOfFriends = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(listOfFriends)
	});

	app.post("/api/friends", function(req, res) {
		var results = {};
		results.name = req.body.name
		results.photo = req.body.photo
		results.answer = req.body["answer[]"]
		listOfFriends.push(results);
	})
}