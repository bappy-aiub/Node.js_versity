var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pms'
});

connection.connect();
var id = '1;drop;';
var query = connection.query('SELECT * FROM admin WHERE admin_id = ?', id, function(err, result){
  console.log(result);
});
