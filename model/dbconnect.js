const sql=require('mysql');

let connection=sql.createConnection({
    user:"root",
    password:"",
    host:"localhost",
    database:"onlinebazar"
});

module.exports=connection;

