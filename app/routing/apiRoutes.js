
var listOfFriends = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(listOfFriends)
	});

	app.post("/api/friends", function(req, res) {

		//Saving the new friends data into results to be used later
		var results = {};
		results.name = req.body.name
		results.photo = req.body.photo
		results.answer = req.body["answer[]"]
		listOfFriends.push(results);

		var closeFriend = {
			name: "",
			pohto: "",
			closePoints: Infinity
		}

		//loops to compare one friend at a time
		for (var i = 0; i < listOfFriends.length -1; i++){
			var scoreDiff = 0; 
			for (var j = 0; j < listOfFriends[i].scores.length; j++) {
				scoreDiff += Math.abs(parseInt(listOfFriends[i].scores[j]) - parseInt(results.answer[j]));
				console.log(scoreDiff)
			}

			if(scoreDiff <= closeFriend.closePoints) {
				closeFriend.name = listOfFriends[i].name;
				closeFriend.photo = listOfFriends[i].photo;
				closeFriend.closePoints = scoreDiff;
			}
			console.log(closeFriend);
		}
		//I was able to get listOfFriends score and substract it with the users anwers array. 
		//I would then find listOfFriends with the score that is lowest to be set as the users friends match
		//Save the friend that matches the user and send it to modal
		//Materialzie modal was a little hard to tweek to make it work 
	})
}