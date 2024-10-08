import { Router } from "express";
import { addNewCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "../controllers/categories";

const categoryRouter = Router();
categoryRouter.get('/categories',getAllCategories);
categoryRouter.get('/categories/:id',getCategoryById);
categoryRouter.post('/categories',addNewCategory);
categoryRouter.put('/categories/:id',updateCategory);
categoryRouter.delete('/categories/:id',deleteCategory);
export default categoryRouter;