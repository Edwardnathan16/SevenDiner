// Imports
const express = require('express')
var router = express.Router();
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = 3000;
var path = require("path");

const cookieParser = require("cookie-parser");
const sessions = require('express-session');
var nodemailer = require('nodemailer');



const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.use(function(req, res, next) {

    res.locals.sessUserID = req.session.userid;
    res.locals.username = req.session.username;
    res.locals.name = req.session.name;
    res.locals.sessRole = req.session.userrole;
    next();
});

var bodyParser = require('body-parser');
var urlencodedParser = require('urlencoded-parser'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlencodedParser);

var flash = require('connect-flash');


app.use(express.static('boundary'))
app.use('/css', express.static(__dirname + 'boundary/css'))
app.use('/images', express.static(__dirname + 'boundary/images'))
app.use(flash());

var checkAuth = function (req, res, next) {
    sess=req.session;
    console.log(sess);
    if(sess.userid) {
       
        console.log('LOGGED')
        next();
    } else {
        res.redirect("/");
    }
    
  }



const {LoginPostUI} = require("./render/LoginUI.js");
const {LoginController} = require("./controller/LoginController.js");
const {LogoutController} = require("./controller/LogoutController.js");

const {UserAdminCreateAccountController} = require("./controller/UserAdmin/UserAdminCreateAccountController.js");
const {UserAdminSearchAccountController} = require("./controller/UserAdmin/UserAdminSearchAccountController.js");
const {UserAdminUpdateAccountController} = require("./controller/UserAdmin/UserAdminUpdateAccountController.js");
const {UserAdminDeleteAccountController} = require("./controller/UserAdmin/UserAdminDeleteAccountController.js");
const {UserAdminCreateProfileController} = require("./controller/UserAdmin/UserAdminCreateProfileController.js");
const {UserAdminSearchProfileController} = require("./controller/UserAdmin/UserAdminSearchProfileController.js");
const {UserAdminUpdateProfileController} = require("./controller/UserAdmin/UserAdminUpdateProfileController.js");
const {UserAdminDeleteProfileController} = require("./controller/UserAdmin/UserAdminDeleteProfileController.js");

const {ManagerCreateMenuItemController} = require("./controller/Manager/ManagerCreateMenuItemController.js");
const {ManagerSearchMenuItemController} = require("./controller/Manager/ManagerSearchMenuItemController.js");
const {ManagerUpdateMenuItemController} = require("./controller/Manager/ManagerUpdateMenuItemController.js");
const {ManagerDeleteMenuItemController} = require("./controller/Manager/ManagerDeleteMenuItemController.js");

const {StaffCreateOrderController} = require("./controller/Staff/StaffCreateOrderController.js");
const {StaffSearchOrderController} = require("./controller/Staff/StaffSearchOrderController.js");
const {StaffUpdateOrderController} = require("./controller/Staff/StaffUpdateOrderController.js");
const {StaffDeleteOrderController} = require("./controller/Staff/StaffDeleteOrderController.js");

const {CustomerViewMenuController} = require("./controller/Customer/CustomerViewMenuController.js");
const {CustomerPlaceOrderController} = require("./controller/Customer/CustomerPlaceOrderController.js");
const {CustomerSearchMenuItemController} = require("./controller/Customer/CustomerSearchMenuItemController.js");
const {CustomerDeleteMenuItemController} = require("./controller/Customer/CustomerDeleteMenuItemController.js");
const {CustomerMakePaymentController} = require("./controller/Customer/CustomerMakePaymentController.js");


const {OwnerGetAverageSpendPerDayController} = require("./controller/Owner/OwnerGetAverageSpendPerDayController.js");
const {OwnerGetAverageSpendPerWeekController} = require("./controller/Owner/OwnerGetAverageSpendPerWeekController.js");
const {OwnerGetAverageSpendPerMonthController} = require("./controller/Owner/OwnerGetAverageSpendPerMonthController.js");
const {OwnerGetFrequencyOfVisitPerDayController} = require("./controller/Owner/OwnerGetFrequencyOfVisitPerDayController.js");
const {OwnerGetFrequencyOfVisitPerWeekController} = require("./controller/Owner/OwnerGetFrequencyOfVisitPerWeekController.js");
const {OwnerGetFrequencyOfVisitPerMonthController} = require("./controller/Owner/OwnerGetFrequencyOfVisitPerMonthController.js");
const {OwnerGetPreferredDishesPerDayController} = require("./controller/Owner/OwnerGetPreferredDishesPerDayController.js");
const {OwnerGetPreferredDishesPerWeekController} = require("./controller/Owner/OwnerGetPreferredDishesPerWeekController.js");
const {OwnerGetPreferredDishesPerMonthController} = require("./controller/Owner/OwnerGetPreferredDishesPerMonthController.js");




