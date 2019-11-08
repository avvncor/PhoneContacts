const express = require('express');
const router = express.Router();
const groupMembers = require('../controllers/members')

router.post('/addMember', groupMembers.addMember)
router.get('/getMembers/:groupId', groupMembers.getMembers)
module.exports = router;