const router = require('express').Router();
// middlewares
const getTalkers = require('../middlewares/getTalkers');
const getTalkerId = require('../middlewares/getTalkerId');
const ageValidation = require('../middlewares/ageValidation');
const { talkerValidation, fieldTalkerValidation } = require('../middlewares/talkerValidation');
const nameValidation = require('../middlewares/nameValidation');
const insertTalker = require('../middlewares/insertTalker');
const updateTalker = require('../middlewares/upDateTalker');
const tokenValidation = require('../middlewares/tokenValidation');
const deleteTalker = require('../middlewares/deleteTalker');

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
router.delete('/:id', tokenValidation, deleteTalker);

module.exports = router;