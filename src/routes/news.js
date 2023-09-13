const express = require('express');
const router = express.Router()

const newsController = require('../app/controllers/Newcontroller')


router.use('/', newsController.index)


module.exports = router;