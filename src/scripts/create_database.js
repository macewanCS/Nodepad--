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
	`TempTime` int NULL, \
	`TempDate` date NULL \
	)');

var date = new Date();
var stringDateTest = getDateString(date);
date1 = new Date("2016/01/10");
var stringDateTest2 = date1.getFullYear() + "/" + (parseInt(date1.getMonth()) + 1) + "/" + date1.getDate();
console.log(stringDateTest);
console.log(date1.getDate());
console.log(stringDateTest2);

function getDateString(obj){
	var string;
	var monthInt;
	monthInt = parseInt(obj.getMonth());
	monthInt += 1;
	return string = obj.getFullYear() + "/" + monthInt + "/" + date.getDate();
}
connection.query('\
    INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`,`TempDate`) VALUES ("100048", "1", "Employee", "Renewal line not responding", "System Service", "Open", "1/3/2016", "' + stringDateTest +'");\
    ');

connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, `TempDate`) VALUES ("100048", "1", "Employee", "Renewal line not responding", "System Service", "Open", "1/3/2016", "' + stringDateTest2 +'");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, `TempDate`) VALUES ("100049", "1", "Employee", "Computer broken in half", "Hardware", "Open", "1/4/2016", "2016/01/16");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100050", "1", "Employee", "I forgot my password", "Password Request", "Closed", "2/22/2016", "2016/2/22");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100051", "1", "Employee", "I forgot my password again", "Password Request", "Closed", "2/15/2016", "2016/2/15");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100052", "1", "Employee", "I forgot my password a third time", "Password Request", "Open", "3/27/2016", "2016/3/27");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100053", "1", "Employee", "Laptop exploded, send help", "Hardware", "Open", "3/1/2016", "2016/3/1");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100054", "1", "Employee", "Router got coffee spilled on it", "Hardware", "Open", "3/2/2016", "2016/3/2");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100055", "1", "Employee", "Inovah is down", "Software", "Closed", "4/1/2016", "2016/4/1");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100056", "1", "Employee", "All projecters need to be moved", "Service", "Closed", "4/2/2016", "2016/4/2");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100057", "1", "Employee", "Laptop screen is flickering everytime i launch word", "Hardware", "Closed", "4/3/2016","2016/4/3");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100058", "1", "Employee", "New screen we ordered had dead pixels", "Hardware", "Open", "4/4/2016", "2016/4/4");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100059", "1", "Employee", "I dont know how to connect to the wifi", "General", "Closed", "4/5/2016", "2016/4/5");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100060", "1", "Employee", "I need help in making the printer work", "General", "Closed", "4/6/2016", "2016/4/6");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100061", "1", "Employee", "Wires frayed under margerets desk again, we think its on purpose", "Service", "Open", "4/6/2016", "2016/4/6");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100062", "1", "Employee", "Weird circle on one monitor, screen flickers", "Hardware", "Open","4/7/2016", "2016/4/7");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100063", "1", "Employee", "Circle getting bigger, seems spooky", "Hardware", "Open","5/7/2016", "2016/5/7");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100064", "1", "Employee", "ALL IS GOOD", "Hardware", "Closed", "5/8/2016", "2016/5/8");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100065", "1", "Employee", "Wires frayed under margerets desk", "Hardware", "Closed","5/9/2016", "2016/5/9");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100066", "2", "Employee", "I never got a password for inovah, where can i get that?", "Service", "Closed", "5/10/2016", "2016/5/10");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`) VALUES ("100067", "2", "Employee", "I forgot my inovah password", "Service", "Open", "5/11/2016", "2016/5/11");\
	');

console.log('Success: Database Created!')

connection.end();