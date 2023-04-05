const connection = require('../../model/dbConnect');

const userGet = (req, res) => {
    let sql_query = `SELECT * from admin_user`
    connection.query(sql_query, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};


const userGetHalf = (req, res) => {
    let sql_query = `SELECT user_id,user_name,user_email,user_mob,city,emp_status from admin_user`
    connection.query(sql_query, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};


const userAdd = (req, res) => {
    let userInfo = [req.body.user_id,
    req.body.user_name,
    req.body.user_email,
    req.body.user_mob,
    req.body.gender,
    req.body.address_line1,
    req.body.landmark,
    req.body.state,
    req.body.city,
    req.body.pincode,
    req.body.aadhar_no,
    req.body.profile_photo,
    req.body.aadhar_photo,
    req.body.dob,
    req.body.doj,
    req.body.emp_password]

    let sql_query = `INSERT into admin_user(user_id,user_name,user_email,user_mob,gender,address_line1,landmark,state,city,pincode,aadhar_no,profile_photo,aadhar_photo,dob,doj,emp_password) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    connection.query(sql_query, userInfo, (err, result) => {
        if (err) {
            console.log(err.sqlMessage);
        } else {
            res.send(result);
            console.log("data_inserted");
        }
    })
};


const userDel = (req, res) => {
    let user_id = req.body.user_id;
   

    let sql_query = `Delete from admin_user where user_id=?`
    connection.query(sql_query,[user_id] ,(err, result) => {
        if (err) {
            console.log(err.sqlMessage);
        } else {
            res.send(result);
            console.log("data Deleted");
        }
    })
};

const userUpdate = (req, res) => {
    let userInfo = [
        req.body.user_name,
        req.body.user_email,
        req.body.user_mob,
        req.body.gender,
        req.body.address_line1,
        req.body.landmark,
        req.body.state,
        req.body.city,
        req.body.pincode,
        req.body.aadhar_no,
        req.body.profile_photo,
        req.body.aadhar_photo,
        req.body.dob,
        req.body.doj,
        req.body.emp_password,
        req.body.user_id
    ]

        let sql_query = `UPDATE admin_user SET user_name=?,user_email=?,user_mob=?,gender=?,address_line1=?,landmark=?,state=?,city=?,pincode=?,aadhar_no=?,profile_photo=?,aadhar_photo=?,dob=?,doj=?,emp_password=? where user_id=?`;
        connection.query(sql_query,userInfo,(err, result) => {
        if (err) {
            console.log(err.sqlMessage);
        } else {
            res.send(result);
            console.log("data Updated");
        }
    })
};

module.exports = { userGet, userAdd, userDel,userUpdate ,userGetHalf}