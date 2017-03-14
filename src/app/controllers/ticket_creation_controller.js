var mysql = require('mysql');

exports.categories = function(req, res){
  res.render((__dirname + './../../public/views/categories.ejs'), {username:req.user.username});
};
var category;

exports.forms = function(req, res){
  
  module.exports = req.params.form;
  
  console.log("started looking with " + req.params.form);
  if (req.params.form.match(/hardware/i)){
    console.log("Its a hardware ticket, eh");
    res.render((__dirname + '/../../public/views/hardware.ejs'), {username:req.user.username});
    category = "hardware";
  }
  else if (req.params.form.match(/software/i)){
    console.log("Its a software ticket, eh");
    res.render((__dirname + '/../../public/views/software.ejs'), {username:req.user.username});
    category = "software";
  }
  else if (req.params.form.match(/password/i)){
    console.log("Its a password ticket, eh");
    res.render((__dirname + '/../../public/views/password.ejs'), {username:req.user.username});
    category = "password";
  }
  else if (req.params.form.match(/service/i)){
    console.log("Its a service ticket, eh");
    res.render((__dirname + '/../../public/views/service.ejs'), {username:req.user.username});
    category = "service";
  }
  else if (req.params.form.match(/general/i)){
    console.log("Its a general ticket, eh");
    res.render((__dirname + '/../../public/views/general.ejs'), {username:req.user.username});
    category = "general";
  }
}
exports.service = function(req, res){
  console.log("create service is running");
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '395project'
  });
  
  console.log(req.body.EquipmentType);
  
  connection.connect(function(err) {
    
    console.log("Beginning insertion");
    var lastRec;
    var today = new Date();
    var stringDate = today.getFullYear() + "/" + (parseInt(today.getMonth()) + 1) + "/" + today.getDate();
    
    console.log('INSERT INTO `395project`.`calllog`(`Symptoms`, `Priority`, `CallSource`, `RecvdDate`, `RecvdTime`, `CustID`, `Tracker`, `CallStatus`, `Category`, `CustType`,`Site`) VALUES ("' 
    + req.body.EquipmentType + ", " + req.body.System + ", " + req.body.AssetTag + ", " + req.body.Location + ", " +req.body.SoftwareName + " " +
    '", "3", "Web", "' + today.toLocaleDateString() + '", "' + today.toTimeString().slice(0,8) + '", "' + req.user.id + '", "selfserve" , "Open", "Service", "Employee")');
    connection.query("SELECT * FROM `395project`.`calllog` ORDER BY CallID DESC LIMIT 1", function(err,result){
      var queryString = "INSERT INTO `395Project`.`calllog` (CallID,Symptoms,Priority,CallSource,RecvdDate,RecvdTime,CustID,Tracker,CallStatus,Category,CustType,TempDate,Site) values (?,?,?,?,?,?,?,?,?,?,?,?,?)"
      var appendedString = req.body.EquipmentType + " | " + req.body.System + " | " + req.body.AssetTag + " | " + req.body.Location + " | " + req.body.SoftwareName; 
      lastRec = addLastRecord(result);
    //connection.query('INSERT INTO `395project`.`calllog`(`CallID`,`Symptoms`, `Priority`, `CallSource`, `RecvdDate`, `RecvdTime`, `CustID`, `Tracker`, `CallStatus`, `Category`, `CustType`, `TempDate`) VALUES ("' + lastRec + '", "' 
    //+ req.body.EquipmentType + ", " + req.body.System + ", " + req.body.AssetTag + ", " + req.body.Location + ", " +req.body.SoftwareName + " " +
    //'", "3", "Web", "' + today.toLocaleDateString() + '", "' + today.toTimeString().slice(0,8) + '", "' + req.user.id + '", "selfserve" , "Open", "Service", "Employee", "' + stringDate + '")');
    connection.query(queryString, [lastRec, appendedString, "3", "Web", today.toLocaleDateString(), today.toTimeString().slice(0,8), req.user.id, "selfserve", "Open", "Service","Employee",stringDate,req.user.Site]);
    connection.end();
  });
    
    //connection.query('INSERT INTO `395project`.`asgnmnt`(`Description`, `TeamName`, `AssignedBy`, `Status`, `DateAssign`, `TimeAssign`) VALUES ("' + Concat info '", + "Help Desk Team", "Selfserve", "Unacknowledged", "' + CURRENT DATE '", "' + CURRENT TIME + '"'););
    console.log("Ending insertion, check the database to confirm");
  });
}
exports.hardware = function(req, res){
  console.log("Create hardware is running");
  console.log(req.body);
  console.log(req.user.Site);
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '395project'
  });
  
  console.log(req.body.EquipmentType);
  connection.connect(function(err) {
    var hPrioVal = changePriorityHardware(req.body.EquipmentType);
    console.log("Beginning insertion");
    var lastRec;
    var today = new Date();
    var stringDate = today.getFullYear() + "/" + (parseInt(today.getMonth()) + 1) + "/" + today.getDate();
    if(err) throw err
    connection.query("SELECT * FROM `395project`.`calllog` ORDER BY CallID DESC LIMIT 1", function(err,result){
      if (err) throw err
        lastRec = addLastRecord(result);
        var queryString = "INSERT INTO `395Project`.`calllog` (CallID,Symptoms,Priority,CallSource,RecvdDate,RecvdTime,CustID,Tracker,CallStatus,Category,CustType,TempDate,Site) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
        var appendedString  = req.body.EquipmentType  + " | " + req.body.AssetTag + " | " + req.body.Description + " | " + req.body.ErrorMessageText;
        connection.query(queryString, [lastRec,appendedString,hPrioVal, "Web", today.toLocaleDateString(), today.toTimeString().slice(0,8),req.user.id, "selfserve", "Open", "Hardware", "Employee",stringDate,req.user.Site]);
        //connection.query('INSERT INTO `395project`.`calllog`(`CallID`,`Symptoms`, `Priority`, `CallSource`, `RecvdDate`, `RecvdTime`, `CustID`, `Tracker`, `CallStatus`, `Category`, `CustType`, `TempDate`, `Site`, `TempDate`) VALUES ("' + lastRec + '", "' 
        //+ req.body.EquipmentType + ", " + req.body.AssetTag + ", " + req.body.Name + ", " + req.body.Description + ", " +req.body.ErrorMessageText + " " +
        //'", "' + hPrioVal + '", "Web", "' + today.toLocaleDateString() + '", "' + today.toTimeString().slice(0,8) + '", "' + req.user.id + '", "selfserve" , "Open", "Hardware", "Employee", "' + stringDate + '", "' + req.user.Site + '")');
        connection.end();
        console.log("Insert is over");
    });
    //console.log('INSERT INTO `395project`.`calllog`(`Symptoms`, `Priority`, `CallSource`, `RecvdDate`, `RecvdTime`, `CustID`, `Tracker`, `CallStatus`, `Category`, `CustType`, `TempDate`) VALUES ("' 
    //+ req.body.EquipmentType + ", " + req.body.AssetTag + ", " + req.body.Name + ", " + req.body.Description + ", " +req.body.ErrorMessageText + " " +
    //'", "3", "Web", "' + today.toLocaleDateString() + '", "' + today.toTimeString().slice(0,8) + '", "' + req.user.id + '", "selfserve" , "Open", "Hardware", "Employee", "' + stringDate + '")');
    //if (err) throw err
     // connection.query('INSERT INTO `395project`.`calllog`(`CallID`,`Symptoms`, `Priority`, `CallSource`, `RecvdDate`, `RecvdTime`, `CustID`, `Tracker`, `CallStatus`, `Category`, `CustType`, `TempDate`, `Site`) VALUES ("' + lastRec[0].CallID.toString() + '", "' 
    //  + req.body.EquipmentType + ", " + req.body.AssetTag + ", " + req.body.Name + ", " + req.body.Description + ", " +req.body.ErrorMessageText + " " +
    //  '", "' + hPrioVal + '", "Web", "' + today.toLocaleDateString() + '", "' + today.toTimeString().slice(0,8) + '", "' + req.user.id + '", "selfserve" , "Open", "Hardware", "Employee", "' + stringDate + '", "' + req.user.Site + '")');
    
    //connection.query('INSERT INTO `395project`.`asgnmnt`(`Description`, `TeamName`, `AssignedBy`, `Status`, `DateAssign`, `TimeAssign`) VALUES ("' + Concat info '", + "Help Desk Team", "Selfserve", "Unacknowledged", "' + CURRENT DATE '", "' + CURRENT TIME + '"'););
    
    console.log("Ending insertion, check the database to confirm");
    
    console.log("last \n\n\n" + lastRec);
  });
}

