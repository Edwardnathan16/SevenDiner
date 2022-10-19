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

class CustomerMakePaymentController {


    MakePayment(req, res){

        let order = new Order();

        var ccNumber = req.body.ccNumber;
        var cvv = req.body.cvv;
        var expDate = req.body.expDate;
        order.MakePayment(ccNumber, cvv, expDate, function(result, msg){
        
            if (!result)
            {
                req.flash('message', msg);
                res.redirect('/Customer/CustomerMakePayment');
            }
            else
            {
                alert('Your Order has been Successfully Placed')
                res.redirect('/Customer');
            }                
        }); 
    }

   
}

exports.CustomerMakePaymentController = CustomerMakePaymentController;