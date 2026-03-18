// Importando o services
import gameService from '../services/gameService.js';
import gamesService from '../services/gameService.js';
import { ObjectId } from 'mongodb';

// Função para tratar a requisição de listar os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gamesService.getAll()
        res.status(200).json(games)
        // Cod. 200 (ok) : Requisição feita com sucesso
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro interno do servidor. Não foi possível listar os jogos.' })
        // Cod. 500 (erro interno) : Erro no servidor

    }
}

// Função para tratar a requisição de cadastrar um jogo
const createGame = async (req, res) => {
    try {
        // Desestruturação
        // const title = req.body.title
        // const plataform = req.body.plataform
        const { title, plataform, year, price } = req.body // coletando os dados do corpo da requisição
        // Passando os dados para o service
        await gamesService.create(title, plataform, year, price)
        res.status(201).json({ message: 'Jogo cadastrado com sucesso!' })
        // Cod. 201 (created) um novo recurso foi criado no servidor.
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro interno do servidor. Não foi possível cadastrar o jogo.' })
    }
}

// Função para deletar um jogo
const deleteGame = async (req, res) => {
    try {
        // coletando a id
        const id = req.params.id
        // validação do id
        if (ObjectId.isValid(id)) {
            await gamesService.Delete(id)
            res.status(204).json({ message: `O jogo foi excluído com sucesso!` })
            // cod. 204 (No Content) : A requisição foi bem sucedida, mas não há conteúdo para enviar na resposta.
        } else {
            res.status(400).json({ message: 'Ocorreu um erro na validação da id' })
        }
        res.status(200).json({ message: `Jogo com id ${id} excluído com sucesso!` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro interno do servidor. Não foi possível excluir o jogo.' })
    }
}

// Função para alterar um jogo
const updateGame = async (req, res) => {
    try {
        const id = req.params.id
        if (ObjectId.isValid(id)) {
            const { title, plataform, year, price } = req.body
            const game = await gamesService.Update(id, title, plataform, year, price)
            res.status(200).json({ message: 'Jogo alterado com sucesso!', game: game })
        } else {
            res.status(400).json({ message: 'Ocorreu um erro na validação da id' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro interno do servidor. Não foi possível alterar o jogo.' })
    }
  
}
  //FUNÇÃO PARA BUSCAR UM JOGO ÚNICO
    const getOneGame = async (req, res) => {
        try {
            const id = req.params.id
            if (ObjectId.isValid(id)) {
                const game = await gameService.getOne(id)
                //Verificando se o jogo foi encontrado
                if (!game) { //Se o jogo não existir  (! = NOT)
                    res.status(404).json({ message: 'O jogo buscado não foi encontrado' })
                } else {
                    res.status(200).json({ game })
                }
                //SE A ID FOR INVÁLIDA
            } else {
                res.status(400).json({ error: 'A ID informada é invalida' })

            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro interno do servidor.' })
        }
    }

export default { getAllGames, createGame, deleteGame, updateGame, getOneGame }