let loginUIBoundary = new LoginPostUI();
let loginUIController = new LoginController();
let logoutUIController = new LogoutController();

let userAdminCreateAccountController = new UserAdminCreateAccountController();
let userAdminSearchAccountController = new UserAdminSearchAccountController();
let userAdminUpdateAccountController = new UserAdminUpdateAccountController();
let userAdminDeleteAccountController = new UserAdminDeleteAccountController();
let userAdminCreateProfileController = new UserAdminCreateProfileController();
let userAdminSearchProfileController = new UserAdminSearchProfileController();
let userAdminUpdateProfileController = new UserAdminUpdateProfileController();
let userAdminDeleteProfileController = new UserAdminDeleteProfileController();

let managerCreateMenuItemController = new ManagerCreateMenuItemController();
let managerSearchMenuItemController = new ManagerSearchMenuItemController();
let managerUpdateMenuItemController = new ManagerUpdateMenuItemController();
let managerDeleteMenuItemController = new ManagerDeleteMenuItemController();

let staffCreateOrderController = new StaffCreateOrderController();
let staffSearchOrderController = new StaffSearchOrderController();
let staffUpdateOrderController = new StaffUpdateOrderController();
let staffDeleteOrderController = new StaffDeleteOrderController();

let customerViewMenuController = new CustomerViewMenuController();
let customerPlaceOrderController = new CustomerPlaceOrderController();
let customerSearchMenuItemController = new CustomerSearchMenuItemController();
let customerDeleteMenuItemController = new CustomerDeleteMenuItemController();
let customerMakePaymentController = new CustomerMakePaymentController();

let ownerGetAverageSpendPerDayController = new OwnerGetAverageSpendPerDayController();
let ownerGetAverageSpendPerWeekController = new OwnerGetAverageSpendPerWeekController();
let ownerGetAverageSpendPerMonthController = new OwnerGetAverageSpendPerMonthController();
let ownerGetFrequencyOfVisitPerDayController = new OwnerGetFrequencyOfVisitPerDayController();
let ownerGetFrequencyOfVisitPerWeekController = new OwnerGetFrequencyOfVisitPerWeekController();
let ownerGetFrequencyOfVisitPerMonthController = new OwnerGetFrequencyOfVisitPerMonthController();
let ownerGetPreferredDishesPerDayController = new OwnerGetPreferredDishesPerDayController();
let ownerGetPreferredDishesPerWeekController = new OwnerGetPreferredDishesPerWeekController();
let ownerGetPreferredDishesPerMonthController = new OwnerGetPreferredDishesPerMonthController();





app.get('/', loginUIBoundary.DisplayLogin);
app.post('/LoginController', loginUIController.ValidateLogin);
app.get('/LogoutController', logoutUIController.ValidateLogout);
app.get('/UserAdmin', loginUIBoundary.DisplayAdmin);
app.get('/UserAdmin/UserAdminCreateAccount', loginUIBoundary.DisplayAdminCreateAccount);
app.post('/UserAdminCreateAccountController', userAdminCreateAccountController.CreateUserAccount);
app.get('/UserAdmin/UserAdminSearchAccount', loginUIBoundary.DisplayAdminSearchViewAccount);
app.post('/UserAdminSearchAccountController', userAdminSearchAccountController.SearchUserAccount);
app.get('/UserAdmin/UserAdminUpdateAccount', loginUIBoundary.DisplayAdminUpdateDeleteAccount);
app.post('/UserAdminSearchUpdateAccount', userAdminUpdateAccountController.SearchUpdateUserAccount);
app.post('/UserAdminUpdateAccountController', userAdminUpdateAccountController.UpdateUserAccount);
app.post('/UserAdminDeleteAccountController', userAdminDeleteAccountController.DeleteUserAccount);


app.get('/UserAdmin/UserAdminCreateProfile', loginUIBoundary.DisplayAdminCreateProfile);
app.post('/UserAdminCreateProfileController', userAdminCreateProfileController.CreateUserProfile);

app.get('/UserAdmin/UserAdminSearchProfile', loginUIBoundary.DisplayAdminSearchViewProfile);
app.post('/UserAdminSearchProfileController', userAdminSearchProfileController.SearchUserProfile);

app.get('/UserAdmin/UserAdminUpdateProfile', loginUIBoundary.DisplayAdminUpdateDeleteProfile);
app.post('/UserAdminUpdateProfileController', userAdminUpdateProfileController.UpdateUserProfile);
app.post('/UserAdminDeleteProfileController', userAdminDeleteProfileController.DeleteUserProfile);

