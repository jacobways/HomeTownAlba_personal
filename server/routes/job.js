const express = require('express')
const router = express.Router()
const jobController = require('../controllers/job')

router.post('/', jobController.post)
router.patch('/', jobController.patch)
router.get('/:companyId', jobController.get)
router.delete('/:id', jobController.delete)
router.delete('/', jobController.deleteAll)
router.get('/', jobController.getAll)

module.exports = router;