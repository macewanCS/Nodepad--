/**
 * Created by barrett on 8/28/14.
 */

var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);
connection.query('DROP DATABASE ' + dbconfig.database);
connection.query('CREATE DATABASE ' + dbconfig.database);

connection.query(' \
	CREATE TABLE `395project`.`users` ( \
	`username` varchar(20) NULL,\
	`id` INT NOT NULL, \
	`password` varchar(20) NULL, \
	PRIMARY KEY (`id`)\
	)');

connection.query('\
	INSERT INTO `395project`.`users`(`username`,`id`,`password`) VALUES ("brett", 1, "1234")\
	');
connection.query('\
	INSERT INTO `395project`.`users`(`username`,`id`,`password`) VALUES ("jack", 2, "1234")\
	');

connection.query('\
 CREATE TABLE `395project`.`profile` ( \
 `CustID` INT  NOT NULL, \
	`CustType` varchar(50) NULL, \
	`FirstName` varchar(20) NULL, \
	`LastName` varchar(30) NULL, \
	`Phone` varchar(25) NULL, \
	`Site` varchar(3) NULL, \
	`EMailID` varchar(50) NULL, \
	`Notes` text NULL, \
	`ModBy` varchar(96) NULL, \
	`ModDate` varchar(10) NULL, \
	`ModTime` varchar(8) NULL, \
	`FormerName` varchar(25) NULL, \
	`DTLastMod` int NULL, \
	`RecvdDate` varchar(10) NULL, \
	`RecvdTime` varchar(8) NULL, \
	`Title` varchar(25) NULL, \
	PRIMARY KEY(`CustID`) \
)');

connection.query('\
	INSERT INTO `395project`.`profile` (`CustID`, `CustType`, `FirstName`, `LastName`, `Phone`, `Site`) VALUES ("1", "1", "Brett", "Anderson", "780-905-7400", "EPL"); \
');
connection.query('\
	INSERT INTO `395project`.`profile` (`CustID`, `CustType`, `FirstName`, `LastName`, `Phone`, `Site`) VALUES ("2", "2", "Jack", "Staples", "780-905-7410", "EFL"); \
	')
connection.query('\
	CREATE TABLE `395project`.`asgnmnt`(\
	`AssignedBy` varchar(96) NULL, \
	`DateAssign` varchar(10) NULL, \
	`TimeAssign` varchar(8) NULL, \
	`Assignee` varchar(96) NULL, \
	`Description` text NULL, \
	`DateAcknow` varchar(10) NULL, \
	`TimeAcknow` varchar(8) NULL, \
	`DateResolv` varchar(10) NULL, \
	`TimeResolv` varchar(8) NULL, \
	`Resolution` text NULL, \
	`CallID` varchar(8) NULL, \
	`HEATSeq` int NULL, \
	`EMail` varchar(100) NULL, \
	`DTLastMod` int NULL, \
	`WhoAcknow` varchar(96) NULL, \
	`WhoResolv` varchar(96) NULL, \
	`TargetTime` varchar(8) NULL, \
	`TargetDate` varchar(10) NULL, \
	`SLAResTime` decimal(9, 2) NULL, \
	`TotalAsgnmntTime` int NULL, \
	`CallType` varchar(100) NULL, \
	`ResolveOrder` int NULL, \
	`Status` varchar(25) NULL, \
	`ModBy` varchar(50) NULL, \
	`ModDate` varchar(10) NULL, \
	`ModTime` varchar(8) NULL, \
	`TimeUpdate` int NULL, \
	`TeamName` varchar(30) NULL, \
	`TempNotes` text NULL, \
	`TempTime` int NULL \
	)');

connection.query('\
	INSERT INTO `395project`.`asgnmnt`(`AssignedBy`,`Assignee`,`Description`,`HEATSeq`) VALUES ("ja", "ja", "the public doc", 1);\
	');
connection.query('\
	INSERT INTO `395project`.`asgnmnt`(`AssignedBy`,`Assignee`,`Description`,`HEATSeq`) VALUES ("kh", "ch", "there is no ga", 2);\
	');

