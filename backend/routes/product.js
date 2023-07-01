const express =require('express')
const router = express.Router();

const{  getProducts, 
        newProduct, 
        getSingleProduct, 
        updateProduct, 
        deleteProduct} =require('../controllers/productController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/authSeller');


router.route('/seller/products').get(isAuthenticatedUser, authorizeRoles('seller'),getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/seller/product/new').post(isAuthenticatedUser,authorizeRoles('seller'), newProduct);

router.route('/seller/product/:id').put(isAuthenticatedUser,authorizeRoles('seller'), updateProduct)
                                   .delete(isAuthenticatedUser,authorizeRoles('seller'), deleteProduct);


module.exports =router;