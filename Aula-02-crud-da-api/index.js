import express from "express";
//Importando o mongoose
import mongoose from "mongoose";
import gameRoutes from "./routes/gameRoutes.js";
const app = express();
//Importando o model
import Game from "./models/Games.js"
// Importando o model de usuarios
import User from "./models/Users.js"
// Configurações do Express
app.use(express.json()) // Permite o uso do json na aplicação
app.use("/", gameRoutes)
//Iniciando a conexão com o banco de dados MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games")

app.get("/", (req,res) => {
    const games = [
        {
            title: "Game 1",
            plataform:"PC",
            price: 20,
            year: 2020
        },
        {
            title: "Game 2",
            plataform:"XBOX",
            price: 30,
            year: 2024
        }
    ]
    res.json(games)
});                                      
//Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) =>{
    if (error) {
        console.log(error)
    } else {
        console.log(`API rodando em http://localhost:${port}`)
    }
})
 