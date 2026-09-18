// src/routes/userRouter.js (or .ts)
import { Router } from 'express';
import { getUserDetails } from '../controllers/userController.js';
import { privateRoute } from '../middlewares/authMiddleware.js'

const userRouter = Router();
userRouter.get('/me', privateRoute,getUserDetails)
export default userRouter;