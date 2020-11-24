const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/', usersController.logInByJwtToken)
router.post('/', usersController.login);
router.post('/register', usersController.signUp);
router.post('/changePassword', usersController.changePassword);

module.exports = router;
