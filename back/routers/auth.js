import { Router } from "express";
import { addNewUser, getAllUsers, getUserById } from "../controllers/auth";

const authRouter=Router();
authRouter.get('/users',getAllUsers);
authRouter.get('/users/:id',getUserById);
authRouter.post('/users',addNewUser);
export default authRouter;