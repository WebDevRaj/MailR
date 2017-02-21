var mongoose = require('mongoose');

mongoose.connect("mongodb://raj4115:raj5114@ds145359.mlab.com:45359/mailr4115");

//define our mail model

module.exports = mongoose.model('mail', {
    to: String,
	content: String,
	date: {type: Date, default: Date.now}
});