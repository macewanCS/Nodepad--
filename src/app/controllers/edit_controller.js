var mysql = require('mysql');

exports.edit = function(req,res){                 // EDIT TICKET
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

    var queryString = "INSERT INTO edits (CallID, Edit, EDate) values (?,?,?)";

    var ticketID = req.body.TicketID;
    var edit = req.body.Editinfo;

    connection.query(queryString, [ticketID,edit,stringDate]);
    console.log("Ending insertion, check the database to confirm");
    connection.end();
  });
};