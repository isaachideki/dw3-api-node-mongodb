import express from 'express'
import userController from '../controllers/userController.js';
const userRoutes = express.Router();

//Endpoint para cadastrar um usuário
userRoutes.post("/user", userController.createUser)
//Endpoint para logar
userRoutes.post("/auth", userController.loginUser)

export default userRoutes