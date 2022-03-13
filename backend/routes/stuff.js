const express = require('express');
const router = express.Router();
const stuffController = require('../controllers/stuff.controller.js')


router.post('/', stuffController.createThing);

router.get('/:id', stuffController.showOneThing);

router.put('/:id', stuffController.editThing);

router.delete('/:id', stuffController.deleteThing);

router.get('/' + '', stuffController.showAllThing);

module.exports = router;