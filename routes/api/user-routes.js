const router = require('express').Router();
const {
  getAllUsers,
  getOneUser,
  createOneUser,
  updateOneUser,
  deleteOneUser,
  addOneFriend,
  removeOneFriend,
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createOneUser);

router.route('/:userId').get(getOneUser).put(updateOneUser).delete(deleteOneUser);

router.route('/:userId/friends/:friendId').post(addOneFriend).delete(removeOneFriend);

module.exports = router;