const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/homecontrollers');

router.post('/customer',homecontroller.customer);
router.post('/product',homecontroller.product);
router.get('/customer-list',homecontroller.customerlist);
router.post('/customer-order',homecontroller.customerorder);
router.post('/customer-order-list',homecontroller.customerorderlist);
router.post('/product-price-update',homecontroller.productpriceupdate)
module.exports = router;