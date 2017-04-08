/**
 * Created by barrett on 8/28/14.
 */

var mysql = require('mysql');
var dbconfig = require('../config/database');
var bcrypt = require('bcrypt-nodejs')
var connection = mysql.createConnection(dbconfig.connection);
//connection.query('DROP DATABASE ' + dbconfig.database);
connection.query('CREATE DATABASE ' + dbconfig.database);

connection.query(' \
	CREATE TABLE `395project`.`users` ( \
	`username` varchar(20) NULL,\
	`id` INT NOT NULL, \
	`password` varchar(100) NULL, \
	`Site` varchar(4) NULL, \
	PRIMARY KEY (`id`)\
	)');
var hash = bcrypt.hashSync("1234");
var maxHash = bcrypt.hashSync("package");
connection.query('\
	INSERT INTO `395project`.`users`(`username`,`id`,`password`, `Site`) VALUES ("brett", 1, "' + hash + '", "MLW")\
	');
connection.query('\
	INSERT INTO `395project`.`users`(`username`,`id`,`password`, `Site`) VALUES ("jack", 2, "' + hash + '", "MLW")\
	');
connection.query('\
	INSERT INTO `395project`.`users`(`username`,`id`,`password`, `Site`) VALUES ("jordan", 3, "' + hash + '", "CAL")\
	');
connection.query('\
	INSERT INTO `395project`.`users`(`username`,`id`,`password`, `Site`) VALUES ("sunny", 4, "' + hash + '", "GMLM")\
	');
connection.query('\
	INSERT INTO `395project`.`users`(`username`,`id`,`password`, `Site`) VALUES ("cam", 5, "' + hash + '", "IT")\
	');
connection.query('\
	INSERT INTO `395project`.`users`(`username`,`id`,`password`, `Site`) VALUES ("max", 6, "' + maxHash + '", "HRS")\
	');


connection.query('\
	CREATE TABLE `395project`.`branch` (\
	`FullName` varchar(60) NULL,\
	`Site` varchar(4) NOT NULL, \
	PRIMARY KEY(`Site`) \
	)');

connection.query('\
	CREATE TABLE `395project`.`edits` (\
	`EditID` INT NOT NULL AUTO_INCREMENT, \
	`CallID` varchar(8) NOT NULL,\
	`Edit` text NULL, \
	`EDate` date  NULL, \
	`CustID` int null, \
	PRIMARY KEY(`EditID`) \
	)');

connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("ABB","AbbotsField - Penny McKee");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("CAL","Calder");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("CPL","Capilano");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("CSD","Castle Downs");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("CPLM","Century Park LRT Lending Macine");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("CLV","Clareview");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("ESQ","Enterprise Square (Downtown)");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("HIG","Highlands");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("IDY","Idylwydlde (Bonnie Doon)");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("JPL","Jasper Place");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("LHL","Lois Hole (Callingwood)");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("GMLM","Macewan Lending Machine");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("MCN","McConachie");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("MEA","Meadows");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("MLW","MLWl Woods");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("RIV","Riverbend");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("SPW","Sprucewood");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("STR","Strathcona");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("WHP","West Henday Promenade (Lewis Estates)");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("WMC","Whitemud Crossing");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("WOO","Woodcroft");\
	');
connection.query('\
	INSERT INTO `395project`.`branch` (`Site`, `FullName`) VALUES ("HRS","Human Resources");\
	');



connection.query('\
	CREATE TABLE `395project`.`announcements` (\
	`AID` int NOT NULL AUTO_INCREMENT, \
	`Title` text NULL,\
	`Announcement` text Null,\
	`SubmittedDate` Date Null, \
	PRIMARY KEY(`AID`)\
	)');

