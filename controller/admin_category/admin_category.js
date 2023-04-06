const connection = require('../../model/dbconnect');

const getCategory = (req, res) => {
    let sql_query = `SELECT * from product_category`
    connection.query(sql_query, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

const addCategory = (req, res) => {
    let data =[req.body.cat_id,req.body.category_name]

    let sql_query = `INSERT into product_category values(?,?)`
    connection.query(sql_query,data,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

module.exports={getCategory,addCategory};
