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
  querying()
})

function querying(){
  connection.query("SELECT * FROM baes",function(error, results){
    if (error) throw error;
    console.log("results:",results);
    connection.end()
  })
}
