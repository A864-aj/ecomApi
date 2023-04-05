const connection = require('../../model/dbConnect');

const getCustomerDetails = (req, res) => {
    let sql_query = `SELECT * from customer`
    connection.query(sql_query, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

const updatetCustomerDetails = (req, res) => {
    let data=[req.body.cust_name,req.body.cust_phone_no,req.body.cust_email,req.body.cust_country,req.body.cust_h_no,req.body.cust_colony,req.body.cust_area,req.body.cust_pincode,req.body.cust_city,req.body.cust_state,req.body.cust_status,req.params.cust_id]
    let sql_query = `Update customer SET cust_name=?,cust_phone_no=?,cust_email=?,cust_country=?,cust_h_no=?,cust_colony=?,cust_area=?,cust_pincode=?,cust_city=?,cust_state=?,cust_status=? where cust_id=?`
    connection.query(sql_query,data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};




const getProductsDetails = (req, res) => {
    let sql_query = `SELECT * from products`
    connection.query(sql_query, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

const getSupplierDetails = (req, res) => {
    let sql_query = `SELECT * from supplier`
    connection.query(sql_query, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};
const getHalfSupplierDetails = (req, res) => {
    let sql_query = `SELECT sup_id,sup_name, sup_city, sup_mob, sup_email, sup_status, sup_owner from supplier`
    connection.query(sql_query, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

// ================================================================================
// Search using ID
// ==========================================================================


const getSupplierDetailsbyID = (req, res) => {
    let data = [req.body.id]
    let sql_query = `SELECT sup_name, sup_address, sup_city, sup_pincode, sup_state, sup_mob, sup_mob_two, sup_email, sup_status, sup_owner FROM supplier WHERE sup_id=?`
    connection.query(sql_query, data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};
const getCustomerDetailsbyID = (req, res) => {
    let data = [req.body.id]
    let sql_query = `SELECT * FROM customer WHERE cust_id=? `
    connection.query(sql_query, data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};
const getProductDetailsbyID = (req, res) => {
    let data = [req.body.id]
    let sql_query = `SELECT * from products WHERE pro_id=? `
    connection.query(sql_query, data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};




// ================================================================================
// ==========================================================================

const deleteCustomer = (req, res) => {
    let data = [req.params.cust_id]
    let sql_query = `DELETE FROM customer WHERE cust_id=? `
    connection.query(sql_query, data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};


const deleteProduct = (req, res) => {
    let data = [req.body.pro_id]
    let sql_query = `DELETE FROM products WHERE pro_id=? `
    connection.query(sql_query, data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

const deleteSupplier = (req, res) => {
    let data = [req.body.sup_id]
    let sql_query = `DELETE FROM products WHERE sup_id=? `
    connection.query(sql_query, data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

/*======================================================================================
                   For  Order 
========================================================================================== */
const getOrderDetails = (req, res) => {

    let sql_query = `SELECT * from orders`
    connection.query(sql_query, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

const getOrderDetailsbyID = (req, res) => {
    let data = [req.body.id]
    let sql_query = `SELECT * from orders WHERE order_id=?`
    connection.query(sql_query, data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

const getOrderDetailsbyDate = (req, res) => {
    let data = [req.body.date]
    let sql_query = `SELECT * from orders WHERE order_date=?`
    connection.query(sql_query, data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};
const getOrderDetailsbyProduct = (req, res) => {
    let data = [req.body.id]
    let sql_query = `SELECT * from orders WHERE pro_id=?`
    connection.query(sql_query, data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};


const getActiveCustomer = (req, res) => {
    let sql_query = `SELECT * from customer WHERE cust_status='Active'`
    connection.query(sql_query,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

const getDeactiveCustomer = (req, res) => {
    let sql_query = `SELECT * from customer WHERE cust_status='Deactive'`
    connection.query(sql_query,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

const getActiveSeller = (req, res) => {
    let sql_query = `SELECT * from supplier WHERE sup_status='Active'`
    connection.query(sql_query,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

const getDeactiveSeller = (req, res) => {
    let sql_query = `SELECT * from supplier WHERE sup_status='Deactive'`
    connection.query(sql_query,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};



/* ==========================================================================
                             Payment
====================================================================================== */

const getPaymentDetails = (req, res) => {
    let sql_query = `SELECT * from payment`
    connection.query(sql_query,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

const getRecievedPaymentDetails = (req, res) => {
    let sql_query = `SELECT * from payment where pay_status='Recieved'`
    connection.query(sql_query,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};
const getPendingPaymentDetails = (req, res) => {
    let sql_query = `SELECT * from payment where pay_status='Pending'`
    connection.query(sql_query,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};




module.exports = {
    getCustomerDetails, getProductsDetails,
    getSupplierDetails, deleteCustomer, deleteProduct, deleteSupplier,
    getCustomerDetailsbyID, getProductDetailsbyID,
    getSupplierDetailsbyID, getOrderDetails, getOrderDetailsbyID,
    getOrderDetailsbyDate,getOrderDetailsbyProduct,
    getActiveCustomer,getDeactiveCustomer,getActiveSeller,getDeactiveSeller,
    getPaymentDetails,getPendingPaymentDetails,getRecievedPaymentDetails,
    updatetCustomerDetails,getHalfSupplierDetails
};