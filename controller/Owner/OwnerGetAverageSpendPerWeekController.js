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

class OwnerGetAverageSpendPerWeekController{

    GetAverageSpendPerWeek(req, res) {
        let order = new Order(); 
        var datePerWeek = req.body.datePerWeek;


        order.GetAverageSpendPerWeek(datePerWeek, function(orderDetails, result){
            var path = require('path');
            var filePath = "./boundary/Owner/OwnerGetAverageSpendUI.ejs"
            var resolvedPath = path.resolve(filePath);
            res.render(resolvedPath, {data : result, cData:orderDetails});
        });
    }
}

exports.OwnerGetAverageSpendPerWeekController = OwnerGetAverageSpendPerWeekController;