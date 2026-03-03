import express from 'express';
import gameController from '../controllers/gameController.js';
const gameRoutes = express.Router()

// Na camada de routes é armazenado os ENDPOINTS (URLs) da API

// Endpoint para listar todoso os games
gameRoutes.get("/games", gameController.getAllGames)

gameRoutes.post("/games", gameController.createGame)

export default gameRoutes;