app.get('/Manager', loginUIBoundary.DisplayManager);
app.get('/Manager/ManagerCreateMenuItem', loginUIBoundary.DisplayManagerCreateMenuItem);
app.post('/ManagerCreateMenuItemController', managerCreateMenuItemController.CreateMenuItem);

app.get('/Manager/ManagerSearchMenuItem', loginUIBoundary.DisplayManagerSearchViewMenuItem);
app.post('/ManagerSearchMenuItemController', managerSearchMenuItemController.SearchMenuItem);

app.get('/Manager/ManagerUpdateMenuItem', loginUIBoundary.DisplayManagerUpdateDeleteMenuItem);
app.post('/ManagerSearchUpdateMenuItem', managerUpdateMenuItemController.SearchUpdateMenuItem);

app.post('/ManagerUpdateMenuItemController', managerUpdateMenuItemController.UpdateMenuItem);
app.post('/ManagerDeleteMenuItemController', managerDeleteMenuItemController.DeleteMenuItem);

app.get('/Staff', loginUIBoundary.DisplayStaff);
app.get('/Staff/StaffCreateOrder', loginUIBoundary.DisplayStaffCreateOrder);
app.post('/AddToCart', staffCreateOrderController.AddMenuItem);
app.post('/StaffDeleteMenuItemController', staffCreateOrderController.DeleteMenuItem);
app.post('/StaffCreateOrderController', staffCreateOrderController.CreateOrder);

app.get('/Staff/StaffSearchOrder', loginUIBoundary.DisplayStaffSearchViewOrder);
app.post('/StaffSearchOrderController', staffSearchOrderController.SearchOrder);

app.get('/Staff/StaffUpdateOrder', loginUIBoundary.DisplayStaffUpdateDeleteOrder);
app.post('/StaffSearchUpdateOrder', staffUpdateOrderController.SearchUpdateOrder);
app.post('/StaffUpdateOrderController', staffUpdateOrderController.UpdateOrder);
app.post('/StaffDeleteOrderController', staffDeleteOrderController.DeleteOrder);

app.get('/Customer', loginUIBoundary.DisplayCustomer);
app.get('/Customer/CustomerViewMenu', loginUIBoundary.DisplayCustomerViewMenu);
app.post('/AddToCartCustomer', customerPlaceOrderController.AddMenuItem);

app.post('/CustomerSearchMenuItemController', customerSearchMenuItemController.SearchMenuItem);
app.post('/CustomerDeleteMenuItemController', customerDeleteMenuItemController.DeleteMenuItem);
app.post('/CustomerPlaceOrderController', customerPlaceOrderController.CreateOrder);

app.get('/Customer/CustomerMakePayment', loginUIBoundary.DisplayCustomerMakePayment);
app.post('/CustomerMakePaymentController', customerMakePaymentController.MakePayment);

app.get('/Owner', loginUIBoundary.DisplayOwner);
app.get('/Owner/AverageSpend', loginUIBoundary.DisplayOwnerGetAverageSpend);
app.post('/OwnerGetAverageSpendPerDayController', ownerGetAverageSpendPerDayController.GetAverageSpendPerDay);
app.post('/OwnerGetAverageSpendPerWeekController', ownerGetAverageSpendPerWeekController.GetAverageSpendPerWeek);
app.post('/OwnerGetAverageSpendPerMonthController', ownerGetAverageSpendPerMonthController.GetAverageSpendPerMonth);

app.get('/Owner/FrequencyOfVisit', loginUIBoundary.DisplayOwnerGetFrequencyOfVisit);
app.post('/OwnerGetFrequencyOfVisitPerDayController', ownerGetFrequencyOfVisitPerDayController.GetFrequencyOfVisitPerDay);
app.post('/OwnerGetFrequencyOfVisitPerWeekController', ownerGetFrequencyOfVisitPerWeekController.GetFrequencyOfVisitPerWeek);
app.post('/OwnerGetFrequencyOfVisitPerMonthController', ownerGetFrequencyOfVisitPerMonthController.GetFrequencyOfVisitPerMonth);


app.get('/Owner/PreferredDishes', loginUIBoundary.DisplayOwnerGetPreferredDishes);
app.post('/OwnerGetPreferredDishesPerDayController', ownerGetPreferredDishesPerDayController.GetPreferredDishesPerDay);
app.post('/OwnerGetPreferredDishesPerWeekController', ownerGetPreferredDishesPerWeekController.GetPreferredDishesPerWeek);
app.post('/OwnerGetPreferredDishesPerMonthController', ownerGetPreferredDishesPerMonthController.GetPreferredDishesPerMonth);

app.listen(port);