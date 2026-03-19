// Import o express
import express from 'express';
//Carregar o express.Router()
const userRoutes = express.Router();
// importando o constroller de usuários
import userController from '../controllers/userController.js';
import { model } from 'mongoose';
//Endpoint para  CADASTRAR um usuario
userRoutes.post("/user", userController.createUser)

//endpoint para logar um usuario
userRoutes.post("/auth", userController)

export default userRoutes