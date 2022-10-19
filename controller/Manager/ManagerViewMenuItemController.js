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
const {MenuItem} = require("../../entity/MenuItem.js");

class ManagerViewMenuItemController{

    ShowMenuItem(callback) {
        let menuItem = new MenuItem();

        menuItem.ShowMenuItem(function(result){

            callback(result); 
        }); 
    }
}

exports.ManagerViewMenuItemController = ManagerViewMenuItemController;