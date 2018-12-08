var mysql = require('mysql')

var connection = mysql.createConnection({
  host:'localhost',
  port:'8889',
  user:'root',
  password:'root',
  database:'bestBae_db'
})


connection.connect(function(error){
  if(error) throw error;
  console.log("connected at " +connection.threadId+"\n");
  connection.end()
})
