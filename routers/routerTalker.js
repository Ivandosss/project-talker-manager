const router = require('express').Router();

const getTalkers = require('../middlewares/getTalkers');

router.get('/', getTalkers);

module.exports = router;