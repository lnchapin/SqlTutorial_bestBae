var mysql = require('mysql')
var inquirer = require('inquirer')

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
  addBaes()
})

function querying(){
  connection.query("SELECT * FROM baes",function(error, results){
    if (error) throw error;
    console.log("results:",results);
    connection.end()
  })
}

function addBaes(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'characterName',
      message: 'What is your characters name?'
    },
    {
      type:'list',
      name:'intrests',
      message:'What is your character intrested in?',
      choices: ['podcasts', 'video games', 'reading']
    },
    {
      type:'list',
      name:'food',
      message:'What is your characters favorite food?',
      choices:['italian', 'mexican', 'greek', 'chinese', 'american']
    },
    {
      type:'list',
      name:'music',
      message:"What is your characters favorite music?",
      choices:['classical', 'pop', 'rock', 'metal', 'dance']
    }
  ]).then(function(answers){
    console.log(answers);
    connection.query("INSERT INTO baes SET ?",{
      characterName:answers.characterName,
      datesGoneOn: 0,
      intrests: answers.intrests,
      favoriteFood:answers.food,
      favoriteMusic:answers.music
    }, function(error){
      if (error) throw error;
      console.log("added Bae");
      querying()
    })
  })
}
