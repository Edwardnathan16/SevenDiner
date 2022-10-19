=============
Requirements:
=============
- You need to have node.js installed in your system
- You need to have XAMPP installed in your system


=======
To Run:
=======
- Open XAMPP Control Panel

In the XAMPP Control Panel, you need to:
  - Press Start button for Apache and MySQL Module
  - Press Admin button for MySQL or go to "http://localhost/phpmyadmin/"
  - Create a new database called "restaurantapp"
  - Import the restaurantapp.sql file to the database under database folder(Seven Diner/database/restaurantapp.sql)

- Download the Seven Diner folder and unzip it
- Open Terminal

In the Terminal, you need to:
  - Navigate to Seven Diner folder
    For Example: >cd Downloads/Seven Diner
  - Type: >node index.js
  - Open your browser and go to "http://localhost:3000/"
  - The login page will be shown


==============
Login Details:
==============

User Admin
username: useradmin1
password: useradmin123

Manager
username: manager1
password: manager123

Staff
username: staff1
password: staff123

Customer
username: customer1
password: customer123

Restaurant Owner
username: owner1
password: owner123


=====
Note:
=====
- The test script for TDD is under test_scripts folder (Seven Diner/test_scripts/)
- The script file for 100 records is under Seven Diner folder (Seven Diner/user100.js)

