var mysql = require('mysql');

exports.edit = function(req,res){                 // EDIT TICKET
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

    //insert into edit table
    var queryString = "INSERT INTO edits (CallID, Edit, EDate, CustID) values (?,?,?,?)";

    var ticketID = req.body.TicketID;
    var edit = req.body.Editinfo;

    connection.query(queryString, [ticketID,edit,stringDate,req.user.id]);
    connection.end();
  });
};