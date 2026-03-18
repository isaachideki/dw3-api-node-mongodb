import express from "express";
//Importando o mongoose
import mongoose from "mongoose";
// Importando as rotas de games
import gameRoutes from "./routes/gameRoutes.js";
// Importando as rotas de usuarios
import userRoutes from "./routes/userRoutes.js";
const app = express();
//Importando o model
import Game from "./models/Games.js"
// Importando o model de usuariosex
import User from "./models/Users.js"
// Configurações do Express
app.use(express.json()) // Permite o uso do json na aplicação
app.use("/", gameRoutes)
app.use("/", userRoutes)
//Iniciando a conexão com o banco de dados MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games-novo")

// app.get("/", (req, res) => {
//   const games = [
//     {
//       title: "Game 1",
//       year: "2020",
//       platform: "PC",
//       price: 20
//     },
//     {
//       title: "Game 2",
//       year: "2024",
//       platform: "XBOX",
//       price: 30
//     },
//   ];
//   res.status(200).json(games);
// });

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}`);
  }
});
