import express from "express";
import gameController from "../controllers/gameController.js";
const gameRoutes = express.Router();
import Auth from "../middleware/Auth.js";
//Importando o middleware de autenticação

//Na camada de routes é armazenado os endpoints (URLs da API)

//Endpoint para listar todos os games
gameRoutes.get("/games", Auth.Authorization, gameController.getAllGames);
//Endpoint para cadastrar um Game
gameRoutes.post("/games", Auth.Authorization,gameController.createGame);
//Endpoint para deletar um game
gameRoutes.delete("/games/:id", Auth.Authorization,gameController.deleteGame);
//Endpoint para editar um game
gameRoutes.put("/games/:id", Auth.Authorization,gameController.updateGame);

gameRoutes.get("/games/:id", Auth.Authorization,gameController.getOneGame);

export default gameRoutes;
