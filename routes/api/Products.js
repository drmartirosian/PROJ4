const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/products');

/*---------- Public Routes ----------*/
router.get('/', productsCtrl.index);
router.get('/:id', productsCtrl.details);
router.put('/:id', productsCtrl.update);
router.delete('/:id', productsCtrl.delete);
router.post('/', productsCtrl.create);


/*---------- Protected Routes ----------*/




module.exports = router;