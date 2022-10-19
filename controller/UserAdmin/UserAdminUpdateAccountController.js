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
const {User} = require("../../entity/User.js");
const {Role} = require("../../entity/Role.js");

class UserAdminUpdateAccountController{

    ShowUpdateUserAccount(callback) {
        let user = new User();

        user.ShowUserAccount(function(result){

            callback(result); 
        }); 
    }

    UpdateUserAccount(req, res){
        let user = new User();

        var username = req.body.username;
        var password = req.body.password;
        var email = req.body.email;
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var roleName = req.body.roleName;


        user.UpdateUserAccount(username, password, email, firstName, lastName, roleName, function(result){
           
            req.flash('message', 'User Account Has Been Successfully Updated!');
            res.redirect("/UserAdmin/UserAdminUpdateAccount");
            
        });
    }

    SearchUpdateUserAccount(req, res) {
        let user = new User(); 

        var userType = req.body.userType;
        var attributeType = req.body.attributeType;
        var searchData = req.body.searchData;

        let adminController = new UserAdminUpdateAccountController();
        var result1;

        adminController.FetchRole(function(result12) {
            result1 = result12;
        });

        user.SearchUserAccount(userType, attributeType, searchData, function(result){
            var path = require('path');
             var filePath = "./boundary/UserAdmin/UserAdminUpdateDeleteAccountUI.ejs"
            var resolvedPath = path.resolve(filePath);
            res.render(resolvedPath, {data : result, roleData : result1, expressSuccess : ""});
        });
    }

    FetchRole(callback){
        let role = new Role(); 

        role.ShowRoleList(function(result){

            callback(result); 
        }); 
    }

    
}

exports.UserAdminUpdateAccountController = UserAdminUpdateAccountController;