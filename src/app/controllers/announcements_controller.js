var mysql = require('mysql')

exports.announcement = function(req, res){
  
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '395project'
  });
  
  connection.connect(function(err) {
    var resultVar;
    // console.log('open');
    
    if (err) throw err

      connection.query('SELECT AID, Title, Announcement, SubmittedDate from 395project.announcements Order by AID Desc Limit 5;', function(err, result) {
            resultVar = JSON.stringify(result);
            console.log(resultVar);
            res.render((__dirname + '/../../public/views/announcements.ejs'), {
            announcements:resultVar,
            username:req.user.username,
            
            });
    });
    // console.log('all');
    connection.end();
  });
}