connection.query('\
	CREATE TABLE `395project`.`calllog`( \
	`CallID` varchar(8) NULL, \
	`CustID` varchar(50) NULL, \
	`CustType` varchar(50) NULL, \
	`CallType` varchar(100) NULL, \
	`Tracker` varchar(96) NULL, \
	`CallStatus` varchar(50) NULL,\
	`Severity` int NULL,\
	`CDuration` decimal(9, 4) NULL,\
	`CallCount` decimal(5, 2) NULL,\
	`StopWatch` decimal(9, 6) NULL,\
	`ClosedBy` varchar(96) NULL,\
	`ClosedDate` varchar(10) NULL,\
	`ClosedTime` varchar(8) NULL,\
	`Symptoms` text NULL,\
	`CallResolution` text NULL,\
	`RecvdBy` varchar(96) NULL,\
	`RecvdDate` varchar(10) NULL,\
	`RecvdTime` varchar(8) NULL,\
	`ModBy` varchar(96) NULL,\
	`ModDate` varchar(10) NULL,\
	`ModTime` varchar(8) NULL,\
	`DTLastMod` int NULL,\
	`CallSource` varchar(15) NULL,\
	`Category` varchar(20) NULL,\
	`TotalAsgnmntTime` int NULL,\
	`CatHeading` varchar(25) NULL,\
	`TotalJournalTime` int NULL,\
	`TotalTime` int NULL, \
	`SL_Callback_Target` int NULL,\
	`SL_Callback_Date` varchar(10) NULL,\
	`SL_Callback_Time` varchar(8) NULL,\
	`SL_Resolution_Target` int NULL,\
	`SL_Resolution_Date` varchar(10) NULL,\
	`SL_Resolution_Time` varchar(8) NULL,\
	`SL_Clock_Status` varchar(20) NULL,\
	`SL_Button_Status` varchar(20) NULL,\
	`FirstResolution` varchar(3) NULL,\
	`SL_Complete_Status` varchar(25) NULL,\
	`ProblemDesc` text NULL,\
	`ProbType` varchar(50) NULL,\
	`SevChanged` varchar(2) NULL,\
	`Hostname` varchar(20) NULL,\
	`Yes_No` varchar(1) NULL,\
	`TimeSpent` int NULL,\
	`Priority` varchar(2) NULL,\
	`Dueby` varchar(10) NULL,\
	`PastDue` varchar(10) NULL,\
	`SaveFlag` varchar(5) NULL,\
	`TempTime` int NULL \
	)');

connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100048", "1", "Employee", "Renewal line not responding", "System Service", "Open");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100049", "1", "Employee", "Computer broken in half", "Hardware", "Open");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100050", "1", "Employee", "I forgot my password", "Password Request", "Closed");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100051", "1", "Employee", "I forgot my password again", "Password Request", "Closed");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100052", "1", "Employee", "I forgot my password a third time", "Password Request", "Open");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100053", "1", "Employee", "Laptop exploded, send help", "Hardware", "Open");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100054", "1", "Employee", "Router got coffee spilled on it", "Hardware", "Open");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100055", "1", "Employee", "Inovah is down", "Software", "Closed");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100056", "1", "Employee", "All projecters need to be moved", "Service", "Closed");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100057", "1", "Employee", "Laptop screen is flickering everytime i launch word", "Hardware", "Closed");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100058", "1", "Employee", "New screen we ordered had dead pixels", "Hardware", "Open");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100059", "1", "Employee", "I dont know how to connect to the wifi", "General", "Closed");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100060", "1", "Employee", "I need help in making the printer work", "General", "Closed");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100061", "1", "Employee", "Wires frayed under margerets desk again, we think its on purpose", "Service", "Open");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100062", "1", "Employee", "Weird circle on one monitor, screen flickers", "Hardware", "Open");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100063", "1", "Employee", "Circle getting bigger, seems spooky", "Hardware", "Open");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100064", "1", "Employee", "ALL IS GOOD", "Hardware", "Closed");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`) VALUES ("100065", "1", "Employee", "Wires frayed under margerets desk", "Hardware", "Closed");\
	');

console.log('Success: Database Created!')

connection.end();