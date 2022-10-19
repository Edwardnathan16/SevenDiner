-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2022 at 02:24 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurantapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `currentorder`
--

CREATE TABLE `currentorder` (
  `placeholderID` int(10) NOT NULL,
  `menuName` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `quantity` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `menuitem`
--

CREATE TABLE `menuitem` (
  `menuID` int(10) NOT NULL,
  `menuName` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `description` varchar(100) NOT NULL,
  `type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menuitem`
--

INSERT INTO `menuitem` (`menuID`, `menuName`, `price`, `description`, `type`) VALUES
(1, 'Delicious Fish', 20.99, 'Delicious fish grilled on a pan', 'meat'),
(2, 'Delicious Steak', 25.99, 'Delicious steak grilled on a pan', 'meat'),
(4, 'Delicious Burger', 25.99, 'Delicious burger grilled on a pan', 'meat'),
(5, 'Delicious Bayam', 25.99, 'Delicious bayam grilled on a pan', 'vegetables'),
(6, 'Delicious Fried Rice', 10.99, 'Delicious fried rice grilled on a pan', 'misc'),
(7, 'Delicious Chicken', 37.99, 'Delicious chicken fried on a pan', 'meat'),
(8, 'Delicious Potato', 6.98, 'Delicious potato fried on a pan', 'misc'),
(14, 'Delicious Something 0', 20.99, 'Delicious something 0 served raw', 'misc'),
(15, 'Delicious Something 1', 20.99, 'Delicious something 1 served raw', 'misc'),
(16, 'Delicious Something 2', 20.99, 'Delicious something 2 served raw', 'misc'),
(17, 'Delicious Something 3', 20.99, 'Delicious something 3 served raw', 'misc'),
(18, 'Delicious Something 4', 20.99, 'Delicious something 4 served raw', 'misc'),
(19, 'Delicious Something 5', 20.99, 'Delicious something 5 served raw', 'misc'),
(20, 'Delicious Something 6', 20.99, 'Delicious something 6 served raw', 'misc'),
(21, 'Delicious Something 7', 20.99, 'Delicious something 7 served raw', 'misc'),
(22, 'Delicious Something 8', 20.99, 'Delicious something 8 served raw', 'misc'),
(23, 'Delicious Something 9', 20.99, 'Delicious something 9 served raw', 'misc'),
(24, 'Delicious Something 10', 20.99, 'Delicious something 10 served raw', 'misc'),
(25, 'Delicious Something 11', 20.99, 'Delicious something 11 served raw', 'misc'),
(26, 'Delicious Something 12', 20.99, 'Delicious something 12 served raw', 'misc'),
(27, 'Delicious Something 13', 20.99, 'Delicious something 13 served raw', 'misc'),
(28, 'Delicious Something 14', 20.99, 'Delicious something 14 served raw', 'misc'),
(29, 'Delicious Something 15', 20.99, 'Delicious something 15 served raw', 'misc'),
(30, 'Delicious Something 16', 20.99, 'Delicious something 16 served raw', 'misc'),
(31, 'Delicious Something 17', 20.99, 'Delicious something 17 served raw', 'misc'),
(32, 'Delicious Something 18', 20.99, 'Delicious something 18 served raw', 'misc'),
(33, 'Delicious Something 19', 20.99, 'Delicious something 19 served raw', 'misc'),
(34, 'Delicious Something 20', 20.99, 'Delicious something 20 served raw', 'misc'),
(35, 'Delicious Something 21', 20.99, 'Delicious something 21 served raw', 'misc'),
(36, 'Delicious Something 22', 20.99, 'Delicious something 22 served raw', 'misc'),
(37, 'Delicious Something 23', 20.99, 'Delicious something 23 served raw', 'misc'),
(38, 'Delicious Something 24', 20.99, 'Delicious something 24 served raw', 'misc'),
(39, 'Delicious Something 25', 20.99, 'Delicious something 25 served raw', 'misc'),
(40, 'Delicious Something 26', 20.99, 'Delicious something 26 served raw', 'misc'),
(41, 'Delicious Something 27', 20.99, 'Delicious something 27 served raw', 'misc'),
(42, 'Delicious Something 28', 20.99, 'Delicious something 28 served raw', 'misc'),
(43, 'Delicious Something 29', 20.99, 'Delicious something 29 served raw', 'misc'),
(44, 'Delicious Something 30', 20.99, 'Delicious something 30 served raw', 'misc'),
(45, 'Delicious Something 31', 20.99, 'Delicious something 31 served raw', 'misc'),
(46, 'Delicious Something 32', 20.99, 'Delicious something 32 served raw', 'misc'),
(47, 'Delicious Something 33', 20.99, 'Delicious something 33 served raw', 'misc'),
(48, 'Delicious Something 34', 20.99, 'Delicious something 34 served raw', 'misc'),
(49, 'Delicious Something 35', 20.99, 'Delicious something 35 served raw', 'misc'),
(50, 'Delicious Something 36', 20.99, 'Delicious something 36 served raw', 'misc'),
(51, 'Delicious Something 37', 20.99, 'Delicious something 37 served raw', 'misc'),
(52, 'Delicious Something 38', 20.99, 'Delicious something 38 served raw', 'misc'),
(53, 'Delicious Something 39', 20.99, 'Delicious something 39 served raw', 'misc'),
(54, 'Delicious Something 40', 20.99, 'Delicious something 40 served raw', 'misc'),
(55, 'Delicious Something 41', 20.99, 'Delicious something 41 served raw', 'misc'),
(56, 'Delicious Something 42', 20.99, 'Delicious something 42 served raw', 'misc'),
(57, 'Delicious Something 43', 20.99, 'Delicious something 43 served raw', 'misc'),
(58, 'Delicious Something 44', 20.99, 'Delicious something 44 served raw', 'misc'),
(59, 'Delicious Something 45', 20.99, 'Delicious something 45 served raw', 'misc'),
(60, 'Delicious Something 46', 20.99, 'Delicious something 46 served raw', 'misc'),
(61, 'Delicious Something 47', 20.99, 'Delicious something 47 served raw', 'misc'),
(62, 'Delicious Something 48', 20.99, 'Delicious something 48 served raw', 'misc'),
(63, 'Delicious Something 49', 20.99, 'Delicious something 49 served raw', 'misc'),
(64, 'Delicious Something 50', 20.99, 'Delicious something 50 served raw', 'misc'),
(65, 'Delicious Something 51', 20.99, 'Delicious something 51 served raw', 'misc'),
(66, 'Delicious Something 52', 20.99, 'Delicious something 52 served raw', 'misc'),
(67, 'Delicious Something 53', 20.99, 'Delicious something 53 served raw', 'misc'),
(68, 'Delicious Something 54', 20.99, 'Delicious something 54 served raw', 'misc'),
(69, 'Delicious Something 55', 20.99, 'Delicious something 55 served raw', 'misc'),
(70, 'Delicious Something 56', 20.99, 'Delicious something 56 served raw', 'misc'),
(71, 'Delicious Something 57', 20.99, 'Delicious something 57 served raw', 'misc'),
(72, 'Delicious Something 58', 20.99, 'Delicious something 58 served raw', 'misc'),
(73, 'Delicious Something 59', 20.99, 'Delicious something 59 served raw', 'misc'),
(74, 'Delicious Something 60', 20.99, 'Delicious something 60 served raw', 'misc'),
(75, 'Delicious Something 61', 20.99, 'Delicious something 61 served raw', 'misc'),
(76, 'Delicious Something 62', 20.99, 'Delicious something 62 served raw', 'misc'),
(77, 'Delicious Something 63', 20.99, 'Delicious something 63 served raw', 'misc'),
(78, 'Delicious Something 64', 20.99, 'Delicious something 64 served raw', 'misc'),
(79, 'Delicious Something 65', 20.99, 'Delicious something 65 served raw', 'misc'),
(80, 'Delicious Something 66', 20.99, 'Delicious something 66 served raw', 'misc'),
(81, 'Delicious Something 67', 20.99, 'Delicious something 67 served raw', 'misc'),
(82, 'Delicious Something 68', 20.99, 'Delicious something 68 served raw', 'misc'),
(83, 'Delicious Something 69', 20.99, 'Delicious something 69 served raw', 'misc'),
(84, 'Delicious Something 70', 20.99, 'Delicious something 70 served raw', 'misc'),
(85, 'Delicious Something 71', 20.99, 'Delicious something 71 served raw', 'misc'),
(86, 'Delicious Something 72', 20.99, 'Delicious something 72 served raw', 'misc'),
(87, 'Delicious Something 73', 20.99, 'Delicious something 73 served raw', 'misc'),
(88, 'Delicious Something 74', 20.99, 'Delicious something 74 served raw', 'misc'),
(89, 'Delicious Something 75', 20.99, 'Delicious something 75 served raw', 'misc'),
(90, 'Delicious Something 76', 20.99, 'Delicious something 76 served raw', 'misc'),
(91, 'Delicious Something 77', 20.99, 'Delicious something 77 served raw', 'misc'),
(92, 'Delicious Something 78', 20.99, 'Delicious something 78 served raw', 'misc'),
(93, 'Delicious Something 79', 20.99, 'Delicious something 79 served raw', 'misc'),
(94, 'Delicious Something 80', 20.99, 'Delicious something 80 served raw', 'misc'),
(95, 'Delicious Something 81', 20.99, 'Delicious something 81 served raw', 'misc'),
(96, 'Delicious Something 82', 20.99, 'Delicious something 82 served raw', 'misc'),
(97, 'Delicious Something 83', 20.99, 'Delicious something 83 served raw', 'misc'),
(98, 'Delicious Something 84', 20.99, 'Delicious something 84 served raw', 'misc'),
(99, 'Delicious Something 85', 20.99, 'Delicious something 85 served raw', 'misc'),
(100, 'Delicious Something 86', 20.99, 'Delicious something 86 served raw', 'misc'),
(101, 'Delicious Something 87', 20.99, 'Delicious something 87 served raw', 'misc'),
(102, 'Delicious Something 88', 20.99, 'Delicious something 88 served raw', 'misc'),
(103, 'Delicious Something 89', 20.99, 'Delicious something 89 served raw', 'misc'),
(104, 'Delicious Something 90', 20.99, 'Delicious something 90 served raw', 'misc'),
(105, 'Delicious Something 91', 20.99, 'Delicious something 91 served raw', 'misc'),
(106, 'Delicious Something 92', 20.99, 'Delicious something 92 served raw', 'misc');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderID` int(10) NOT NULL,
  `menuList` varchar(100) NOT NULL,
  `totalPrice` double NOT NULL,
  `paymentMethod` varchar(100) NOT NULL,
  `couponCode` varchar(10) DEFAULT NULL,
  `customerUsername` varchar(100) NOT NULL,
  `orderDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderID`, `menuList`, `totalPrice`, `paymentMethod`, `couponCode`, `customerUsername`, `orderDate`) VALUES
(29, '3_Delicious Fish, 3_Delicious Fish, 3_Delicious Fish, ', 188.91, 'visa', '', 'customer1', '2022-05-11'),
(30, '3_Delicious Bayam, 1_Delicious Fried Rice, 3_Delicious Chicken, ', 202.93, 'mastercard', '', 'customer1', '2022-05-17'),
(31, '3_Delicious Chicken, 3_Delicious Fish, 4_Delicious Steak, ', 280.9, 'visa', '', 'customer2', '2022-04-13'),
(32, '3_Delicious Fish, 3_Delicious Fish, 3_Delicious Fish, ', 188.91, 'mastercard', '', 'customer3', '2022-05-01'),
(35, '3_Delicious Fish, 3_Delicious Fish, 3_Delicious Fish, ', 151.13, 'visa', 'DISCOUNT20', 'customer10', '2022-05-13'),
(40, '3_Delicious Steak, ', 77.97, 'mastercard', 'DISCOUNT20', 'customer11', '2022-05-25'),
(41, '1_Delicious Steak, ', 25.99, 'mastercard', '', 'customer3', '2022-04-21'),
(42, '1_Delicious Steak, ', 25.99, 'mastercard', '', 'customer13', '2022-05-17'),
(45, '3_Delicious Fish, 2_Delicious Steak, ', 80.47, 'visa', 'DISCOUNT30', 'customer1', '2022-05-25'),
(46, '3_Delicious Fish, ', 44.08, 'visa', 'DISCOUNT30', 'customer7', '2022-04-22'),
(47, '3_Delicious Fish, ', 62.97, 'mastercard', '', 'customer13', '2022-05-25'),
(51, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'mastercard', 'DISCOUNT20', 'customer4', '2022-05-25'),
(52, '1_Delicious Chicken, ', 37.99, 'mastercard', '', 'customer10', '2022-05-26'),
(53, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer0', '2022-05-26'),
(55, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer2', '2022-05-24'),
(58, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer5', '2022-05-21'),
(59, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer6', '2022-05-20'),
(60, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer7', '2022-05-19'),
(61, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer8', '2022-05-18'),
(62, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer9', '2022-05-17'),
(63, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer10', '2022-05-16'),
(64, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer11', '2022-05-15'),
(65, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer12', '2022-05-14'),
(66, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer13', '2022-05-13'),
(67, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer14', '2022-05-12'),
(68, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer15', '2022-05-11'),
(69, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer16', '2022-05-10'),
(70, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer17', '2022-05-09'),
(71, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer18', '2022-05-08'),
(72, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer19', '2022-05-07'),
(73, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer0', '2022-05-06'),
(74, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer1', '2022-05-05'),
(75, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer2', '2022-05-04'),
(76, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer3', '2022-05-03'),
(77, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer4', '2022-05-02'),
(78, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer5', '2022-05-01'),
(79, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer6', '2022-04-30'),
(80, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer7', '2022-04-29'),
(81, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer8', '2022-04-28'),
(82, '1_Delicious Fish, 2_Delicious Steak, ', 58.38, 'visa', 'DISCOUNT20', 'customer9', '2022-04-27'),
(83, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer0', '2022-05-26'),
(84, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer1', '2022-05-25'),
(85, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer2', '2022-05-24'),
(86, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer3', '2022-05-23'),
(87, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer4', '2022-05-22'),
(88, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer5', '2022-05-21'),
(89, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer6', '2022-05-20'),
(90, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer7', '2022-05-19'),
(91, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer8', '2022-05-18'),
(92, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer9', '2022-05-17'),
(93, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer10', '2022-05-16'),
(94, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer11', '2022-05-15'),
(95, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer12', '2022-05-14'),
(96, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer13', '2022-05-13'),
(97, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer14', '2022-05-12'),
(98, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer15', '2022-05-11'),
(99, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer16', '2022-05-10'),
(100, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer17', '2022-05-09'),
(101, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer18', '2022-05-08'),
(102, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer19', '2022-05-07'),
(103, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer0', '2022-05-06'),
(104, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer1', '2022-05-05'),
(105, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer2', '2022-05-04'),
(106, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer3', '2022-05-03'),
(107, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer4', '2022-05-02'),
(108, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer5', '2022-05-01'),
(109, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer6', '2022-04-30'),
(110, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer7', '2022-04-29'),
(111, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer8', '2022-04-28'),
(112, '2_Delicious Burger, 3_Delicious Bayam, ', 90.97, 'mastercard', 'DISCOUNT30', 'customer9', '2022-04-27'),
(113, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer0', '2022-05-26'),
(114, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer1', '2022-05-25'),
(115, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer2', '2022-05-24'),
(116, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer3', '2022-05-23'),
(117, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer4', '2022-05-22'),
(118, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer5', '2022-05-21'),
(119, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer6', '2022-05-20'),
(120, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer7', '2022-05-19'),
(121, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer8', '2022-05-18'),
(122, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer9', '2022-05-17'),
(123, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer10', '2022-05-16'),
(124, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer11', '2022-05-15'),
(125, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer12', '2022-05-14'),
(126, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer13', '2022-05-13'),
(127, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer14', '2022-05-12'),
(128, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer15', '2022-05-11'),
(129, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer16', '2022-05-10'),
(130, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer17', '2022-05-09'),
(131, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer18', '2022-05-08'),
(132, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer19', '2022-05-07'),
(133, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer0', '2022-05-06'),
(134, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer1', '2022-05-05'),
(135, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer2', '2022-05-04'),
(136, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer3', '2022-05-03'),
(137, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer4', '2022-05-02'),
(138, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer5', '2022-05-01'),
(139, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer6', '2022-04-30'),
(140, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer7', '2022-04-29'),
(141, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer8', '2022-04-28'),
(142, '2_Delicious Fried Rice, 2_Delicious Chicken, ', 68.57, 'visa', 'DISCOUNT30', 'customer9', '2022-04-27');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `roleID` int(11) NOT NULL,
  `roleName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`roleID`, `roleName`) VALUES
(10, 'customer'),
(2, 'manager'),
(11, 'owner'),
(7, 'staff'),
(1, 'useradmin');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `roleName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `password`, `email`, `firstName`, `lastName`, `roleName`) VALUES
('customer0', 'customer123', 'customer0@a.com', 'Customer0', 'Customer0', 'customer'),
('customer1', 'customer123', 'customer1@a.com', 'Customer1', 'Customer1', 'customer'),
('customer10', 'customer123', 'customer10@a.com', 'Customer10', 'Customer10', 'customer'),
('customer11', 'customer123', 'customer11@a.com', 'Customer11', 'Customer11', 'customer'),
('customer12', 'customer123', 'customer12@a.com', 'Customer12', 'Customer12', 'customer'),
('customer13', 'customer123', 'customer13@a.com', 'Customer13', 'Customer13', 'customer'),
('customer14', 'customer123', 'customer14@a.com', 'Customer14', 'Customer14', 'customer'),
('customer15', 'customer123', 'customer15@a.com', 'Customer15', 'Customer15', 'customer'),
('customer16', 'customer123', 'customer16@a.com', 'Customer16', 'Customer16', 'customer'),
('customer17', 'customer123', 'customer17@a.com', 'Customer17', 'Customer17', 'customer'),
('customer18', 'customer123', 'customer18@a.com', 'Customer18', 'Customer18', 'customer'),
('customer19', 'customer123', 'customer19@a.com', 'Customer19', 'Customer19', 'customer'),
('customer2', 'customer123', 'customer2@a.com', 'Customer2', 'Customer2', 'customer'),
('customer3', 'customer123', 'customer3@a.com', 'Customer3', 'Customer3', 'customer'),
('customer4', 'customer123', 'customer4@a.com', 'Customer4', 'Customer4', 'customer'),
('customer5', 'customer123', 'customer5@a.com', 'Customer5', 'Customer5', 'customer'),
('customer6', 'customer123', 'customer6@a.com', 'Customer6', 'Customer6', 'customer'),
('customer7', 'customer123', 'customer7@a.com', 'Customer7', 'Customer7', 'customer'),
('customer8', 'customer123', 'customer8@a.com', 'Customer8', 'Customer8', 'customer'),
('customer9', 'customer123', 'customer9@a.com', 'Customer9', 'Customer9', 'customer'),
('manager0', 'manager123', 'manager0@a.com', 'Manager0', 'Manager0', 'manager'),
('manager1', 'manager123', 'manager1@a.com', 'Manager1', 'Manager1', 'manager'),
('manager10', 'manager123', 'manager10@a.com', 'Manager10', 'Manager10', 'manager'),
('manager11', 'manager123', 'manager11@a.com', 'Manager11', 'Manager11', 'manager'),
('manager12', 'manager123', 'manager12@a.com', 'Manager12', 'Manager12', 'manager'),
('manager13', 'manager123', 'manager13@a.com', 'Manager13', 'Manager13', 'manager'),
('manager14', 'manager123', 'manager14@a.com', 'Manager14', 'Manager14', 'manager'),
('manager15', 'manager123', 'manager15@a.com', 'Manager15', 'Manager15', 'manager'),
('manager16', 'manager123', 'manager16@a.com', 'Manager16', 'Manager16', 'manager'),
('manager17', 'manager123', 'manager17@a.com', 'Manager17', 'Manager17', 'manager'),
('manager18', 'manager123', 'manager18@a.com', 'Manager18', 'Manager18', 'manager'),
('manager19', 'manager123', 'manager19@a.com', 'Manager19', 'Manager19', 'manager'),
('manager2', 'manager123', 'manager2@a.com', 'Manager2', 'Manager2', 'manager'),
('manager3', 'manager123', 'manager3@a.com', 'Manager3', 'Manager3', 'manager'),
('manager4', 'manager123', 'manager4@a.com', 'Manager4', 'Manager4', 'manager'),
('manager5', 'manager123', 'manager5@a.com', 'Manager5', 'Manager5', 'manager'),
('manager6', 'manager123', 'manager6@a.com', 'Manager6', 'Manager6', 'manager'),
('manager7', 'manager123', 'manager7@a.com', 'Manager7', 'Manager7', 'manager'),
('manager8', 'manager123', 'manager8@a.com', 'Manager8', 'Manager8', 'manager'),
('manager9', 'manager123', 'manager9@a.com', 'Manager9', 'Manager9', 'manager'),
('owner0', 'owner123', 'owner0@a.com', 'owner0', 'owner0', 'owner'),
('owner1', 'owner123', 'owner1@a.com', 'owner1', 'owner1', 'owner'),
('owner10', 'owner123', 'owner10@a.com', 'owner10', 'owner10', 'owner'),
('owner11', 'owner123', 'owner11@a.com', 'owner11', 'owner11', 'owner'),
('owner12', 'owner123', 'owner12@a.com', 'owner12', 'owner12', 'owner'),
('owner13', 'owner123', 'owner13@a.com', 'owner13', 'owner13', 'owner'),
('owner14', 'owner123', 'owner14@a.com', 'owner14', 'owner14', 'owner'),
('owner15', 'owner123', 'owner15@a.com', 'owner15', 'owner15', 'owner'),
('owner16', 'owner123', 'owner16@a.com', 'owner16', 'owner16', 'owner'),
('owner17', 'owner123', 'owner17@a.com', 'owner17', 'owner17', 'owner'),
('owner18', 'owner123', 'owner18@a.com', 'owner18', 'owner18', 'owner'),
('owner19', 'owner123', 'owner19@a.com', 'owner19', 'owner19', 'owner'),
('owner2', 'owner123', 'owner2@a.com', 'owner2', 'owner2', 'owner'),
('owner3', 'owner123', 'owner3@a.com', 'owner3', 'owner3', 'owner'),
('owner4', 'owner123', 'owner4@a.com', 'owner4', 'owner4', 'owner'),
('owner5', 'owner123', 'owner5@a.com', 'owner5', 'owner5', 'owner'),
('owner6', 'owner123', 'owner6@a.com', 'owner6', 'owner6', 'owner'),
('owner7', 'owner123', 'owner7@a.com', 'owner7', 'owner7', 'owner'),
('owner8', 'owner123', 'owner8@a.com', 'owner8', 'owner8', 'owner'),
('owner9', 'owner123', 'owner9@a.com', 'owner9', 'owner9', 'owner'),
('staff0', 'staff123', 'staff0@a.com', 'Staff0', 'Staff0', 'staff'),
('staff1', 'staff123', 'staff1@a.com', 'Staff1', 'Staff1', 'staff'),
('staff10', 'staff123', 'staff10@a.com', 'Staff10', 'Staff10', 'staff'),
('staff11', 'staff123', 'staff11@a.com', 'Staff11', 'Staff11', 'staff'),
('staff12', 'staff123', 'staff12@a.com', 'Staff12', 'Staff12', 'staff'),
('staff13', 'staff123', 'staff13@a.com', 'Staff13', 'Staff13', 'staff'),
('staff14', 'staff123', 'staff14@a.com', 'Staff14', 'Staff14', 'staff'),
('staff15', 'staff123', 'staff15@a.com', 'Staff15', 'Staff15', 'staff'),
('staff16', 'staff123', 'staff16@a.com', 'Staff16', 'Staff16', 'staff'),
('staff17', 'staff123', 'staff17@a.com', 'Staff17', 'Staff17', 'staff'),
('staff18', 'staff123', 'staff18@a.com', 'Staff18', 'Staff18', 'staff'),
('staff19', 'staff123', 'staff19@a.com', 'Staff19', 'Staff19', 'staff'),
('staff2', 'staff123', 'staff2@a.com', 'Staff2', 'Staff2', 'staff'),
('staff3', 'staff123', 'staff3@a.com', 'Staff3', 'Staff3', 'staff'),
('staff4', 'staff123', 'staff4@a.com', 'Staff4', 'Staff4', 'staff'),
('staff5', 'staff123', 'staff5@a.com', 'Staff5', 'Staff5', 'staff'),
('staff6', 'staff123', 'staff6@a.com', 'Staff6', 'Staff6', 'staff'),
('staff7', 'staff123', 'staff7@a.com', 'Staff7', 'Staff7', 'staff'),
('staff8', 'staff123', 'staff8@a.com', 'Staff8', 'Staff8', 'staff'),
('staff9', 'staff123', 'staff9@a.com', 'Staff9', 'Staff9', 'staff'),
('useradmin0', 'useradmin123', 'useradmin0@a.com', 'Admin0', 'Admin0', 'useradmin'),
('useradmin1', 'useradmin123', 'useradmin1@a.com', 'Admin1', 'Admin1', 'useradmin'),
('useradmin10', 'useradmin123', 'useradmin10@a.com', 'Admin10', 'Admin10', 'useradmin'),
('useradmin11', 'useradmin123', 'useradmin11@a.com', 'Admin11', 'Admin11', 'useradmin'),
('useradmin12', 'useradmin123', 'useradmin12@a.com', 'Admin12', 'Admin12', 'useradmin'),
('useradmin13', 'useradmin123', 'useradmin13@a.com', 'Admin13', 'Admin13', 'useradmin'),
('useradmin14', 'useradmin123', 'useradmin14@a.com', 'Admin14', 'Admin14', 'useradmin'),
('useradmin15', 'useradmin123', 'useradmin15@a.com', 'Admin15', 'Admin15', 'useradmin'),
('useradmin16', 'useradmin123', 'useradmin16@a.com', 'Admin16', 'Admin16', 'useradmin'),
('useradmin17', 'useradmin123', 'useradmin17@a.com', 'Admin17', 'Admin17', 'useradmin'),
('useradmin18', 'useradmin123', 'useradmin18@a.com', 'Admin18', 'Admin18', 'useradmin'),
('useradmin19', 'useradmin123', 'useradmin19@a.com', 'Admin19', 'Admin19', 'useradmin'),
('useradmin2', 'useradmin123', 'useradmin2@a.com', 'Admin2', 'Admin2', 'useradmin'),
('useradmin3', 'useradmin123', 'useradmin3@a.com', 'Admin3', 'Admin3', 'useradmin'),
('useradmin4', 'useradmin123', 'useradmin4@a.com', 'Admin4', 'Admin4', 'useradmin'),
('useradmin5', 'useradmin123', 'useradmin5@a.com', 'Admin5', 'Admin5', 'useradmin'),
('useradmin6', 'useradmin123', 'useradmin6@a.com', 'Admin6', 'Admin6', 'useradmin'),
('useradmin7', 'useradmin123', 'useradmin7@a.com', 'Admin7', 'Admin7', 'useradmin'),
('useradmin8', 'useradmin123', 'useradmin8@a.com', 'Admin8', 'Admin8', 'useradmin'),
('useradmin9', 'useradmin123', 'useradmin9@a.com', 'Admin9', 'Admin9', 'useradmin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `currentorder`
--
ALTER TABLE `currentorder`
  ADD PRIMARY KEY (`placeholderID`);

--
-- Indexes for table `menuitem`
--
ALTER TABLE `menuitem`
  ADD PRIMARY KEY (`menuID`),
  ADD UNIQUE KEY `menuName` (`menuName`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`roleID`),
  ADD UNIQUE KEY `roleName` (`roleName`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `UNIQUE_1` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `currentorder`
--
ALTER TABLE `currentorder`
  MODIFY `placeholderID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `menuitem`
--
ALTER TABLE `menuitem`
  MODIFY `menuID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `roleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
