import { Router } from  "express";
import getAllProducts from "../controllers/products";
const productRouter=Router();
productRouter.get('/products',getAllProducts);
export default productRouter;