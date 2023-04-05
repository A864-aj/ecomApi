const express = require("express");
const cors=require('cors')
const adminPowerRouter = express.Router();

adminPowerRouter.use((req,res,next)=>{
  res.header('Access-Control-Allow-origin','*');
  next();
})
adminPowerRouter.use(cors());
adminPowerRouter.use(express.json())
const { getCustomerDetails, getProductsDetails, 
    getSupplierDetails, deleteCustomer, deleteProduct, deleteSupplier,
     getCustomerDetailsbyID, getProductDetailsbyID, 
     getSupplierDetailsbyID, getOrderDetails, getOrderDetailsbyID,
      getOrderDetailsbyDate,getOrderDetailsbyProduct,
    getActiveCustomer,getActiveSeller,getDeactiveCustomer,
    getDeactiveSeller,getPaymentDetails,
    getPendingPaymentDetails,
    getRecievedPaymentDetails,updatetCustomerDetails ,getHalfSupplierDetails} = require('../../controller/admin_power/admin_power');

  
adminPowerRouter.get('/showCustomer', getCustomerDetails);
adminPowerRouter.get('/showProducts', getProductsDetails);
adminPowerRouter.get('/showSupplier', getSupplierDetails);
adminPowerRouter.get('/showHalfSupplier', getHalfSupplierDetails);

adminPowerRouter.patch('/updateCustomer/:cust_id', updatetCustomerDetails);

adminPowerRouter.get('/showCustomerbyID', getCustomerDetailsbyID);
adminPowerRouter.get('/showProductsbyID', getProductDetailsbyID);
adminPowerRouter.get('/showSupplierbyID', getSupplierDetailsbyID);

adminPowerRouter.get('/showOrderDetails', getOrderDetails);
adminPowerRouter.get('/showOrderDetailsbyID', getOrderDetailsbyID);
adminPowerRouter.get('/showOrderDetailsbyDate', getOrderDetailsbyDate);
adminPowerRouter.get('/showOrderDetailsbyProduct', getOrderDetailsbyProduct);

adminPowerRouter.get('/showActiveCustomer', getActiveCustomer);
adminPowerRouter.get('/showActiveSeller', getActiveSeller);
adminPowerRouter.get('/showDeactiveCustomer', getDeactiveCustomer);
adminPowerRouter.get('/showDeactiveSeller', getDeactiveSeller);

adminPowerRouter.delete('/deleteCustomer/:cust_id', deleteCustomer);
adminPowerRouter.delete('/deleteProducts', deleteProduct);
adminPowerRouter.delete('/deleteSupplier', deleteSupplier);

adminPowerRouter.get('/showPaymentDetails', getPaymentDetails);
adminPowerRouter.get('/showRecievedPaymentDetails', getRecievedPaymentDetails);
adminPowerRouter.get('/showPendingPaymentDetails', getPendingPaymentDetails);

module.exports = adminPowerRouter;