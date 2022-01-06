const router = require('express').Router();
// middlewares
const getTalkers = require('../middlewares/getTalkers');
const getTalkerId = require('../middlewares/getTalkerId');
const ageValidation = require('../middlewares/ageValidation');
const { talkerValidation, fieldTalkerValidation } = require('../middlewares/talkerValidation');
const nameValidation = require('../middlewares/nameValidation');
const insertTalker = require('../middlewares/insertTalker');
const updateTalker = require('../middlewares/upDateTalker');

router.get('/', getTalkers);
router.get('/:id', getTalkerId);
router.post(
  '/', 
  talkerValidation, 
  ageValidation, 
  fieldTalkerValidation, 
  nameValidation, 
  insertTalker,
);
router.put(
  '/:id', 
  talkerValidation, 
  ageValidation, 
  fieldTalkerValidation, 
  nameValidation, 
  updateTalker,
);

module.exports = router;