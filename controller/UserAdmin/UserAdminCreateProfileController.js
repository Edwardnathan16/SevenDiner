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
const {Role} = require("../../entity/Role.js");

class UserAdminCreateProfileController {

    CreateUserProfile(req, res){

        let role = new Role();

        var roleName = req.body.roleName;

        role.CheckRoleName(roleName, function(result){

            if(!result){

                req.flash('message', 'Role Has Been Used!');
                res.redirect('/UserAdmin/UserAdminCreateProfile');
            }
            else {
                
                role.CreateUserProfile(roleName, function(result){
        
                    alert('Role Succesfully Created')
        
                    res.redirect("/UserAdmin");                   
                });  
            }
        });     
    }
}

exports.UserAdminCreateProfileController = UserAdminCreateProfileController;