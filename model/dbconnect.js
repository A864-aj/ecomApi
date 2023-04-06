const sql=require('mysql');

let connection=sql.createConnection({
    user:"root",
    password:"",
    host:"localhost",
    database:"onlinebazar",
    port:"3306"
});

module.exports=connection;

