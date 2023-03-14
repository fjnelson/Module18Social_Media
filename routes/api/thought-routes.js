const router = require('express').Router();
const {
  getAllThoughts,
  getOneThought,
  createOneThought,
  updateOneThought,
  deleteOneThought,
  addOneThought,
  removeOneReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(createOneThought);

router.route('/:thoughtId').get(getOneThought).put(updateOneThought).delete(deleteOneThought);

router.route('/:thoughtId/reactions').post(addOneThought);

router.route('/:thoughtId/reactions/:reactionId').delete(removeOneReaction);

module.exports = router;