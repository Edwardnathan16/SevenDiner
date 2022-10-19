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
const {Order} = require("../../entity/Order.js");
const {MenuItem} = require("../../entity/MenuItem.js");

class StaffCreateOrderController {

    CreateOrder(req, res){

        let order = new Order();

        var customerUsername = req.body.customerUsername;
        var couponCode = req.body.couponCode;
        var paymentMethod = req.body.paymentMethod;

        var orderDate = new Date();
        var dd = String(orderDate.getDate()).padStart(2, '0');
        var mm = String(orderDate.getMonth() + 1).padStart(2, '0');
        var yyyy = orderDate.getFullYear();

        orderDate = yyyy + '-' + mm + '-' + dd;


        order.CreateOrder(customerUsername, couponCode, paymentMethod, orderDate, function(result){

            alert('Your Order has been Successfully Placed')
            res.redirect("/Staff"); 
        });
    }

    AddMenuItem(req, res){

        let order = new Order();

        var menuName = req.body.menuName;
        var price = req.body.price;
        var quantity = req.body.quantity;

        order.AddMenuItem(menuName, price, quantity, function(result){
        
            res.redirect("/Staff/StaffCreateOrder");                   
        }); 
    }

    DeleteMenuItem(req, res){

        let order = new Order();

        var placeholderID = req.body.placeholderID;

        order.DeleteMenuItem(placeholderID, function(result){
        
            res.redirect("/Staff/StaffCreateOrder");                   
        }); 
    }

    ShowMenu(callback){
        let menuItem = new MenuItem();

        menuItem.ShowMenuItem(function(result){

            callback(result); 
        }); 
    }

    FetchCurrentOrder(callback){
        let order = new Order(); 

        order.ShowCurrentOrderList(function(result){

            callback(result); 
        }); 
    }
    
}

exports.StaffCreateOrderController = StaffCreateOrderController;