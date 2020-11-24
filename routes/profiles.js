const moment = require('moment');
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: 'public/avatar',
  filename: function (req, file, cb) {
    const fileformat = file.originalname.split('.');
    cb(null, `${moment().format('YYYY-MM-DD-HH-mm-ss')}.${fileformat[fileformat.length - 1]}`);
    // cb(null, file.originalname);
  }
})
const upload = multer({ storage });
const express = require('express');
const router = express.Router();

const profilesController = require('../controllers/profilesController');

router.post('/upload', upload.single('avatar'), profilesController.upload)
router.get('/', profilesController.findProfiles)
router.post('/', profilesController.updateProfiles);

module.exports = router;
