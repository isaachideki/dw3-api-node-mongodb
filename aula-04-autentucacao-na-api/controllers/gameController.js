import gameService from "../services/gameService.js";
import { ObjectId } from 'mongodb'

//Função para tratar a requisição de listar os jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    res.status(200).json({ games: games });
    //RRRAAAAAEEEE *Klank Klank* muitos nomes iguais
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor. Não foi possível listar os jogos." });
  }
};

//Função para tratar a requisição de Cadastrar o jogo
const createGame = async (req, res) => {
  try {
    const {title,descriptions,year,price} = req.body //Coletando os dados do corpo da requisição
    //Passando os dados para o Service
    await gameService.Create(title,descriptions,year,price)
    res.status(201).json("O jogo foi cadastrado com sucesso!")
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor. Não foi possível cadastrar o jogo." });
  }
};

//Função para deletar um jogo
const deleteGame= async(req,res)=>{
  try{
    //Coletando a id
    const id=req.params.id;
    //Validação do id 
    if(ObjectId.isValid(id)){
    await gameService.Delete(id)
    res.status(204).json({ message: "Jogo excluído com sucesso." });
  }else{
    res.status(400).json({ error: "Id inválido." });
  }
}catch(error){
  console.log(error)
  res.status(500).json({ error: "Erro interno do servidor." });
}
}

const updateGame = async(req,res)=>{
  try{
    const id= req.params.id;
    if(ObjectId.isValid(id)){
      const {title,year,descriptions,price} = req.body;
      const game= await gameService.Update(id,title,year,descriptions,price);
      res.status(200).json({message: "Jogo atualizado com sucesso!",game:game})
    } else{
      res.status(400).json({ error: "Ocorreu um erro na validação da Id." });
    }
  }catch(error){
    console.log(error)
    res.status(500).json({ error: "Erro interno do servidor." });
  }
}

const getOneGame = async(req,res)=>{
  try{
    const id = req.params.id;
    if(ObjectId.isValid(id)){
      const game= await gameService.getOne(id)
      if(!game){
        res.status(404).json({message: 'O jogo buscado não foi encontrado'})
      }else{
        res.status(200).json({game})
      }
    }else{
      res.status(400).json({error: 'A id informada é inválida.'})
    }
  }catch(error){
    console.log(error)
    res.status(500).json({error: 'Erro interno do sevidor'})
  }
}

export default { getAllGames, createGame, deleteGame, updateGame, getOneGame};
