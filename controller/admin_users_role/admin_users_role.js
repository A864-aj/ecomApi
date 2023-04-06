const connection = require('../../model/dbconnect');

//==========================================================
//See User Roles

const seeUserRoles = (req, res) => {
    let sql_query = `select user_id,user_name,role_name from admin_role natural join admin_users_role natural join admin_user`
    connection.query(sql_query, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};


//==========================================================
//Assign User Roles

const giveUserRoles = (req, res) => {
    let user_Role_data=[
        req.body.user_name,
        req.body.role_name
    ]
    let sql_query = `INSERT into admin_users_role(user_id,role_id) values((select user_id from admin_user where user_name=?),(select role_id from admin_role where role_name=?))`
    connection.query(sql_query,user_Role_data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("Role Assigned");
        }
    })
};

//==============================================================================
//Update User Roles

const updateUserRoles = (req, res) => {
    let user_Role_data=[
        req.body.role_name,
        req.body.user_name
    ]
    let sql_query = `UPDATE admin_users_role SET role_id=(select role_id from admin_role where role_name=?) where user_id=(select user_id from admin_user where user_name=?)`
    connection.query(sql_query,user_Role_data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("Role Updated");
        }
    })
};

//==============================================================================
//Delete User Roles

const deleteUserRoles = (req, res) => {
    let user_Role_data=[
        req.body.user_name
    ]
    let sql_query = `DELETE FROM admin_users_role WHERE user_id=(select user_id from admin_user where user_name=?)`
    connection.query(sql_query,user_Role_data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("Role Deleted");
        }
    })
};



module.exports={seeUserRoles,giveUserRoles,updateUserRoles,deleteUserRoles}
