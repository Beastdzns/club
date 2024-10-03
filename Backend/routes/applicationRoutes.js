const express = require('express');
const router = express.Router();
const { submitApplication } = require('../controllers/applicationController'); 

router.post('/', submitApplication);

module.exports = router;
