// Imports
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = 3000;
var mysql = require('mysql');

var bodyParser = require('body-parser');
var urlencodedParser = require('urlencoded-parser'); // ES5
app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlencodedParser);

const sessions = require('express-session');
const cookieParser = require("cookie-parser");
let alert = require('alert'); 

app.use(cookieParser());

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
const {User} = require("../../entity/User.js");

class UserAdminCreateAccountController {

    CreateUserAccount(req, res){

        let user = new User();

        var username = req.body.username;
        var password = req.body.password;
        var email = req.body.email; 
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var roleName = req.body.roleName;
               
        console.log(username);

        user.CheckUsername(username, function(result){

            if(!result){

                req.flash('messageerror', 'Username Has Been Used!');
                res.redirect('/UserAdmin/UserAdminCreateAccount');
                req.flash('messageerror', '');
            }
            else {
                
                user.CreateUserAccount(username, password, email, firstName, lastName, roleName, function(result){
                    
                    alert('Account Succesfully Created')
                    res.redirect("/UserAdmin");                   
                });  
            }
        });     
    }
}

exports.UserAdminCreateAccountController = UserAdminCreateAccountController;