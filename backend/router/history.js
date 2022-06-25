const router = require('express').Router();
const HistoryBemor = require('../controllers/HistoryBemor')

router.post('/create', HistoryBemor.create);
router.get('/all', HistoryBemor.getAll);
router.get('/:id', HistoryBemor.getOne);

router.delete('/:id', HistoryBemor.delete);

module.exports = router;