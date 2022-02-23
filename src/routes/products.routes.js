import {Router} from 'express'
const router = Router()

import * as ProductsCtrl from '../controllers/products.controller'

router.post('/', ProductsCtrl.createProducts)

router.get('/', ProductsCtrl.getProducts)

router.get('/:productId', ProductsCtrl.getProductsById)

router.put('/:productId', ProductsCtrl.updateProductsById)

router.delete('/:productId', ProductsCtrl.deleteProductsById)

export default router;

