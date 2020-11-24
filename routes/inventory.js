const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

router.get('/', inventoryController.loadInventory);
router.get('/:id', inventoryController.getSingleCar)
router.put('/changeFavourite/:id', inventoryController.updateFavouriteCar)
router.put('/changeFavourites', inventoryController.updateFavouriteCars)

module.exports = router;
