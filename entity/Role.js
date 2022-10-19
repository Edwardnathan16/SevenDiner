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

class Role {

    roleID;
    roleName;

    constructor(roleID, roleName) {
        this.roleID = roleID;
        this.roleName = roleName;
    }

    getRoleID()
    {
        return this.roleID;
    }

    setRoleID(roleID)
    {
        this.roleID = roleID;
    }

    getRoleName()
    {
        return this.roleName;
    }

    setRoleName(roleName)
    {
        this.roleName = roleName;
    }

    

    ShowRoleList(callback) {

        let sql = "SELECT roleName FROM role;";

        con.query(sql, function(err, results){
            if (err){throw err;}

            var aRes;
            console.log(results);

            if(results.length>0) { //result is not empty

                aRes = results;
                
                return callback(aRes);

                } else {
                    return callback(false);
                }
        })
    }

    CheckRoleName(roleName, callback) {

        var sql = "SELECT * FROM ROLE WHERE roleName = '" + roleName + "'";

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

    CreateUserProfile(roleName, callback) {


        var sql = "INSERT INTO ROLE (roleName) VALUES ('" + roleName + "')";

        con.query(sql, function(err, results){
            if (err){ 
            throw err;
            
            }       
            var dataRes = results;

            return callback(dataRes);
        })

    }

    ShowUserProfile(callback){
        let sql = "SELECT * FROM role;";

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

    SearchUserProfile(roleName, callback) {
        let sql = "SELECT * FROM role WHERE roleName = '" + roleName + "'";

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

    UpdateUserProfile (roleID, roleName, callback) {
        let sql = "UPDATE ROLE SET roleName = '" + roleName + "' WHERE roleID = '" + roleID + "';";


        con.query(sql, function(err, results){
            if (err){ 
                throw err;
            } 
            
            return callback(true);
        });

    }

    DeleteUserProfile (roleID, callback) {
        let sql = "DELETE FROM role WHERE roleID = '" + roleID + "';";

        con.query(sql, function(err, results){
            if (err){ 
                throw err;
            } 
            
            return callback(true);
        });
    }

}

exports.Role = Role