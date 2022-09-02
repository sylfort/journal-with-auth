const express = require('express')
const router = express.Router()
const EntriesController = require('../controllers/Entries')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, EntriesController.getEntries)

router.post('/createEntry', EntriesController.createEntry)

router.put('/markRead', EntriesController.markRead)

router.put('/markUnread', EntriesController.markUnread)

router.delete('/deleteEntry', EntriesController.deleteEntry)

module.exports = router