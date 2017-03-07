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

exports.home = function(req, res){
  
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '395project'
  });
  
  connection.connect(function(err) {
    
    var myVar3;
    console.log('You are now connecting...')
    if (err) throw err
      connection.query('SELECT Category, CallStatus, Symptoms, TempDate FROM 395project.calllog WHERE CustID="' + req.user.id + '";', function(err, result) {
        if (err) throw err
            myVar3 = JSON.stringify(result);
            console.log(myVar3);
            res.render((__dirname + '/../../public/views/home.ejs'), {
          
            openTickets:myVar3,
            username:req.user.username,            
            });
            connection.end()
    });
  });
}