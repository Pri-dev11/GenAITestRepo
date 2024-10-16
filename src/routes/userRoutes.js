const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth');
const { registerUser, loginUser, updateUserProfile } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/profile', protect, updateUserProfile);

module.exports = router;