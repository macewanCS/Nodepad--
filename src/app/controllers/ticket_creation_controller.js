var mysql = require('mysql');

exports.categories = function(req, res){
  res.render((__dirname + './../../public/views/categories.ejs'), {username:req.user.username});
};
var category;

exports.forms = function(req, res){
  
  module.exports = req.params.form;
  
  if (req.params.form.match(/hardware/i)){

    res.render((__dirname + '/../../public/views/hardware.ejs'), {username:req.user.username});
    category = "hardware";
  }
  else if (req.params.form.match(/software/i)){

    res.render((__dirname + '/../../public/views/software.ejs'), {username:req.user.username});
    category = "software";
  }
  else if (req.params.form.match(/password/i)){

    res.render((__dirname + '/../../public/views/password.ejs'), {username:req.user.username});
    category = "password";
  }
  else if (req.params.form.match(/service/i)){

    res.render((__dirname + '/../../public/views/service.ejs'), {username:req.user.username});
    category = "service";
  }
  else if (req.params.form.match(/general/i)){

    res.render((__dirname + '/../../public/views/general.ejs'), {username:req.user.username});
    category = "general";
  }
}
exports.service = function(req, res){

  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'temp',
    password: 'password1',
    database: '395project'
  });
  

  
  connection.connect(function(err) {
    

    var lastRec;
    var today = new Date();
    var stringDate = today.getFullYear() + "/" + (parseInt(today.getMonth()) + 1) + "/" + today.getDate();
    var team = changeServiceTeam(req.body.EquipmentType);
    
    //get the last ticket number
    connection.query("SELECT * FROM calllog ORDER BY CallID DESC LIMIT 1", function(err,result){
      
      //Sanatized input and inserting it into the tables
      var queryString = "INSERT INTO calllog (CallID,Symptoms,Priority,CallSource,RecvdDate,RecvdTime,CustID,Tracker,CallStatus,Category,CustType,TempDate,Site) values (?,?,?,?,?,?,?,?,?,?,?,?,?)"
      var queryStringAsign = "Insert into asgnmnt (CallID,Description, TeamName, AssignedBy, Status, DateAssign, TimeAssign) values (?,?,?,?,?,?,?)";
      var appendedString = req.body.EquipmentType + " | " + req.body.System + " | " + req.body.AssetTag + " | " + req.body.Location + " | " + req.body.SoftwareName + " | " + req.body.SoftwareLocation + " | " + req.body.Accessor + " | " + req.body.equipType; 

      lastRec = addLastRecord(result);

    //insertion into calllog and asgnmnt tables  
    connection.query(queryString, [lastRec, appendedString, "3", "Web", today.toLocaleDateString(), today.toTimeString().slice(0,8), req.user.id, "selfserve", "Open", "Service","Employee",stringDate,req.user.Site]);
    connection.query(queryStringAsign, [lastRec, appendedString, team,  "Selfserve", "Unacknowledged", today.toLocaleDateString(), today.toTimeString().slice(0,8)]);
    connection.end();
  });



  });
};

exports.hardware = function(req, res){

  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'temp',
    password: 'password1',
    database: '395project'
  });
  

  connection.connect(function(err) {
    var hPrioVal = changePriorityHardware(req.body.EquipmentType);

    var lastRec;
    var today = new Date();
    var team = changeHardwareTeam(req.body.EquipmentType);
    var stringDate = today.getFullYear() + "/" + (parseInt(today.getMonth()) + 1) + "/" + today.getDate();
    if(err) throw err
      //Get the last ticket number to increment
    connection.query("SELECT * FROM calllog ORDER BY CallID DESC LIMIT 1", function(err,result){
      if (err) throw err
        lastRec = addLastRecord(result);
      //Sanatized query strings from user
        var queryString = "INSERT INTO calllog (CallID,Symptoms,Priority,CallSource,RecvdDate,RecvdTime,CustID,Tracker,CallStatus,Category,CustType,TempDate,Site) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
        var queryStringAsign = "Insert into asgnmnt (CallID,Description, TeamName, AssignedBy, Status, DateAssign, TimeAssign) values (?,?,?,?,?,?,?)";
        var appendedString  = req.body.EquipmentType  + " | " + req.body.AssetTag + " | " + req.body.Name + " | " + req.body.Description + " | " + req.body.ErrorMessageText;
        connection.query(queryString, [lastRec,appendedString,hPrioVal, "Web", today.toLocaleDateString(), today.toTimeString().slice(0,8),req.user.id, "selfserve", "Open", "Hardware", "Employee",stringDate,req.user.Site]);

        connection.query(queryStringAsign, [lastRec, appendedString, team, "Selfserve", "Unacknowledged", today.toLocaleDateString(), today.toTimeString().slice(0,8)]);

        connection.end();

    });
    

  });
}

