var mysql = require('mysql')

exports.announcement = function(req, res){
  
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'temp',
    password: 'password1',
    database: '395project'
  });
  
  connection.connect(function(err) {
    var resultVar;
    
    if (err) throw err
      //grab the top 5 announcments from the database
      connection.query('SELECT AID, Title, Announcement, SubmittedDate from 395project.announcements Order by AID Desc Limit 5;', function(err, result) {
            resultVar = JSON.stringify(result);
            res.render((__dirname + '/../../public/views/announcements.ejs'), {
            announcements:resultVar,
            username:req.user.username,
            branch:req.user.Site,
            
            });
    });

    connection.end();
  });
}

exports.add = function(req,res){
    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'temp',
    password: 'password1',
    database: '395project'
  });

  connection.connect(function(err) {
    if (err) throw err
      
      //inserting into the announcment database
      var queryString = "INSERT into announcements (Title,Announcement,SubmittedDate) VALUES (?,?,?)";
      var title = req.body.Subject;
      var message = req.body.Message;
      var today = new Date();
      var stringDate = today.getFullYear() + "/" + (parseInt(today.getMonth()) + 1) + "/" + today.getDate();
      connection.query(queryString,[title,message,stringDate]);
      connection.end();
  });

}