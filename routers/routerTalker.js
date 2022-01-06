const router = require('express').Router();
// middlewares
const getTalkers = require('../middlewares/getTalkers');
const getTalkerId = require('../middlewares/getTalkerId');
const ageValidation = require('../middlewares/ageValidation');
const { talkerValidation, fieldTalkerValidation } = require('../middlewares/talkerValidation');
const nameValidation = require('../middlewares/nameValidation');
const insertTalker = require('../middlewares/insertTalker');

router.get('/', getTalkers);
router.get('/:id', getTalkerId);
router.post('/');
router.post(
  '/', 
  talkerValidation, 
  ageValidation, 
  fieldTalkerValidation, 
  nameValidation, 
  insertTalker,
);

module.exports = router;