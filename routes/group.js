
const express = require('express');
const router = express.Router();
const phoneBookGroup = require('../controllers/group')

router.post('/addGroup', phoneBookGroup.addGroup )
router.get('/getGroups', phoneBookGroup.getGroups )
module.exports = router;