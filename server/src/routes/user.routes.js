import express from "express";
import userCtrl from '../controllers/user.controller';

const router = express.Router();

router.route('/api/users')
    .get(userCtrl.list)
    .post(userCtrl.create);

    // this route is now protected with authentication & authorization - authCtrl
router.route('/api/users/:userId')
    .get(userCtrl.read )
    .put(userCtrl.update)
    .delete(userCtrl.remove);

router.param('userId', userCtrl.userById);

export default router;