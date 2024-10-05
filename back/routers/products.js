import { Router } from  "express";
import { addNewProducts,deleteProduct,getAllProducts, getProductById, updateProduct } from "../controllers/products";
const productRouter=Router();
productRouter.get('/products',getAllProducts);
productRouter.post('/products',addNewProducts);
productRouter.get('/products/:id',getProductById);
productRouter.put("/products/:id", updateProduct);
productRouter.delete("/products/:id", deleteProduct);
export default productRouter;