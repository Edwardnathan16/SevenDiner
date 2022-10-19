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

class User{
    username;
    password;
    email;
    firstName;
    lastName;
    roleName;

    constructor(username,password,email,firstName, lastName, roleName){
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleName = roleName;

    }

    getUsername()
    {
        return this.username;
    }

    setUsername(username)
    {
        this.username = username;
    }

    getPassword()
    {
        return this.password;
    }

    setPassword(password)
    {
        this.password = password;
    }

    getEmail()
    {
        return this.email;
    }

    setEmail(email)
    {
        this.email = email;
    }

    getFirstName()
    {
        return this.firstName;
    }

    setFirstName(firstName)
    {
        this.firstName = firstName;
    }

    getLastName()
    {
        return this.lastName;
    }

    setLastName(lastName)
    {
        this.lastName = lastName;
    }

    getRoleName()
    {
        return this.roleName;
    }

    setRoleName(roleName)
    {
        this.roleName = roleName;
    }

    

    getlogininfo(username, password, callback) {
        
        var sql = "SELECT * FROM User Where username = '" + username + 
            "' AND password = '" + password + "'";
        var Username;
        var dataRes;

        con.query(sql, function(err, results){
            if (err){ 
            throw err;
            
            }

            if(results.length>0) { //result is not empty

                Username = results[0].username;  // Scope is larger than function
                dataRes = {
                    username: results[0].username,
                    firstName: results[0].firstName,
                    lastName: results[0].lastName,
                    roleName: results[0].roleName
                }

                return callback(dataRes);
            } else {

                return callback(false);
            }
        })

    }

    boollogout() {

        this.Username = "";
        this.password = "";
        this.fname = "";
        this.lname = "";
        this.Email = "";
        this.roleName = "";

        return true;
    }

    CheckUsername(username, callback) {

        var sql = "SELECT * FROM USER WHERE username = '" + username + "'";

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

    CreateUserAccount(username, password, email, firstName, lastName, roleName, callback) {


        var sql = "INSERT INTO User (username, password, email, firstName, lastName, roleName) VALUES ('" + username + "', '"
         + password + "', '" + email + "', '" + firstName + "', '" + lastName + "', '" + roleName + "')";

        con.query(sql, function(err, results){
            if (err){ 
            throw err;
            
            }       
            var dataRes = results;

            return callback(dataRes);
        })

    }

    ShowUserAccount (callback) {

        let sql = "SELECT * FROM USER;";

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

    SearchUserAccount (userType, attributeType, searchData, callback) {

        let sql = "SELECT * FROM USER WHERE " + attributeType + " = '" + searchData + "' AND roleName = '" + userType + "'";
      

        con.query(sql, function (err, results){
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

    UpdateUserAccount (username, password, email, firstName, lastName, roleName, callback){
        let sql = "UPDATE USER SET password = '" + password + "', email = '" + email + "', firstName = '" + firstName + "', lastName = '" + lastName + "', roleName = '" + roleName + "' WHERE username = '" + username + "';";


        con.query(sql, function(err, results){
            if (err){ 
                throw err;
            } 
            
            return callback(true);
        });
    }

    DeleteUserAccount(username, callback){
        let sql = "DELETE FROM USER WHERE username = '" + username + "';";

        con.query(sql, function(err, results){
            if (err){ 
                throw err;
            } 
            
            return callback(true);
        });
    }
}



exports.User = User