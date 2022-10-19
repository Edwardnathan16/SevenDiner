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
const {Order} = require("../../entity/Order.js");

class StaffUpdateOrderController{

    ShowUpdateOrder(callback) {
        let order = new Order();

        order.ShowOrder(function(result){

            callback(result); 
        }); 
    }

    UpdateOrder(req, res){
        let order = new Order();

        var orderID = req.body.orderID;
        var menuList = req.body.menuList;
        var totalPrice = req.body.totalPrice;
        var paymentMethod = req.body.paymentMethod;
        var couponCode = req.body.couponCode;
        var customerUsername = req.body.customerUsername;

        order.UpdateOrder(orderID, menuList, totalPrice, paymentMethod, couponCode, customerUsername, function(result){
            
            req.flash('message', 'Orders Has Been Successfully Updated!');
            res.redirect("/Staff/StaffUpdateOrder");
        });
    }

    SearchUpdateOrder(req, res) {
        let order = new Order(); 

        var orderID = req.body.orderID;

        order.SearchOrder(orderID, function(result){
            var path = require('path');
            var filePath = "./boundary/Staff/StaffUpdateDeleteOrderUI.ejs"
            var resolvedPath = path.resolve(filePath);
            res.render(resolvedPath, {data : result, expressSuccess : req.flash('message')});
        });
    }
}

exports.StaffUpdateOrderController = StaffUpdateOrderController;