import express from "express";
import mongoose from "mongoose";
import Game from "./models/Games.js";
import User from "./models/Users.js";
import gameRoutes from "./routes/gameRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();

app.use(express.json()); //Permite o uso de json na aplicação

//Ativando a utilização das rotas
app.use("/", gameRoutes);
app.use("/", userRoutes);

//Iniciando a conexão com o Banco de dados MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games-novo");

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
