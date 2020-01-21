var express = require('express');
var router = express.Router();
var productsCtrl = require('../../controllers/api/products');

/* --------Product routes--------------- */
router.get('/', productsCtrl.index);
router.get('/:id', productsCtrl.show);
router.post('/', productsCtrl.create);
router.delete('/:id', productsCtrl.delete);
router.put('/:id', productsCtrl.update);

/*---------- Protected Routes ----------*/


module.exports = router;