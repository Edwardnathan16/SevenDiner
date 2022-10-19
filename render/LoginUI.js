const {LoginController} = require("../controller/LoginController.js");
const {UserAdminSearchAccountController} = require("../controller/UserAdmin/UserAdminSearchAccountController.js");
const {UserAdminViewAccountController} = require("../controller/UserAdmin/UserAdminViewAccountController.js");
const {UserAdminUpdateAccountController} = require("../controller/UserAdmin/UserAdminUpdateAccountController.js");
const {UserAdminSearchProfileController} = require("../controller/UserAdmin/UserAdminSearchProfileController.js");
const {UserAdminViewProfileController} = require("../controller/UserAdmin/UserAdminViewProfileController.js");
const {UserAdminUpdateProfileController} = require("../controller/UserAdmin/UserAdminUpdateProfileController.js");

const {ManagerSearchMenuItemController} = require("../controller/Manager/ManagerSearchMenuItemController.js");
const {ManagerViewMenuItemController} = require("../controller/Manager/ManagerViewMenuItemController.js");
const {ManagerUpdateMenuItemController} = require("../controller/Manager/ManagerUpdateMenuItemController.js");

const {StaffCreateOrderController} = require("../controller/Staff/StaffCreateOrderController.js");
const {StaffSearchOrderController} = require("../controller/Staff/StaffSearchOrderController.js");
const {StaffViewOrderController} = require("../controller/Staff/StaffViewOrderController.js");
const {StaffUpdateOrderController} = require("../controller/Staff/StaffUpdateOrderController.js");

const {CustomerViewMenuController} = require("../controller/Customer/CustomerViewMenuController.js");
const {CustomerPlaceOrderController} = require("../controller/Customer/CustomerPlaceOrderController.js");


const express = require('express');
var router = express.Router();
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = 3000;
var path = require("path");

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'boundary/css'))
app.use('/images', express.static(__dirname + 'boundary/images'))

var bodyParser = require('body-parser');
var urlencodedParser = require('urlencoded-parser'); // ES5
const { ManagerCreateMenuItemController } = require("../controller/Manager/ManagerCreateMenuItemController.js");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlencodedParser);


class LoginPostUI  {

    DisplayLogin(req, res) {
        var path = require('path');
        var filePath = "./boundary/LoginUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);
        res.render(resolvedPath, {expressError: req.flash('message')});
    } 

    

    DisplayAdmin(req, res) {
        var path = require('path');
        var filePath = "./boundary/UserAdmin/UserAdminDashboardUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);
        res.render(resolvedPath);
    } 

    DisplayAdminCreateAccount(req, res) {
        var path = require('path');
        var filePath = "./boundary/UserAdmin/UserAdminCreateAccountUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);

        let adminController = new UserAdminUpdateAccountController();

        adminController.FetchRole(function(result12) {
            res.render(resolvedPath, {data : result12, expressError: req.flash('messageerror')});
        });
    } 
    
    DisplayAdminSearchViewAccount(req, res) {
        var path = require('path');
        var filePath = "./boundary/UserAdmin/UserAdminSearchViewAccountUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);

        let adminController = new UserAdminViewAccountController();
    
        adminController.ShowUserAccount(function(result) {
                
            res.render(resolvedPath, {data : result});
        });
    } 

    DisplayAdminUpdateDeleteAccount(req, res) {
        var path = require('path');
        var filePath = "./boundary/UserAdmin/UserAdminUpdateDeleteAccountUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);

        let adminController = new UserAdminUpdateAccountController();

        adminController.FetchRole(function(result12) {
            res.locals.roleData = result12;
            adminController.ShowUpdateUserAccount(function(result) {
                res.locals.data = result;
                res.render(resolvedPath, {expressSuccess : req.flash('message')});
            });
        });
    }

    DisplayAdminCreateProfile(req, res) {
        var path = require('path');
        var filePath = "./boundary/UserAdmin/UserAdminCreateProfileUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);
        res.render(resolvedPath, {expressError : req.flash('message')});
    } 

    DisplayAdminSearchViewProfile(req, res) {
        var path = require('path');
        var filePath = "./boundary/UserAdmin/UserAdminSearchViewProfileUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);

        let adminController = new UserAdminViewProfileController();
    
        adminController.ShowUserProfile(function(result) {
                
            res.render(resolvedPath, {data : result});
        });
    } 

    DisplayAdminUpdateDeleteProfile(req, res) {
        var path = require('path');
        var filePath = "./boundary/UserAdmin/UserAdminUpdateDeleteProfileUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);

        let adminController = new UserAdminUpdateProfileController();

        adminController.ShowUpdateUserProfile(function(result) {
            res.render(resolvedPath, {data : result, expressSuccess : req.flash('message')});
        });
    }

