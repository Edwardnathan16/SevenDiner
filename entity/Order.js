const { application } = require('express');
const util = require('util');
var mysql = require('mysql');
const e = require('connect-flash');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restaurantapp"
});

con.connect();

class Order {
    orderID;
    menuList;
    totalPrice;
    paymentMethod;
    couponCode;
    customerUsername;
    orderDate;

    constructor(orderID, menuList, totalPrice, paymentMethod, couponCode, customerUsername, orderDate){
        this.orderID = orderID;
        this.menuList = menuList;
        this.totalPrice = totalPrice;
        this.paymentMethod = paymentMethod;
        this.couponCode = couponCode;
        this.customerUsername = customerUsername;
        this.orderDate = orderDate;
    }

    getOrderID()
    {
        return this.orderID;
    }

    setOrderID(orderID)
    {
        this.orderID = orderID;
    }

    getMenuList()
    {
        return this.menuList;
    }

    setMenuList(menuList)
    {
        this.menuList = menuList;
    }

    getTotalPrice()
    {
        return this.totalPrice;
    }

    setTotalPrice(totalPrice)
    {
        this.totalPrice = totalPrice;
    }

    getPaymentMethod()
    {
        return this.paymentMethod;
    }

    setPaymentMethod(paymentMethod)
    {
        this.paymentMethod = paymentMethod;
    }

    getCouponCode()
    {
        return this.couponCode;
    }

    setCouponCode(couponCode)
    {
        this.couponCode = couponCode;
    }

    getCustomerUsername()
    {
        return this.customerUsername;
    }

    setCustomerUsername(customerUsername)
    {
        this.customerUsername = customerUsername;
    }

    getOrderDate()
    {
        return this.orderDate;
    }

    setOrderDate(orderDate)
    {
        this.orderDate = orderDate;
    }


    //THIS IS ON THE STAFF CREATE ORDER FUNCTIONALITY, NOT STAFF SEARCH ORDER FUNCTION
    AddMenuItem(menuName, price, quantity, callback){

        var sql = "INSERT INTO currentorder (menuName, price, quantity) VALUES ('" + menuName + "', '" + price + "', '" + quantity + "')";

        con.query(sql, function(err, results){
            if (err){ 
            throw err;
            
            }       
            var dataRes = results;

            return callback(dataRes);
        })
    }

    //THIS IS ON THE STAFF CREATE ORDER FUNCTIONALITY, NOT STAFF SEARCH ORDER FUNCTION
    ShowCurrentOrderList(callback){

        let sql = "SELECT * FROM currentorder;";

        con.query(sql, function(err, results){
            if (err){throw err;}

            var aRes;

            if(results.length>0) { //result is not empty

                aRes = results;
                
                return callback(aRes);

                } else {
                    return callback(false);
                }
        })
    }

    //THIS IS ON THE STAFF CREATE ORDER FUNCTIONALITY, NOT STAFF SEARCH ORDER FUNCTION
    DeleteMenuItem(placeholderID, callback){

        let sql = "DELETE FROM currentorder WHERE placeholderID = '" + placeholderID + "';";

        con.query(sql, function(err, results){
            if (err){ 
                throw err;
            } 
            
            return callback(true);
        });
    }

    //THIS IS ON THE STAFF CREATE ORDER FUNCTIONALITY, NOT STAFF SEARCH ORDER FUNCTION
    CreateOrder(customerUsername, couponCode, paymentMethod, orderDate, callback){

        //Select
        let sql = "SELECT menuName, price, quantity FROM currentorder;";
        var menuList = "";
        var totalPrice = 0.0;

        con.query(sql, function(err, results){
            if (err){ 

                throw err;
            } 
            
            for (let i = 0; i < results.length; i++) {

                menuList = menuList + results[i].quantity + "_" + results[i].menuName  + ", ";
                totalPrice = totalPrice + (results[i].price * results[i].quantity);
            }

            if (couponCode == "DISCOUNT30") {

                totalPrice = totalPrice - (totalPrice * 0.3);
            } 
            else if (couponCode == "DISCOUNT20") {
    
                totalPrice = totalPrice - (totalPrice * 0.2);
            }

            totalPrice = totalPrice.toFixed(2);
    
            //Insert
            let sql1 = "INSERT INTO orders (menuList, totalPrice, paymentMethod, couponCode, customerUsername, orderDate) VALUES ('" + menuList + "', '"
             + totalPrice + "', '" + paymentMethod + "', '" + couponCode + "', '" + customerUsername + "', '" + orderDate +"')";
    
            con.query(sql1, function(err, results){
                
                if (err){ 
                    throw err;
                } 

                //Delete
                let sql2 = "DELETE FROM currentorder;";
        
                con.query(sql2, function(err, results){
                    if (err){ 
                        throw err;
                    } 
                    
                    return callback(true);
                });
            });
        });
    }