exports.software = function(req, res){

  var sPriority = changePrioritySoftware(req.body.SystemStatus);
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'temp',
    password: 'password1',
    database: '395project'
  });
  

  
  connection.connect(function(err) {
    

    
    var today = new Date();
    var lastRec;
    var stringDate = today.getFullYear() + "/" + (parseInt(today.getMonth()) + 1) + "/" + today.getDate();
    var team = changeSoftwareTeam(req.body.AffectedSystem);

    //Sanatized query strings 
    var queryString = "INSERT INTO calllog (CallID,Symptoms,Priority,CallSource,RecvdDate,RecvdTime,CustID,Tracker,CallStatus,Category,CustType,TempDate,Site) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var appendedString = req.body.AffectedSystem +  " | " + req.body.SystemStatus + " | " + req.body.Description + " | " + req.body.ProblemCause;
    
     //Get last ticket from database
    connection.query("SELECT * FROM calllog ORDER BY CallID DESC LIMIT 1", function(err,result){
      
      lastRec = addLastRecord(result); //get the number
      var queryStringAsign = "Insert into asgnmnt (CallID,Description, TeamName, AssignedBy, Status, DateAssign, TimeAssign) values (?,?,?,?,?,?,?)";

      //insertions
      connection.query(queryString, [lastRec, appendedString, sPriority, "Web", today.toLocaleDateString(), today.toTimeString().slice(0,8), req.user.id, "selfserve", "Open", "Software", "Employee", stringDate, req.user.Site]);
      connection.query(queryStringAsign, [lastRec, appendedString, team, "Selfserve", "Unacknowledged", today.toLocaleDateString(), today.toTimeString().slice(0,8)]);
      connection.end();
    });
    

  });

}

exports.password = function(req,res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'temp',
    password: 'password1',
    database: '395project'
  });

  connection.connect(function(err){

    var today = new Date();
    var stringDate = today.getFullYear() + "/" + (parseInt(today.getMonth()) + 1) + "/" + today.getDate();
    
    //Sanatized query strings
    var queryString = "INSERT INTO calllog (CallID,Symptoms,Priority,CallSource,RecvdDate,RecvdTime,CustID,Tracker,CallStatus,Category,CustType,TempDate,Site) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var queryStringAsign = "Insert into asgnmnt (CallID,Description, TeamName, AssignedBy, Status, DateAssign, TimeAssign) values (?,?,?,?,?,?,?)";
    var appendedString = req.body.PasswordSystem + " | " + req.body.Usernametext + " | " + req.body.Fullname;
    var team = "Help Desk Team";
    var pPriority = changePriorityPassword(req.body.PasswordSystem);
    
    //getting the last ticket id to be incremented
    connection.query("SELECT * FROM calllog ORDER BY CallID DESC LIMIT 1", function(err,result){
      lastRec = addLastRecord(result);

      //inserting into the calllog and asgnmnt tables
      connection.query(queryString, [lastRec, appendedString, pPriority, "Web", today.toLocaleDateString(), today.toTimeString().slice(0,8), req.user.id, "selfserve", "Open", "Password", "Employee", stringDate, req.user.Site]);
      connection.query(queryStringAsign, [lastRec, appendedString, team, "Selfserve", "Unacknowledged", today.toLocaleDateString(), today.toTimeString().slice(0,8)]);
      connection.end();
    });

  });

}

exports.general = function(req,res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'temp',
    password: 'password1',
    database: '395project'
  });

  connection.connect(function(err){

    var today = new Date();
    var stringDate = today.getFullYear() + "/" + (parseInt(today.getMonth()) + 1) + "/" + today.getDate();

    //Sanatized string
    var queryString = "INSERT INTO calllog (CallID,Symptoms,Priority,CallSource,RecvdDate,RecvdTime,CustID,Tracker,CallStatus,Category,CustType,TempDate,Site) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var appendedString = req.body.GeneralSystem;
    var pPriority = changePriorityPassword(req.body.System);

    //actual insertion of data into calllog(gneral isnt inserted into asgnmnt)
    connection.query("SELECT * FROM calllog ORDER BY CallID DESC LIMIT 1", function(err,result){
      lastRec = addLastRecord(result);
      connection.query(queryString, [lastRec, appendedString, "4", "Web", today.toLocaleDateString(), today.toTimeString().slice(0,8), req.user.id, "selfserve", "Open", "General", "Employee", stringDate, req.user.Site]);
      connection.end();
    });

  });

}

function changePrioritySoftware(softwareType){
  var value = 3;
  if (softwareType == "Yes"){
    value = 1;
  }
  return value;
}

function changePriorityPassword(passwordType){
  var value = 3;
  if (passwordType == "StaffWeb/Active Directory" || passwordType == "Dayforce"){
    value = 2;
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

  if (sWare == "Internet/network access" || sWare == "S:/ drive / file share"){
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

function changeServiceTeam(service){
  var team = "Administrative Team";
  if (service == "Move Equipment"){
    team = "Project Team";
  }
  return team;

}

function addLastRecord(record){
  var number = parseInt(record[0].CallID.toString());
  number += 1;
  return number.toString();
}