//announcements query
connection.query('INSERT INTO `395project`.`announcements` (`Title`,`Announcement`,`SubmittedDate`) VALUES ("MILLWOODS OUTAGE", "There is an outage at the millwoods branch, this should be fixed within the next day or so","2017/3/25");');
connection.query('INSERT INTO `395project`.`announcements` (`Title`,`Announcement`,`SubmittedDate`) VALUES ("Maintenance", "There will be a schedules service from the 29th to the 30th of march, sorry for any inconvenience that calls","2017/3/27");');
connection.query('INSERT INTO `395project`.`announcements` (`Title`,`Announcement`,`SubmittedDate`) VALUES ("Maintenance", "Service is over","2017/3/30");');
connection.query('INSERT INTO `395project`.`announcements` (`Title`,`Announcement`,`SubmittedDate`) VALUES ("iNovah", "We are aware of problems with the inovah system and are working ona fix","2017/3/22");');
connection.query('INSERT INTO `395project`.`announcements` (`Title`,`Announcement`,`SubmittedDate`) VALUES ("Passwords", "Remember to not share your passwords, we have had multiple reports have passwords being stolen","2017/4/3");');


//other table for inserting in made tickets
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
//two premade asgnmnt tickets.
connection.query('\
	INSERT INTO `395project`.`asgnmnt`(`AssignedBy`,`Assignee`,`Description`,`HEATSeq`) VALUES ("ja", "ja", "the public doc", 1);\
	');
connection.query('\
	INSERT INTO `395project`.`asgnmnt`(`AssignedBy`,`Assignee`,`Description`,`HEATSeq`) VALUES ("kh", "ch", "there is no ga", 2);\
	');

//main ticket insertion table
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
	`TempDate` date NULL, \
	`Site` varchar(4) NULL, \
	`Resolve` int NULL \
	)');
//all branches and their abreviations
var abbreviations = ["ABB","CAL","CPL","CSD","CPLM","CLV","CMA","ESQ","GMLM","HIG","IDY","JPL","LHL","LON","MCN","MEA","MLW","RIV","SPW","STR","WHP","WMC","WOO","UAC"];
var fullnames = ["AbbotsField","Calder","Capilano","Castle Downs", "Century Park Lending Machine","Clareview","Collection Management","Enterprise Square","Grant Macewan Lending Machine","Highlands","Idylwydlde","Jasper Place", "Lois Hole", "Londonderry", "McConachie", "Meadows", "Mill Woods", "Riverbend", "Sprucewood","Strathcona", "West Henday", "Whitemud", "Woodcroft", "eplGO U of A"];

var date = new Date();
var stringDateTest = getDateString(date);
date1 = new Date("2016/01/10");
var stringDateTest2 = date1.getFullYear() + "/" + (parseInt(date1.getMonth()) + 1) + "/" + date1.getDate();


function getDateString(obj){
	var string;
	var monthInt;
	monthInt = parseInt(obj.getMonth());
	monthInt += 1;
	return string = obj.getFullYear() + "/" + monthInt + "/" + date.getDate();
}
//INSERTINg seeded TICKETS------------------------------------------------------
connection.query('\
    INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`,`TempDate`, `Site`) VALUES ("100048", "1", "Employee", "New Software | n/a | n/a | n/a | Microsoft word | Mine | n/a | n/a", "Service", "Open", "1/3/2016", "2016/2/23", "MLW");\
    ');
connection.query('\
    INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`,`TempDate`, `Site`) VALUES ("100089", "1", "Employee", "Sunny is being mean to me", "HRS", "Open", "1/3/2016", "2016/2/23", "HRS");\
    ');

connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, `TempDate`, `Site`) VALUES ("100048", "1", "Employee", "New Software | n/a | n/a | n/a | Microsoft word | Mine | n/a | n/a", "Service", "Open", "1/3/2016", "' + stringDateTest2 +'", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, `TempDate`, `Site`) VALUES ("100049", "1", "Employee", "| | |  Computer wont boot | ", "Hardware", "Open", "1/4/2016", "2016/01/16", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100050", "1", "Employee", "Inovah | Brett", "Password", "Closed", "2/22/2016", "2016/2/22", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100051", "1", "Employee", "other | I forgot my password again for user input", "Password", "Closed", "2/15/2016", "2016/2/15", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100052", "1", "Employee", "Inovah | Brett", "Password", "Open", "3/27/2016", "2016/3/27", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100053", "1", "Employee", "Barcode scanner | n/a | fdsa |  This is important, barcode scanner does not work| n/a", "Hardware", "Open", "3/1/2016", "2016/3/1", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100054", "1", "Employee", "Barcode scanner | n/a | fdsa |  This is important, barcode scanner does not work| n/a", "Hardware", "Open", "3/2/2016", "2016/3/2", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100055", "1", "Employee", "| | | Inovah is down", "Software", "Closed", "4/1/2016", "2016/4/1", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100056", "1", "Employee", "| | | All projecters need to be moved", "Service", "Closed", "4/2/2016", "2016/4/2", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100057", "1", "Employee", "Laptop| n/a | fdsa |  This is important, laptop does not work | n/a", "Hardware", "Closed", "4/3/2016","2016/4/3", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100058", "1", "Employee", "Monitor | n/a | fdsa |  New Screen we ordered had dead pixels | n/a", "Hardware", "Open", "4/4/2016", "2016/4/4", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100059", "1", "Employee", "I dont know how to connect to the wifi", "General", "Closed", "4/5/2016", "2016/4/5", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100060", "1", "Employee", "I need help in making the printer work", "General", "Closed", "4/6/2016", "2016/4/6", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100061", "1", "Employee", " Keyboard Wires | n/a | w1r3 |  Margeret keeps fraying her wires | n/a ", "Service", "Open", "4/6/2016", "2016/4/6", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100062", "1", "Employee", "Monitor/LCD | n/a | r1ng |  Weird black circle on monitor | n/a", "Hardware", "Open","4/7/2016", "2016/4/7", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100063", "1", "Employee", "Monitor/LCD | n/a | r1ng |  Circle getting bigger | n/a", "Hardware", "Open","5/7/2016", "2016/5/7", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100064", "1", "Employee", "Monitor/LCD | n/a | r1ng |  All is good | n/a", "Hardware", "Closed", "5/8/2016", "2016/5/8", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100065", "1", "Employee", "Wires | n/a | r1ng |  Margeret keeps fraying her keyboard wires and we need more | n/a", "Hardware", "Closed","5/9/2016", "2016/5/9", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100066", "2", "Employee", "inovah  | Jack", "Password", "Closed", "5/10/2016", "2016/5/10", "MLW");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100067", "2", "Employee", "inovah | Jack", "Password", "Open", "5/11/2016", "2016/5/11", "MLW");\
	');

connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100068", "3", "Employee", "| | | Wires frayed under margerets desk |", "Hardware", "Closed","5/9/2016", "2016/5/9", "CAL");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100069", "3", "Employee", "| | | Wires frayed under margerets desk |", "Hardware", "Closed","5/9/2016", "2016/5/9", "CAL");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100070", "3", "Employee", "| | | Wires frayed under margerets desk |", "Hardware", "Closed","5/9/2016", "2016/5/9", "CAL");\
	');
connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("100071", "1", "Employee", "Excel | No | Excel is super slow for me | n/a", "Software", "Closed", "5/11/2016", "2016/5/11", "MLW");\
	');
//End seeded tickets------------------------------------------------------------
var num = 100071;
//Branch seeding
for (var i = 0; i <fullnames.length;i++)
{
	num = num + 1
	for (var j=0; j<4;j++){

		num = num + 1;
	connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("' + num + '", "3", "Employee", "This is a ticket for ' + fullnames[i] + '", "General", "Closed","5/9/2016", "2016/5/9", "' + abbreviations[i] + '");\
	');
}
}
//HR seeding
for (var i = 0; i <4; i++)
{
	var hrNum = 100192;
	hrNum += i;
	connection.query('\
	INSERT INTO `395project`.`calllog` (`CallID`, `CustID`, `CustType`, `Symptoms`, `Category`, `CallStatus`, `RecvdDate`, 	`TempDate`, `Site`) VALUES ("' + hrNum + '", "3", "Employee", "This is a ticket for Human Resources", "HRS", "Closed","5/9/2016", "2016/5/9", "HRS");\
	');
}


//connection.query('\
	//UPDATE `395project`.`calllog` set symptoms = concat(symptoms, 123);\
	//');
console.log('Success: Database Created!')

connection.end();