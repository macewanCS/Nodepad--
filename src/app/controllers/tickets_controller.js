var mysql = require('mysql');

exports.view = function(req,res){
  res.send("You entered " + req.params.ticketid + " right? if it isnt please tell Jack and he can fix it and then things will work and he wont be sad.");
};

exports.edit = function(req,res){
  res.send("Congrats, you've found the secret page where ticket editing will go. " + req.params.ticketid + " That was your number right?");
};

exports.resolve = function(req,res){
  res.send("Congrats, you've found the secret page where ticket resolving will go." + req.params.ticketid + " Sick number bro.");
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
      
      connection.query('SELECT Category, CallStatus, Symptoms, RecvdDate FROM 395project.calllog WHERE CustID="' + req.user.id + '" and CallStatus="Closed";', function(err, result) {
        if (err) throw err
            myVar = JSON.stringify(result);
            console.log(myVar);
    });
    console.log('closed');
    if (err) throw err
      connection.query('SELECT Category, CallStatus, Symptoms, RecvdDate FROM 395project.calllog WHERE CustID="' + req.user.id + '" and CallStatus="Open";', function(err, result) {
        if (err) throw err
            myVar2 = JSON.stringify(result);
            console.log(myVar2);
    });
    console.log('open');
    
    if (err) throw err
      connection.query('SELECT Category, CallStatus, Symptoms, RecvdDate FROM 395project.calllog WHERE CustID="' + req.user.id + '";', function(err, result) {
        if (err) throw err
            myVar3 = JSON.stringify(result);
            console.log(myVar3);
            res.render((__dirname + '/../../public/views/mytickets.ejs'), {
            allTickets:myVar3,
            openTickets:myVar2,
            closedTickets:myVar,
            
            });
    });
    console.log('all');
  });
}