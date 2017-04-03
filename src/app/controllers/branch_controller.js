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
          
    connection.query('SELECT EditID, Edit, EDate FROM 395project.edits WHERE CallID="' + req.params.ticketid + '";', function(err, result) {
        if (err) throw err
            editVar = JSON.stringify(result);
          
    });
    if (err) throw err
      connection.query('SELECT CallID, username, Category, CallStatus, Symptoms, TempDate FROM 395project.calllog, 395project.users WHERE CallID="' + req.params.ticketid + '" and 395project.calllog.CustID = 395project.users.id;', function(err, result) {
        if (err) throw err

            ticketData = JSON.stringify(result);
            res.render((__dirname + '/../../public/views/branchview.ejs'), {
            data:ticketData,
            edits:editVar,
            cid:req.params.ticketid,
            username:req.user.username,  
            });
    });
    connection.end();
  });

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
      
      var closedQueryString = changeQueryStringClosed(req.user.Site);
      connection.query(closedQueryString, function(err, result) {

        if (err) throw err
            myVar = JSON.stringify(result);
            console.log(myVar);
    });
    console.log('closed');
    if (err) throw err
      var openQueryString = changeQueryStringOpen(req.user.Site);
      connection.query(openQueryString, function(err, result) {

        if (err) throw err
            myVar2 = JSON.stringify(result);
            console.log(myVar2);
    });
    // console.log('open');
    
    if (err) throw err
      var allQueryString = changeQueryStringAll(req.user.Site);
      connection.query(allQueryString, function(err, result) {
        console.log(req.user.Site);
        if (err) throw err
            myVar3 = JSON.stringify(result);
            console.log(myVar3);
            res.render((__dirname + '/../../public/views/branchtickets.ejs'), {
            allTickets:myVar3,
            openTickets:myVar2,
            closedTickets:myVar,
            username:req.user.username,
            branch:req.user.Site,
            
            });
    });
    // console.log('all');
    connection.end();
  });
}

function changeQueryStringOpen(site)
{
  var string = 'Select CallID, Category, CallStatus, Symptoms, TempDate, calllog.Site FROM 395project.calllog WHERE CallStatus="Open" and resolve is null and calllog.Site != "HR"';
  if (site == "IT" || site == "HR"){
    string = 'Select CallID, Category, CallStatus, Symptoms, TempDate, calllog.Site FROM 395project.calllog WHERE CallStatus="Open" and resolve is null';
  }
  return string;
}
function changeQueryStringClosed(site)
{
  var string = 'Select CallID, Category, CallStatus, Symptoms, TempDate, calllog.Site, Resolve FROM 395project.calllog WHERE (CallStatus="Closed" or (CallStatus="Open" and resolve is not null)) and calllog.Site != "HR"';
  if (site == "IT" || site == "HR"){
    string = 'Select CallID, Category, CallStatus, Symptoms, TempDate, calllog.Site, Resolve FROM 395project.calllog WHERE CallStatus="Closed" or (CallStatus="Open" and resolve is not null)';
  }
  return string;
}
function changeQueryStringAll(site)
{
  var string = 'Select CallID, Category, CallStatus, Symptoms, TempDate, calllog.Site, Resolve FROM 395project.calllog Where calllog.Site != "HR"';
  if (site == "IT" || site == "HR"){
    string = 'Select CallID, Category, CallStatus, Symptoms, TempDate, calllog.Site, Resolve FROM 395project.calllog';
  }
  return string;
}