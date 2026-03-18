import mongoose from "mongoose";
//O campo 'description' será um documento aninhado
const descriptionSchema= new mongoose.Schema({
    genre: String,
    platform: String,
    rating: String //Classificação de idade
})

const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions: descriptionSchema //Aninhado com sucesso!
    //descriptions: [descriptionSchema] Se precisasse ser um Array
})

const Game = mongoose.model('Game', gameSchema)

export default Game;