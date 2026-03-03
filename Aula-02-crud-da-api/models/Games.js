import mongoose from "mongoose";

const gamesSchema = new mongoose.Schema({
    title: String,
    plataform: String,
    year: Number,
    price: Number
});

const Game = mongoose.model('Game', gamesSchema)

export default Game;