
const express = require('express');
const categoryRoutes = require('./userController');
const router = express.Router();

router.use('/user-api', categoryRoutes);
module.exports = router;