const express = require('express');
const router = express.Router();

const examplesController = require('../controllers/examplesController');

router.get('/', examplesController.find);
router.post('/', examplesController.save);
// router.put('/', examplesController.put);
// router.delete('/', examplesController.delete);

module.exports = router;
