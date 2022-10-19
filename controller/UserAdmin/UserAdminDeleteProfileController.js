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
const {Role} = require("../../entity/Role.js");

class UserAdminDeleteProfileController{

    DeleteUserProfile(req, res) {
        let role = new Role();

        var roleID = req.body.roleID;
        role.DeleteUserProfile(roleID, function(result){
            req.flash('message', 'User Profile Has Been Successfully Deleted!');
            res.redirect("/UserAdmin/UserAdminUpdateProfile");
        });
    }
}

exports.UserAdminDeleteProfileController = UserAdminDeleteProfileController;