    //hehe
    ShowOrder (callback) {
        let sql = "SELECT orderID, menuList, totalPrice, paymentMethod, couponCode, customerUsername, orderDate FROM orders;";

        con.query(sql, function(err, results){
            if (err){throw err;}

        var aRes;
        console.log(results[0].orderDate)

        if(results.length>0) { //result is not empty
            for (let i = 0; i < results.length; i++)
            {
                results[i].orderDate = results[i].orderDate.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' }).split('-')[0];
                // results[i].orderDate = results[i].orderDate.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' }).split('-')[0];
            }
            aRes = results;

            return callback(aRes);

            } else {
                return callback(false);
            }
        })
    }
    SearchOrder (orderID, callback) {
        
        let sql = "SELECT * FROM orders WHERE orderID = '" + orderID + "'";

        con.query(sql, function(err, results){
            if (err){ 
                throw err;       
            }

            var dataRes;

            if(results.length>0) { //result is not empty
                for (let i = 0; i < results.length; i++)
                {
                    // results[i].orderDate = results[i].orderDate.toISOString().split('T')[0];
                    results[i].orderDate = results[i].orderDate.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' }).split('-')[0];
                }
                dataRes = results;

                return callback(dataRes);

            } 
            else {
                return callback(false);
            }
        })
    }

    UpdateOrder(orderID, menuList, totalPrice, paymentMethod, couponCode, customerUsername, callback){

        let sql = "UPDATE orders SET menuList = '" + menuList + "', totalPrice = '" 
        + totalPrice + "', paymentMethod = '" + paymentMethod + "', couponCode = '" + couponCode 
        + "', customerUsername = '" + customerUsername +"' WHERE orderID = '" + orderID + "';";

        con.query(sql, function(err, results){
            if (err){ 
                throw err;
            } 
            
            return callback(true);
        });
    }

    DeleteOrder(orderID, callback){

        let sql = "DELETE FROM orders WHERE orderID = '" + orderID + "';";

        con.query(sql, function(err, results){
            if (err){ 
                throw err;
            } 
            
            return callback(true);
        });
    }

    MakePayment(ccNumber, cvv, expDate, callback) {
        var msg;
        var ToDate = new Date();
        if (ccNumber.length !== 16 && /^\d+$/.test(ccNumber))
        {
            msg = "Invalid credit card number, should contain 16 digits!";
            return callback(false, msg);
           
        }
        else if (cvv.length !== 3)
        {
            msg = "Invalid CVV/CVC number, should contain 3 digits";
            return callback(false, msg);

        }
        else if (new Date(expDate).getTime() <= ToDate.getTime())
        {
            msg = "Credit card is expired";
            return callback(false, msg);
        }
        else
        {
            return callback(true);
        } 

    }

    GetAverageSpendPerDay(datePerDay, callback){

        let sql = "SELECT * FROM orders WHERE orderDate = '" + datePerDay + "'";

        con.query(sql, function(err, results){
            if (err){ 
                throw err;       
            }

            var dataRes;
            var orderDetails;
            var averageSpend = 0;
            if(results.length>0) { //result is not empty
                
                for (let i = 0; i < results.length; i++)
                {
                    console.log(results[i].totalPrice);
                    averageSpend = averageSpend + results[i].totalPrice;
                    results[i].orderDate = results[i].orderDate.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' }).split('-')[0];
                }

                if (results.length > 0)
                {
                    averageSpend = averageSpend/results.length;
                    averageSpend = averageSpend.toFixed(2);
                }
                dataRes = averageSpend;
                orderDetails = results;

                return callback(orderDetails, dataRes);

            } 
            else {
                return callback(false, averageSpend);
            }
        })
    }

