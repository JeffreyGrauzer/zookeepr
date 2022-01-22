const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
router.use(require('./zooKeeperRoutes'));
router.use(animalRoutes);
module.exports = router;