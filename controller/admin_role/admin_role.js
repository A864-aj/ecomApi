const connection = require('../../model/dbConnect');

const getRoles = (req, res) => {
    let sql_query = `SELECT * from admin_role`
    connection.query(sql_query, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

//================================================
// Add Role (Post)

const addRoles = (req, res) => {
    let role_data=[
        req.body.role_id,
        req.body.role_name
    ]
    let sql_query = `INSERT into admin_role values(?,?)`
    connection.query(sql_query,role_data,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("Role Added");
        }
    })
};

//================================================
// Update (Put)

const updateRoles = (req, res) => {
    let userInfo = [
        req.body.role_name,
        req.body.role_id
    ]

        let sql_query = `UPDATE admin_role SET role_name=? where role_id=?`;
        connection.query(sql_query,userInfo,(err, result) => {
        if (err) {
            console.log(err.sqlMessage);
        } else {
            res.send(result);
            console.log("Role Updated");
        }
    })
};

//================================================
// DELETE (DELETE)

const deleteRoles = (req, res) => {
    let userInfo = [
        req.body.role_id
    ]

        let sql_query = `DELETE from admin_role where role_id=?`;
        connection.query(sql_query,userInfo,(err, result) => {
        if (err) {
            console.log(err.sqlMessage);
        } else {
            res.send(result);
            console.log("Role Deleted");
        }
    })
};




module.exports = { getRoles,addRoles,updateRoles,deleteRoles }
