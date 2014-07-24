var locations = require("../models/destinations.js")

var controller = {
	
	index: function(req, res) {

		res.render('index', {
			local: locations[0]
		});	
	}




}









// module.exports = controller;

