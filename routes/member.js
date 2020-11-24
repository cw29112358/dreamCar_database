const express = require('express');
const memberController = require('../controllers/memberController');

const router = express.Router();

router.get('/:id', memberController.findMember);
router.post('/', memberController.joinMember);

module.exports = router;