    DisplayManager(req, res) {
        var path = require('path');
        var filePath = "./boundary/Manager/ManagerDashboardUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);
        res.render(resolvedPath);
    }

    DisplayManagerCreateMenuItem(req, res) {
        var path = require('path');
        var filePath = "./boundary/Manager/ManagerCreateMenuItemUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);
        res.render(resolvedPath, {expressError : req.flash('message')});
    }

    DisplayManagerSearchViewMenuItem(req, res) {
        var path = require('path');
        var filePath = "./boundary/Manager/ManagerSearchViewMenuItemUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);

        let managerController = new ManagerViewMenuItemController();
    
        managerController.ShowMenuItem(function(result) {
                
            res.render(resolvedPath, {data : result});
        });
    } 

    DisplayManagerUpdateDeleteMenuItem(req, res) {
        var path = require('path');
        var filePath = "./boundary/Manager/ManagerUpdateDeleteMenuItemUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);

        let managerController = new ManagerUpdateMenuItemController();
    
        managerController.ShowUpdateMenuItem(function(result) {
                
            res.render(resolvedPath, {data : result, expressSuccess : req.flash('message')});
        });
    } 

    DisplayStaff(req, res) {
        var path = require('path');
        var filePath = "./boundary/Staff/StaffDashboardUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);
        res.render(resolvedPath);
    }  

    DisplayStaffCreateOrder(req, res) {
        
        var path = require('path');
        var filePath = "./boundary/Staff/StaffCreateOrderUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);

        let staffController = new StaffCreateOrderController();
        
        staffController.FetchCurrentOrder(function(result1) {
            res.locals.cData = result1;

            staffController.ShowMenu(function(result) {
                res.locals.data = result;
                res.render(resolvedPath);
                
            });
            
        });
    }

    DisplayStaffSearchViewOrder(req, res) {
        var path = require('path');
        var filePath = "./boundary/Staff/StaffSearchViewOrderUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);

        let staffController = new StaffViewOrderController();
    
        staffController.ShowOrder(function(result) {
                
            res.render(resolvedPath, {data : result});
        });
    }

    DisplayStaffUpdateDeleteOrder(req, res) {
        var path = require('path');
        var filePath = "./boundary/Staff/StaffUpdateDeleteOrderUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);

        let staffController = new StaffUpdateOrderController();
    
        staffController.ShowUpdateOrder(function(result) {
                
            res.render(resolvedPath, {data : result, expressSuccess : req.flash('message')});
        });
    }

    DisplayCustomer(req, res) {
        var path = require('path');
        var filePath = "./boundary/Customer/CustomerDashboardUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);
        res.render(resolvedPath);
    }

    DisplayCustomerViewMenu(req, res) {
        
        var path = require('path');
        var filePath = "./boundary/Customer/CustomerViewMenuUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);

        let customerController = new CustomerViewMenuController();
        let customerController2 = new CustomerPlaceOrderController();
        
        customerController2.FetchCurrentOrder(function(result1) {
            res.locals.cData = result1;

            customerController.ShowMenu(function(result) {
                res.locals.data = result;
                res.render(resolvedPath);
                
            });
            
        });
        
    }

    DisplayCustomerMakePayment(req, res){
        var path = require('path');
            var filePath = "./boundary/Customer/CustomerMakePaymentUI.ejs"
            var resolvedPath = path.resolve(filePath);
            console.log("resolvedPath: " + resolvedPath);
            res.render(resolvedPath, {expressError: req.flash('message')});
    }

    
    DisplayOwner(req, res) {
        var path = require('path');
        var filePath = "./boundary/Owner/OwnerDashboardUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);
        res.render(resolvedPath);
    }

    DisplayOwnerGetAverageSpend(req, res) {
        var path = require('path');
        var filePath = "./boundary/Owner/OwnerGetAverageSpendUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);
        res.render(resolvedPath, {data : "0", cData : ""});

        
    }

    DisplayOwnerGetFrequencyOfVisit(req, res) {
        var path = require('path');
        var filePath = "./boundary/Owner/OwnerGetFrequencyOfVisitUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);
        res.render(resolvedPath, {data : "0", cData : ""});

        
    }

    DisplayOwnerGetPreferredDishes(req, res) {
        var path = require('path');
        var filePath = "./boundary/Owner/OwnerGetPreferredDishesUI.ejs"
        var resolvedPath = path.resolve(filePath);
        console.log("resolvedPath: " + resolvedPath);
        res.render(resolvedPath, {data : "", cData : ""});
    }
}

exports.LoginPostUI = LoginPostUI;
