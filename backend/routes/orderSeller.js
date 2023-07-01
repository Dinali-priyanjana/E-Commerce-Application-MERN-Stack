const express = require('express')
const router = express.Router();

const {
    newOrder,
    getSingleOrder,
    myOrders,
    allOrders,
    updateOrder,
    deleteOrder

} = require('../controllers/orderControllerSeller')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/authSeller')

router.route('/order/new').post(isAuthenticatedUser, newOrder);

router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/orders/me').get(isAuthenticatedUser, myOrders);

router.route('/seller/orders/').get(isAuthenticatedUser, authorizeRoles('seller'), allOrders);
router.route('/seller/order/:id')
    .put(isAuthenticatedUser, authorizeRoles('seller'), updateOrder)
    .delete(isAuthenticatedUser, authorizeRoles('seller'), deleteOrder);

module.exports = router;