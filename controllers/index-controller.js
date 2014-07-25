var locations = require("../models/destinations.js")

var controller = {
	
	index: function(req, res) {
		res.render('index', {
			local: locations[0]
		});	
	},


	nextPage: function(req, res) {
		for (var i = 0; i < locations.length; i++) {
			if(req.params.name === locations[i].location) {
				res.render('index', {local: locations[i]})
			}
		}
	}

}

module.exports = controller;