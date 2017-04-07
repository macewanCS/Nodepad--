var mysql = require('mysql');

exports.resolve = function(req,res){                 // EDIT TICKET
    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '395project'
  });
  
  
  connection.connect(function(err) {
    
    var lastRec;
    var today = new Date();
    var stringDate = today.getFullYear() + "/" + (parseInt(today.getMonth()) + 1) + "/" + today.getDate();

    var queryString = "UPDATE calllog set resolve = " + 1 + ", symptoms = concat(symptoms, ?) where CallID = ?"

    var ticketID = req.body.TicketID;
    var resolve = " | Resolution:" + req.body.Resolveinfo;

    connection.query(queryString, [resolve, ticketID]);
    connection.end();
  });
};