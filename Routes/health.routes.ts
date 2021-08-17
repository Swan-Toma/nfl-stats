import express from 'express';
const healthConrollers = require('../Controllers/health.controllers');
const router = express.Router();

router.get('/', healthConrollers);

module.exports = router;