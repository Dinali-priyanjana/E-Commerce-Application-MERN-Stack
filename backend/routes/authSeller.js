const express = require('express');
const router = express.Router();

const { registerUser, 
    loginUser, 
    logout, 
    forgotPassword, 
    resetPassword, 
    getUserProfile,
    updatePassword,
    updateProfile} = require('../controllers/authControllerSeller');

const { isAuthenticatedUser } = require('../middlewares/authSeller')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);



router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword)

router.route('/logout').get(logout);

router.route('/me').get(isAuthenticatedUser ,getUserProfile);
router.route('/password/update').put(isAuthenticatedUser ,updatePassword);
router.route('/me/update').put(isAuthenticatedUser ,updateProfile);


module.exports = router;