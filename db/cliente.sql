-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 14, 2022 at 11:28 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pt2.1`
--

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `dni` varchar(9) NOT NULL,
  `name` varchar(50) NOT NULL,
  `account_type` varchar(150) NOT NULL,
  `amount` double NOT NULL,
  `client_type` varchar(150) NOT NULL,
  `entry_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`dni`, `name`, `account_type`, `amount`, `client_type`, `entry_date`) VALUES
('10000001S', 'Client 1', 'Fixed deposit account', 126207, 'Very rich client', '2018-03-15'),
('10000002Q', 'Client 2', 'Solidary account', 148293, 'Very rich client', '2018-09-24'),
('10000003V', 'Client 3', 'Personal account', 54167, 'Normal client', '2018-10-30'),
('10000004H', 'Client 4', 'Tax-Free Savings Account', 120652, 'Very rich client', '2018-08-24'),
('10000005L', 'Client 5', 'Savings account', 83238, 'Normal client', '2018-05-03'),
('10000006C', 'Client 6', 'Solidary Account', 100029, 'Very rich client', '2018-01-22'),
('10000007K', 'Client 7', 'Savings account', 23226, 'Normal client', '2018-10-05'),
('10000008E', 'Client 8', 'Tax-Free Savings Account', 14870, 'Normal client', '2018-09-02'),
('10000009T', 'Client 9', 'Personal account', 118301, 'Very rich client', '2018-04-21'),
('10000010R', 'Client 10', 'Tax-Free Savings Account', 47860, 'Normal client', '2017-11-24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`dni`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
