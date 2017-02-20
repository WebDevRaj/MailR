var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mail-server");

//define our mail model

module.exports = mongoose.model('mail', {
    to: String,
	content: String,
	date: {type: Date, default: Date.now}
});