const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/profile', auth, (req, res) => {
  res.json({ msg: "This is a protected profile route", userId: req.user });
});

module.exports = router;
