
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const bunyan = require('bunyan');


var Mail = require('./models/email');

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {

        type: 'OAuth2',
        user: 'raj4115vbn@gmail.com',
        clientId: '931633250634-6i0g5kcsf2m4gilkjdo9kqkfjqfdk7gl.apps.googleusercontent.com',
        clientSecret: 'bXrB36bpv1Jx7k4uQ9Cqs6FW',
        refreshToken: '1/Oz3e5oIpAItZy3T8uHnBtiHfAc2S05j5J_3MYkevfVY'
    }  
});



module.exports = function(app) {
    
    //server routes =======================
    // handle things like api calls
    // authentication routes
    
    //sample api route
    app.get('/sent', function(req, res){
       //use mongoose to get all mails in the database
        Mail.find(function(err, mails){
            if(err){
                res.send(err);
            } 
            res.json(mails); // return all mails in json format
            
        });
    });

    app.post('/mail', function(req, res){
        
        let message = {

            to: req.body.to,

            subject: 'Mail from Mail Server App by Rajesh', //

            text: req.body.content
        };
        console.log('Sending Mail');
        transporter.sendMail(message, (error, info) => {
            if (error) {
                req.flash('Error occurred');
                console.log(error.message);
                return;
            }
            console.log('Message sent successfully!');
            req.flash("success", "Mail Sent");
            console.log('Server responded with "%s"', info.response);
            transporter.close();

            Mail.create(req.body, function(err, newMail){
                if(err){
                    res.send(err);
                } else {
                    console.log("Mail Sent!");
                }
            });
        });
    });
    
    //route to handle creating goes here(app.post)
    //route to handle delete goes here (app.delete)
    
    //frontend routes =================================
    //routes to handle all angular requests
    app.get('*', function(req, res){
        res.sendfile('./public/index.html');
    });
}