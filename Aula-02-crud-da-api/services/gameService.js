// Importando o Model
import Game from "../models/Games.js"

class gameService {
    // Método (serviço) para buscar todos os reigstros no banco
    //funções asincronas são não bloqueantes        
    async getAll() {
        //try trata o sucesso
        try {
            // .find() -> é método do mongoose para buscar registros no banco
            const games = await Game.find()
            return games
            //catch trata a falha
        } catch (error) {
            console.log(error)
        }
    }
    //Método para cadastrar um game
    async Create(title, plataform, year, price) {
        try {
            const newGame = Game({
                // Desestruturação é voce não repetir os campos (title : title)
                title,
                plataform,
                year,
                price
            })
            // Gravando no Banco
            await newGame.save()
            // .save() método do Mongose para Cadastrar  no BD

        } catch (error) {
            console.log(error)
        }
    }
}
//Exportando a classe
export default new gameService()





