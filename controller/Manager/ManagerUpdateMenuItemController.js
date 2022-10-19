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
const {MenuItem} = require("../../entity/MenuItem.js");

class ManagerUpdateMenuItemController{

    ShowUpdateMenuItem(callback) {
        let menuItem = new MenuItem();

        menuItem.ShowMenuItem(function(result){

            callback(result); 
        }); 
    }

    UpdateMenuItem(req, res){
        let menuItem = new MenuItem();

        var menuID = req.body.menuID;
        var menuName = req.body.menuName;
        var price = req.body.price;
        var description = req.body.description;
        var type = req.body.type;

        menuItem.UpdateMenuItem(menuID, menuName, price, description, type, function(result){
            console.log("Updated!");
            req.flash('message', 'Menu Item Has Been Successfully Updated!');
            res.redirect("/Manager/ManagerUpdateMenuItem");
            
        });
    }

    SearchUpdateMenuItem(req, res) {
        let menuItem = new MenuItem(); 

        var attributeType = req.body.attributeType;
        var searchData = req.body.searchData;
        

        menuItem.SearchMenuItem(attributeType, searchData, function(result){
            var path = require('path');
             var filePath = "./boundary/Manager/ManagerUpdateDeleteMenuItemUI.ejs"
            var resolvedPath = path.resolve(filePath);
            res.render(resolvedPath, {data : result, expressSuccess : ""});
        });
    }
}

exports.ManagerUpdateMenuItemController = ManagerUpdateMenuItemController;