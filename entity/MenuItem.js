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

class MenuItem {

    menuID;
    menuName;
    price;
    description;
    type;

    constructor(menuID, menuName, price, description, type) {
        this.menuID = menuID;
        this.menuName = menuName;
        this.price = price;
        this.description = description;
        this.type = type;
    }

    getMenuID()
    {
        return this.menuID;
    }

    setMenuID(menuID)
    {
        this.menuID = menuID;
    }

    getMenuName()
    {
        return this.menuName;
    }

    setMenuName(menuName)
    {
        this.menuName = menuName;
    }

    getPrice()
    {
        return this.price;
    }

    setPrice(price)
    {
        this.price = price;
    }

    getDescription()
    {
        return this.description;
    }

    setDescription(description)
    {
        this.description = description;
    }

    getType()
    {
        return this.type;
    }

    setType(type)
    {
        this.type = type;
    }

    CheckMenuName(menuName, callback) {

        var sql = "SELECT * FROM menuitem WHERE menuName = '" + menuName + "'";

        con.query(sql, function(err, results){
            if (err){ 
            throw err;
            
            }       
            
            if(results.length>0) {
                return callback(false);
            } 
            else {
                return callback(true);
            }
        })
    }

    CreateMenuItem(menuName, price, description, type, callback) {
        var sql = "INSERT INTO menuitem (menuName, price, description, type) VALUES ('" + menuName + "', '"
         + price + "', '" + description + "', '" + type + "')";

        con.query(sql, function(err, results){
            if (err){ 
            throw err;
            
            }       
            var dataRes = results;

            return callback(dataRes);
        })
    }

    ShowMenuItem(callback){
        let sql = "SELECT * FROM menuitem;";

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

    SearchMenuItem(attributeType, searchData, callback) {
        let sql = "SELECT * FROM menuitem WHERE " + attributeType + " = '" + searchData + "'";


        con.query(sql, function(err, results){
            if (err){
                throw err;
            }

            var dataRes;

            if(results.length>0) { //result is not empty
                dataRes = results;

                return callback(dataRes);

            }
            else {
                return callback(false);
            }
        })
    }

    UpdateMenuItem(menuID, menuName, price, description, type, callback) {
        let sql = "UPDATE menuitem SET menuName = '" + menuName + "', price = '" 
        + price + "', description = '" + description + "', type = '" + type + "' WHERE menuID = '" + menuID + "';";

        con.query(sql, function(err, results){
            if (err){ 
                throw err;
            } 
            
            return callback(true);
        });
    }

    DeleteMenuItem(menuID, callback) {
        let sql = "DELETE FROM menuitem WHERE menuID = '" + menuID + "';";

        con.query(sql, function(err, results){
            if (err){ 
                throw err;
            } 
            
            return callback(true);
        });
    }
}

exports.MenuItem = MenuItem