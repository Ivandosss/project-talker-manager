const router = require('express').Router();
// middlewares
const getTalkers = require('../middlewares/getTalkers');
const getTalkerId = require('../middlewares/getTalkerId');

router.get('/', getTalkers);
router.get('/:id', getTalkerId);
router.post('/');

module.exports = router;