    GetAverageSpendPerWeek(datePerWeek, callback){

        let sql = "SELECT * FROM orders where orderdate between date_sub('" + datePerWeek + "',INTERVAL 1 WEEK) and '" + datePerWeek + "';";

        

        con.query(sql, function(err, results){
            if (err){ 
                throw err;       
            }

            var dataRes;
            var orderDetails;
            var averageSpend = 0;
            if(results.length>0) { //result is not empty
                
                for (let i = 0; i < results.length; i++)
                {
                    console.log(results[i].totalPrice);
                    averageSpend = averageSpend + results[i].totalPrice;
                    results[i].orderDate = results[i].orderDate.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' }).split('-')[0];
                }

                if (results.length > 0)
                {
                    averageSpend = averageSpend/results.length;
                    averageSpend = averageSpend.toFixed(2);
                }
                dataRes = averageSpend;
                orderDetails = results;

                return callback(orderDetails, dataRes);

            } 
            else {
                return callback(false, averageSpend);
            }
        })
    }

    GetAverageSpendPerMonth(datePerMonth, callback){
        let sql = "SELECT * FROM orders where orderdate between date_sub('" + datePerMonth + "',INTERVAL 1 MONTH) and '" + datePerMonth + "';";

        

        con.query(sql, function(err, results){
            if (err){ 
                throw err;       
            }

            var dataRes;
            var orderDetails;
            var averageSpend = 0;
            if(results.length>0) { //result is not empty
                
                for (let i = 0; i < results.length; i++)
                {
                    console.log(results[i].totalPrice);
                    averageSpend = averageSpend + results[i].totalPrice;
                    results[i].orderDate = results[i].orderDate.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' }).split('-')[0];
                }
                if (results.length > 0)
                {
                    averageSpend = averageSpend/results.length;
                    averageSpend = averageSpend.toFixed(2);
                }
                dataRes = averageSpend;
                orderDetails = results;

                return callback(orderDetails, dataRes);

            } 
            else {
                return callback(false, averageSpend);
            }
        })
    }

    GetFrequencyOfVisitPerDay(datePerDay, callback){
        let sql = "SELECT * FROM orders WHERE orderDate = '" + datePerDay + "'";

        

        con.query(sql, function(err, results){
            if (err){ 
                throw err;       
            }

            var dataRes;

            if(results.length>0) { //result is not empty
                for (let i = 0; i < results.length; i++)
                {
                    results[i].orderDate = results[i].orderDate.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' }).split('-')[0];
                }
                
                dataRes = results;

                return callback(dataRes);

            } 
            else {
                return callback(false);
            }
        })
    }

    GetFrequencyOfVisitPerWeek(datePerWeek, callback){
        let sql = "SELECT * FROM orders where orderdate between date_sub('" + datePerWeek + "',INTERVAL 1 WEEK) and '" + datePerWeek + "';";

        

        con.query(sql, function(err, results){
            if (err){ 
                throw err;       
            }

            var dataRes;

            if(results.length>0) { //result is not empty
                for (let i = 0; i < results.length; i++)
                {
                    results[i].orderDate = results[i].orderDate.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' }).split('-')[0];
                }
                
                dataRes = results;

                return callback(dataRes);

            } 
            else {
                return callback(false);
            }
        })
    }

    GetFrequencyOfVisitPerMonth(datePerMonth, callback){
        let sql = "SELECT * FROM orders where orderdate between date_sub('" + datePerMonth + "',INTERVAL 1 MONTH) and '" + datePerMonth + "';";

        

        con.query(sql, function(err, results){
            if (err){ 
                throw err;       
            }

            var dataRes;

            if(results.length>0) { //result is not empty
                for (let i = 0; i < results.length; i++)
                {
                    results[i].orderDate = results[i].orderDate.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' }).split('-')[0];
                }
                
                dataRes = results;

                return callback(dataRes);

            } 
            else {
                return callback(false);
            }
        })
    }

