const mysql = require("mysql2");

const connect_db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Xivera0909",
  database: "crud",
});


connect_db.connect((err)=>{
    if(err){
        console.error("database connection failed : ",err);
    }
    console.log("Connected to db successfully!")
})

module.exports = connect_db;