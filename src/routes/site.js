const express = require('express');
const router = express.Router();

// để chứa các page chính

const siteController = require('../app/controllers/Sitecontrollder');

router.use('/search', siteController.search);
router.use('/', siteController.home);

module.exports = router;