    GetPreferredDishesPerDay(datePerDay, callback){
        let sql = "SELECT * FROM orders WHERE orderDate = '" + datePerDay + "'";
        const arr = [];
        const arrqty = [];

        con.query(sql, function(err, results){
            if (err){ 
                throw err;       
            }

            var dataRes;
            var dataQuan;

            if(results.length>0) { //result is not empty
                

                for (let i = 0; i < results.length; i++)
                {
                    var menu = results[i].menuList.split(', ');
                    
                    console.log(menu);
                    for (let j = 0; j < menu.length; j++)
                    {
                        if (menu[j] !== '')
                        {
                            var menuN = menu[j].split('_');
                            if (arr.indexOf(menuN[1]) === -1)
                            {
                                arr.push(menuN[1]);
                                arrqty.push(parseInt(menuN[0]));
                            } 
                            else
                            {
                                var index = arr.indexOf(menuN[1]);
                                var quan = arrqty[index];
                                quan = quan + parseInt(menuN[0]);
                                arrqty[index] = quan;
                            }
                        }
                    }
                }
                console.log(arr);
                console.log(arrqty);

                var initialQty = 0;
                var highestIndex;
                for (let i = 0; i < arrqty.length; i++)
                {
                    if (initialQty < arrqty[i])
                    {
                        initialQty = arrqty[i];
                        highestIndex = i;
                    }
                }
                
                dataRes = arr[highestIndex];
                dataQuan = arrqty[highestIndex];

                return callback(dataRes, dataQuan);

            } 
            else {
                return callback("None", 0);
            }
        })
    }

    GetPreferredDishesPerWeek(datePerWeek, callback){
        let sql = "SELECT * FROM orders where orderdate between date_sub('" + datePerWeek + "',INTERVAL 1 WEEK) and '" + datePerWeek + "';";
        const arr = [];
        const arrqty = [];

        con.query(sql, function(err, results){
            if (err){ 
                throw err;       
            }

            var dataRes;
            var dataQuan;

            if(results.length>0) { //result is not empty
                

                for (let i = 0; i < results.length; i++)
                {
                    var menu = results[i].menuList.split(', ');
                    
                    console.log(menu);
                    for (let j = 0; j < menu.length; j++)
                    {
                        if (menu[j] !== '')
                        {
                            var menuN = menu[j].split('_');
                            if (arr.indexOf(menuN[1]) === -1)
                            {
                                arr.push(menuN[1]);
                                arrqty.push(parseInt(menuN[0]));
                            } 
                            else
                            {
                                var index = arr.indexOf(menuN[1]);
                                var quan = arrqty[index];
                                quan = quan + parseInt(menuN[0]);
                                arrqty[index] = quan;
                            }
                        }
                    }
                }
                console.log(arr);
                console.log(arrqty);

                var initialQty = 0;
                var highestIndex;
                for (let i = 0; i < arrqty.length; i++)
                {
                    if (initialQty < arrqty[i])
                    {
                        initialQty = arrqty[i];
                        highestIndex = i;
                    }
                }
                
                dataRes = arr[highestIndex];
                dataQuan = arrqty[highestIndex];

                return callback(dataRes, dataQuan);

            } 
            else {
                return callback("None", 0);
            }
        })
    }

    GetPreferredDishesPerMonth(datePerMonth, callback){
        let sql = "SELECT * FROM orders where orderdate between date_sub('" + datePerMonth + "',INTERVAL 1 MONTH) and '" + datePerMonth + "';";
        const arr = [];
        const arrqty = [];

        con.query(sql, function(err, results){
            if (err){ 
                throw err;       
            }

            var dataRes;
            var dataQuan;

            if(results.length>0) { //result is not empty
                

                for (let i = 0; i < results.length; i++)
                {
                    var menu = results[i].menuList.split(', ');
                    
                    console.log(menu);
                    for (let j = 0; j < menu.length; j++)
                    {
                        if (menu[j] !== '')
                        {
                            var menuN = menu[j].split('_');
                            if (arr.indexOf(menuN[1]) === -1)
                            {
                                arr.push(menuN[1]);
                                arrqty.push(parseInt(menuN[0]));
                            } 
                            else
                            {
                                var index = arr.indexOf(menuN[1]);
                                var quan = arrqty[index];
                                quan = quan + parseInt(menuN[0]);
                                arrqty[index] = quan;
                            }
                        }
                    }
                }
                console.log(arr);
                console.log(arrqty);

                var initialQty = 0;
                var highestIndex;
                for (let i = 0; i < arrqty.length; i++)
                {
                    if (initialQty < arrqty[i])
                    {
                        initialQty = arrqty[i];
                        highestIndex = i;
                    }
                }
                
                dataRes = arr[highestIndex];
                dataQuan = arrqty[highestIndex];

                return callback(dataRes, dataQuan);

            } 
            else {
                return callback("None", 0);
            }
        })
    }
}

exports.Order = Order