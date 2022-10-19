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

app.use(cookieParser());

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
const {User} = require("../entity/User.js");

class LoginController {
    
    ValidateLogin(req, res) {
        
        let user = new User(); 

        var dataRes;
        var username = req.body.username;
        var password = req.body.password;
        
        user.getlogininfo(username, password, function(result){

            if(result){ 
                dataRes = result;

                if(dataRes.roleName == "useradmin") {
                    res.redirect("/UserAdmin");
                }
                else if(dataRes.roleName == "manager") {
                    res.redirect("/Manager");
                }
                else if(dataRes.roleName == "staff") {
                    res.redirect('/Staff');
                }
                else if(dataRes.roleName == "customer") {
                    res.redirect('/Customer');
                }
                else if(dataRes.roleName == "owner") {
                    res.redirect('/Owner');
                }
            }
            else {

                req.flash('message', 'Wrong Username or Password!')
                res.redirect("/");
                return false;

            }
        });
    }
}

exports.LoginController = LoginController;