exports.software = function(req, res){
  console.log("Create software is running");
  console.log(req.body);
  var sPriority = changePrioritySoftware(req.body.SystemStatus);
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '395project'
  });
  
  if (req.body.AffectedSystem == "Dayforce"){
    console.log("Hey it matched");
  }
  
  connection.connect(function(err) {
    
    console.log("Beginning insertion");
    
    var today = new Date();
    var lastRec;
    var stringDate = today.getFullYear() + "/" + (parseInt(today.getMonth()) + 1) + "/" + today.getDate();

    var queryString = "INSERT INTO `395Project`.`calllog` (CallID,Symptoms,Priority,CallSource,RecvdDate,RecvdTime,CustID,Tracker,CallStatus,Category,CustType,TempDate,Site) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var appendedString = req.body.AffectedSystem +  " | " + req.body.SystemStatus + " | " + req.body.Description + " | " + req.body.ProblemCause;
    //console.log('INSERT INTO `395project`.`calllog`(`Symptoms`, `Priority`, `CallSource`, `RecvdDate`, `RecvdTime`, `CustID`, `Tracker`, `CallStatus`, `Category`, `CustType`) VALUES ("' 
    //+ req.body.AffectedSystem + ", " + req.body.SystemStatus + ", " + req.body.Description + ", " + req.body.ProblemCause + " " +
    //'", "' + value + '", "Web", "' + today.toLocaleDateString() + '", "' + today.toTimeString().slice(0,8) + '", "' + req.user.id + '", "selfserve" , "Open", "Software", "Employee")');
    connection.query("SELECT * FROM `395project`.`calllog` ORDER BY CallID DESC LIMIT 1", function(err,result){
      lastRec = addLastRecord(result);
      connection.query(queryString, [lastRec, appendedString, sPriority, "Web", today.toLocaleDateString(), today.toTimeString().slice(0,8), req.user.id, "selfserve", "Open", "Software", "Employee", stringDate, req.body.Site]);
      //connection.query('INSERT INTO `395project`.`calllog`(`CallID`,`Symptoms`, `Priority`, `CallSource`, `RecvdDate`, `RecvdTime`, `CustID`, `Tracker`, `CallStatus`, `Category`, `CustType`, `TempDate`, `Site`) VALUES ("' + lastRec + '", "' 
      //+ req.body.AffectedSystem + ", " + req.body.SystemStatus + ", " + req.body.Description + ", " + req.body.ProblemCause + " " +
      //'", "' + value + '", "Web", "' + today.toLocaleDateString() + '", "' + today.toTimeString().slice(0,8) + '", "' + req.user.id + '", "selfserve" , "Open", "Software", "Employee", "' + stringDate + '", "' + req.user.Site + '")');
      connection.end();
    });
    //connection.query('INSERT INTO `395project`.`asgnmnt`(`Description`, `TeamName`, `AssignedBy`, `Status`, `DateAssign`, `TimeAssign`) VALUES ("' + Concat info '", + "Help Desk Team", "Selfserve", "Unacknowledged", "' + CURRENT DATE '", "' + CURRENT TIME + '"'););
    
    console.log("Ending insertion, check the database to confirm");
  });

}

function changePrioritySoftware(softwareType){
  var value = 3;
  if (softwareType == "Yes"){
    value = 1;
  }
  return value;
}


function changePriorityHardware(hardwareType){
  var value = 3;
  if (hardwareType == "Sorter"){
    value =1;
  }
  else if(hardwareType == "Smart Chute" || hardwareType == "Self-checkout"){
    value=2;
  }
  return value;
}

function changeSoftwareTeam(sWare){
  var name =  "Help Desk Team";

  if (sWare == "Internet/network access" || sare == "S:/ drive / file share"){
    name = "Network Team";
  }

  else if (sWare == "Worflows"){
    name = "ILS Team";
  }
  return name;
}

function changeHardwareTeam(hType){
  var name = "Project Team";

  if (hType == "PC" || hType == "Laptop"){
    name = "Help Desk Team";
  }
  return name;
}

function addLastRecord(record){
  var number = parseInt(record[0].CallID.toString());
  number += 1;
  return number.toString();
}