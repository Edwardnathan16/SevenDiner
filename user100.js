const { application } = require('express');
const util = require('util');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restaurantapp"
});

con.connect();


class user100{
    Create100User()
    {
        for (let i = 0 ; i < 20; i++)
        {
            var username = "customer" + i;
            var password = "customer123";
            var email = "customer" + i + "@a.com"
            var firstName = "Customer" + i;
            var lastName = "Customer" + i;
            var roleName = "customer"

            let sql = "INSERT INTO User (username, password, email, firstName, lastName, roleName) VALUES ('" + username + "', '"
            + password + "', '" + email + "', '" + firstName + "', '" + lastName + "', '" + roleName + "')"

            con.query(sql, function(err, results){
                if (err){ 
                throw err;
                
                }       
    
            })
        }

        for (let i = 0 ; i < 20; i++)
        {
            var username = "useradmin" + i;
            var password = "useradmin123";
            var email = "useradmin" + i + "@a.com"
            var firstName = "Admin" + i;
            var lastName = "Admin" + i;
            var roleName = "useradmin"

            let sql = "INSERT INTO User (username, password, email, firstName, lastName, roleName) VALUES ('" + username + "', '"
            + password + "', '" + email + "', '" + firstName + "', '" + lastName + "', '" + roleName + "')"

            con.query(sql, function(err, results){
                if (err){ 
                throw err;
                
                }       
    
            })
        }

        for (let i = 0 ; i < 20; i++)
        {
            var username = "staff" + i;
            var password = "staff123";
            var email = "staff" + i + "@a.com"
            var firstName = "Staff" + i;
            var lastName = "Staff" + i;
            var roleName = "staff"

            let sql = "INSERT INTO User (username, password, email, firstName, lastName, roleName) VALUES ('" + username + "', '"
            + password + "', '" + email + "', '" + firstName + "', '" + lastName + "', '" + roleName + "')"

            con.query(sql, function(err, results){
                if (err){ 
                throw err;
                
                }       
    
            })
        }

        for (let i = 0 ; i < 20; i++)
        {
            var username = "manager" + i;
            var password = "manager123";
            var email = "manager" + i + "@a.com"
            var firstName = "Manager" + i;
            var lastName = "Manager" + i;
            var roleName = "manager"

            let sql = "INSERT INTO User (username, password, email, firstName, lastName, roleName) VALUES ('" + username + "', '"
            + password + "', '" + email + "', '" + firstName + "', '" + lastName + "', '" + roleName + "')"

            con.query(sql, function(err, results){
                if (err){ 
                throw err;
                
                }       
    
            })
        }

        for (let i = 0 ; i < 20; i++)
        {
            var username = "owner" + i;
            var password = "owner123";
            var email = "owner" + i + "@a.com"
            var firstName = "owner" + i;
            var lastName = "owner" + i;
            var roleName = "owner"

            let sql = "INSERT INTO User (username, password, email, firstName, lastName, roleName) VALUES ('" + username + "', '"
            + password + "', '" + email + "', '" + firstName + "', '" + lastName + "', '" + roleName + "')"

            con.query(sql, function(err, results){
                if (err){ 
                throw err;
                
                }       
    
            })
        }

        for (let i = 0 ; i < 100; i++)
        {
            var menuName = "Delicious Something " + i;
            var price = 20.99;
            var description = "Delicious something " + i + " served raw"
            var type = "misc";

            var sql = "INSERT INTO menuitem (menuName, price, description, type) VALUES ('" + menuName + "', '"
            + price + "', '" + description + "', '" + type + "')";

            con.query(sql, function(err, results){
                if (err){ 
                throw err;
                
                }       
    
            })
        }

        for (let i = 0 ; i < 30; i++)
        {
            var menuList = "1_Delicious Fish, 2_Delicious Steak, ";
            var totalPrice = 58.38 ;
            var paymentMethod = "visa"
            var couponCode = "DISCOUNT20";

            if (i >= 20)
            {
                var customerUsername = "customer" + (i - 20);
            }
            else
            {
                var customerUsername = "customer" + i;
            }

            var orderDate = new Date();
            // var tomorrow = today.add(1).day();
            orderDate.setDate(orderDate.getDate() - i);
            var dd = String(orderDate.getDate()).padStart(2, '0');
            var mm = String(orderDate.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = orderDate.getFullYear();

            orderDate = yyyy + '-' + mm + '-' + dd;

            let sql = "INSERT INTO orders (menuList, totalPrice, paymentMethod, couponCode, customerUsername, orderDate) VALUES ('" + menuList + "', '"
            + totalPrice + "', '" + paymentMethod + "', '" + couponCode + "', '" + customerUsername + "', '" + orderDate + "')"

            con.query(sql, function(err, results){
                if (err){ 
                throw err;
                
                }       
    
            })
        }

        for (let i = 0 ; i < 30; i++)
        {
            var menuList = "2_Delicious Burger, 3_Delicious Bayam, ";
            var totalPrice = 90.97;
            var paymentMethod = "mastercard"
            var couponCode = "DISCOUNT30";

            if (i >= 20)
            {
                var customerUsername = "customer" + (i - 20);
            }
            else
            {
                var customerUsername = "customer" + i;
            }

            var orderDate = new Date();
            // var tomorrow = today.add(1).day();
            orderDate.setDate(orderDate.getDate() - i);
            console.log(orderDate.getDate())
            var dd = String(orderDate.getDate()).padStart(2, '0');
            var mm = String(orderDate.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = orderDate.getFullYear();

            orderDate = yyyy + '-' + mm + '-' + dd;

            let sql = "INSERT INTO orders (menuList, totalPrice, paymentMethod, couponCode, customerUsername, orderDate) VALUES ('" + menuList + "', '"
            + totalPrice + "', '" + paymentMethod + "', '" + couponCode + "', '" + customerUsername + "', '" + orderDate + "')"

            con.query(sql, function(err, results){
                if (err){ 
                throw err;
                
                }       
    
            })
        }

        for (let i = 0 ; i < 30; i++)
        {
            var menuList = "2_Delicious Fried Rice, 2_Delicious Chicken, ";
            var totalPrice = 68.57;
            var paymentMethod = "visa"
            var couponCode = "DISCOUNT30";

            if (i >= 20)
            {
                var customerUsername = "customer" + (i - 20);
            }
            else
            {
                var customerUsername = "customer" + i;
            }

            var orderDate = new Date();
            // var tomorrow = today.add(1).day();
            orderDate.setDate(orderDate.getDate() - i);
            console.log(orderDate.getDate())
            var dd = String(orderDate.getDate()).padStart(2, '0');
            var mm = String(orderDate.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = orderDate.getFullYear();

            orderDate = yyyy + '-' + mm + '-' + dd;

            let sql = "INSERT INTO orders (menuList, totalPrice, paymentMethod, couponCode, customerUsername, orderDate) VALUES ('" + menuList + "', '"
            + totalPrice + "', '" + paymentMethod + "', '" + couponCode + "', '" + customerUsername + "', '" + orderDate + "')"

            con.query(sql, function(err, results){
                if (err){ 
                throw err;
                
                }       
    
            })
        }

        for (let i = 0 ; i < 10; i++)
        {
            var menuList = "2_Delicious Fried Rice, 2_Delicious Chicken, ";
            var totalPrice = 68.57;
            var paymentMethod = "mastercard"
            var couponCode = "DISCOUNT30";

           
            var customerUsername = "customer" + i;
            

            var orderDate = new Date();
            orderDate.setDate(orderDate.getDate() - i);
            console.log(orderDate.getDate())
            var dd = String(orderDate.getDate()).padStart(2, '0');
            var mm = String(orderDate.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = orderDate.getFullYear();

            orderDate = yyyy + '-' + mm + '-' + dd;

            let sql = "INSERT INTO orders (menuList, totalPrice, paymentMethod, couponCode, customerUsername, orderDate) VALUES ('" + menuList + "', '"
            + totalPrice + "', '" + paymentMethod + "', '" + couponCode + "', '" + customerUsername + "', '" + orderDate + "')"

            con.query(sql, function(err, results){
                if (err){ 
                throw err;
                
                }       
    
            })
        }


    }
}

let user100script = new user100();
user100script.Create100User();