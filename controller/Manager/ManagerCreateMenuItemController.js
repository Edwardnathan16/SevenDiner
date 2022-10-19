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
const {MenuItem} = require("../../entity/MenuItem.js");

class ManagerCreateMenuItemController {

    CreateMenuItem(req, res){

        let menuItem = new MenuItem();

        var menuName = req.body.menuName;
        var price = req.body.price;
        var description = req.body.description; 
        var type = req.body.type;

        menuItem.CheckMenuName(menuName, function(result){

            if(!result){

                req.flash('message', 'Menu Name Has Been Used!');
                res.redirect('/Manager/ManagerCreateMenuItem');
            }
            else {
                
                menuItem.CreateMenuItem(menuName, price, description, type, function(result){
                    alert('Menu Item Succesfully Created')
        
                    res.redirect("/Manager");                   
                });  
            }
        });     
    }
}

exports.ManagerCreateMenuItemController = ManagerCreateMenuItemController;