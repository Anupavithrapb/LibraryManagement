const express = require('express');
const { loginAdmin } = require('../Controller/Admincontroller');
const router = express.Router();


router.post('/login', loginAdmin);

module.exports = router;
