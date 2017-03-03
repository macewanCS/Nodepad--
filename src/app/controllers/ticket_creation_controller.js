var mysql = require('mysql');

exports.categories = function(req, res){
  res.render((__dirname + './../../public/views/categories.ejs'));
};
var category;

exports.forms = function(req, res){
  
  module.exports = req.params.form;
  
  console.log("started looking with " + req.params.form);
  if (req.params.form.match(/hardware/i)){
    console.log("Its a hardware ticket, eh");
    res.render((__dirname + '/../../public/views/hardware.ejs'));
    category = "hardware";
  }
  else if (req.params.form.match(/software/i)){
    console.log("Its a software ticket, eh");
    res.render((__dirname + '/../../public/views/software.ejs'));
    category = "software";
  }
  else if (req.params.form.match(/password/i)){
    console.log("Its a password ticket, eh");
    res.render((__dirname + '/../../public/views/password.ejs'));
    category = "password";
  }
  else if (req.params.form.match(/service/i)){
    console.log("Its a service ticket, eh");
    res.render((__dirname + '/../../public/views/service.ejs'));
    category = "service";
  }
  else if (req.params.form.match(/general/i)){
    console.log("Its a general ticket, eh");
    res.render((__dirname + '/../../public/views/general.ejs'));
    category = "general";
  }
}

exports.create = function(req, res){
  console.log("Create is running");
  console.log(req.body);
  
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '395project'
  });
  
  console.log(req.body.EquipmentType);
  
  connection.connect(function(err) {
    
    console.log("Beginning insertion");
    
    var today = new Date();
    
    console.log('INSERT INTO `395project`.`calllog`(`Symptoms`, `Priority`, `CallSource`, `RecvdDate`, `RecvdTime`, `CustID`, `Tracker`, `CallStatus`, `Category`, `CustType`) VALUES ("' 
    + req.body.EquipmentType + " " + req.body.AssetTag + " " + req.body.Name + " " + req.body.Description + " " +req.body.ErrorMessageText + " " +
    '", "3", "Web", "' + today.toLocaleDateString() + '", "' + today.toTimeString().slice(0,8) + '", "' + req.user.id + '", "selfserve" , "Open", "Hardware", "Employee")');
    
    connection.query('INSERT INTO `395project`.`calllog`(`Symptoms`, `Priority`, `CallSource`, `RecvdDate`, `RecvdTime`, `CustID`, `Tracker`, `CallStatus`, `Category`, `CustType`) VALUES ("' 
    + req.body.EquipmentType + " " + req.body.AssetTag + " " + req.body.Name + " " + req.body.Description + " " +req.body.ErrorMessageText + " " +
    '", "3", "Web", "' + today.toLocaleDateString() + '", "' + today.toTimeString().slice(0,8) + '", "' + req.user.id + '", "selfserve" , "Open", "Hardware", "Employee")');
    
    //connection.query('INSERT INTO `395project`.`asgnmnt`(`Description`, `TeamName`, `AssignedBy`, `Status`, `DateAssign`, `TimeAssign`) VALUES ("' + Concat info '", + "Help Desk Team", "Selfserve", "Unacknowledged", "' + CURRENT DATE '", "' + CURRENT TIME + '"'););
    
    console.log("Ending insertion, check the database to confirm");
    
  });
  
  
}