var mysql = require('mysql');
var connection  =  mysql.createConnection({
	host : 'localhost',
	user : 'Brett',
	password : '123',
	database : 'test'
});

connection.connect();

connection.query('SELECT * from users',
	function(err, rows, fields){
		if(!err){
			var toClass = {}.toString;
			var test = rows[1];
			console.log('The solution is: ', test);
			return test;
		}	
		else
			console.log('Error');
		return "we fucked up";
	});

/*connection.query('Select 1+ 1 AS solution',
	function(err,rows,fields) {
		if (err){
			console.log('We fucked up');
		}

		console.log('the solution is', rows[0].solution);
	})*/
connection.end();