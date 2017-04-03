var mysql = require('mysql');

exports.resolve = function(req,res){                 // EDIT TICKET
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

    var queryString = "UPDATE calllog set resolve = " + 1 + ", symptoms = concat(symptoms, ?) where CallID = ?"

    var ticketID = req.body.TicketID;
    var resolve = " | RESOLUTION=" + req.body.Resolveinfo;

    connection.query(queryString, [resolve, ticketID]);
    console.log("Ending insertion, check the database to confirm");
    connection.end();
  });
};