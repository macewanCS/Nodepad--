var mysql = require('mysql');

exports.view = function(req,res){            // VIEW TICKET

  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '395project'
  });
  
  connection.connect(function(err) {
    
    var ticketData;
    if (err) throw err
      console.log('You are now connected...')
      
    connection.query('SELECT EditID, Edit, EDate FROM 395project.edits WHERE CallID="' + req.params.ticketid + '";', function(err, result) {
        if (err) throw err
            editVar = JSON.stringify(result);
          
    });
    if (err) throw err
      connection.query('SELECT CallID, Category, CallStatus, Symptoms, TempDate FROM 395project.calllog WHERE CallID="' + req.params.ticketid + '";', function(err, result) {
        if (err) throw err

            ticketData = JSON.stringify(result);
            console.log(req.params.ticketid);
            console.log(ticketData);
            res.render((__dirname + '/../../public/views/viewticket.ejs'), {
            data:ticketData,
            edits:editVar,
            cid:req.params.ticketid,
            username:req.user.username,  
            });
    });
    connection.end();
  });

};



exports.edit = function(req,res){                 // EDIT TICKET
    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '395project'
  });
  
  connection.connect(function(err) {
    
    var ticketData;
    if (err) throw err
      console.log('You are now connected...')
    
    if (err) throw err
      connection.query('SELECT CallID, Category, CallStatus, Symptoms, TempDate FROM 395project.calllog WHERE CallID="' + req.params.ticketid + '";', function(err, result) {
        if (err) throw err

            ticketData = JSON.stringify(result);
            console.log(req.params.ticketid);
            console.log(ticketData);
            res.render((__dirname + '/../../public/views/editticket.ejs'), {
            data:ticketData,
            username:req.user.username,  
            });
    });
    connection.end();
  });
};

exports.resolve = function(req,res){
    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '395project'
  });
  
  connection.connect(function(err) {
    
    var ticketData;
    if (err) throw err
      console.log('You are now connected...')
    
    if (err) throw err
      connection.query('SELECT CallID, Category, CallStatus, Symptoms, TempDate FROM 395project.calllog WHERE CallID="' + req.params.ticketid + '";', function(err, result) {
        if (err) throw err

            ticketData = JSON.stringify(result);
            console.log(req.params.ticketid);
            console.log(ticketData);
            res.render((__dirname + '/../../public/views/resolveticket.ejs'), {
            data:ticketData,
            username:req.user.username,  
            });
    });
    connection.end();
  });
};

exports.mytickets = function(req, res){
  
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '395project'
  });
  
  connection.connect(function(err) {
    
    var myVar, myVar2, myVar3;
    if (err) throw err
      console.log('You are now connected...')
      
      connection.query('SELECT CallID, Category, CallStatus, Symptoms, TempDate, Resolve FROM 395project.calllog WHERE CustID="' + req.user.id + '" and CallStatus="Closed" or ( CustID="' + req.user.id + '" and Resolve="1");', function(err, result) {
        if (err) throw err
            myVar = JSON.stringify(result);
            console.log(myVar);
    });
    console.log('closed');
    if (err) throw err
      connection.query('SELECT CallID, Category, CallStatus, Symptoms, TempDate FROM 395project.calllog WHERE CustID="' + req.user.id + '" and CallStatus="Open" and Resolve is null', function(err, result) {
        if (err) throw err
            myVar2 = JSON.stringify(result);
            console.log(myVar2);
    });
    console.log('open');
    
    if (err) throw err
      connection.query('SELECT CallID, Category, CallStatus, Symptoms, TempDate, Resolve FROM 395project.calllog WHERE CustID="' + req.user.id + '";', function(err, result) {
        if (err) throw err
            myVar3 = JSON.stringify(result);
            console.log("This is my var\n\n\n" + myVar);
            res.render((__dirname + '/../../public/views/mytickets.ejs'), {
            allTickets:myVar3,
            openTickets:myVar2,
            closedTickets:myVar,
            username:req.user.username,
            
            });
    });
    console.log('all');
    connection.end();
  });
}