//Importando o service
import gameService from "../services/gameService.js";

//Função para tratar a requisição de Listar os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({ games: games })
        // Cod. 200 (ok) : Requisição feita com sucesso
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor. Não foi possível listar os jogos.' })
    }
}
// Função para tratar a requisição de Cadastrar um jogo
const createGame = async (req, res) => {
    try {
        //Desestruturação
        //const title
        //const plataform
        //COLETANDO OD DODOS DOCORPO DA REQUISIÇÃO
        const { title, platform, year, price } = req.body
        await gameService.Create(title, platform, year, price)
    //res.SendStatus(201) retorna apena o status, sem mensagem
        res.status(201).json({message: 'O Jogo foi cadastrado com sucesso'})
        // Cod 201 - CREATED - Um novo recurso foi criado no servidor.
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error interno do servidor. Não foi possível cadastrar o jogo,' })
    }
}
export default { getAllGames, createGame }