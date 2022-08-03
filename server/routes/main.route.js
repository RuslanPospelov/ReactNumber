const router = require('express').Router();

// маршрутизация главной страницы
router.route('/')
.get((req, res) => {
  res.send('Hello')
});

module.exports = router;
