var express = require('express');
var router = express.Router();
var productCtrl = require('../../controllers/products');

/* --------Product routes--------------- */
router.get('/', productCtrl.index);
router.get('/:id', productCtrl.show);
router.post('/', productCtrl.create);
router.delete('/:id', productCtrl.delete);
router.put('/:id', productCtrl.update);

/*---------- Protected Routes ----------*/


module.exports = router;