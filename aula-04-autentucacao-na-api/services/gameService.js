import Game from "../models/Games.js";

//todos os métodos devem estar dentro dessa primeira chave da Classe
class gameService {
  //Da pra colocar qualquer nome para a função, bom relembrar porque pensei ser uma palavra reservada
  //Funções assíncronas são não bloqueantes
  async getAll() {
    try {
      //trata o sucesso
      //.Find() é o método do Mongoose para buscar registros no banco
      const games = await Game.find();
      return games;
    } catch (error) {
      //Trata a falha
      console.log(error);
    }
  }
  //Cadastrar game
  async Create(title,descriptions,year,price){
    try{
      const newGame= new Game({
        //Desestruturação (title : title)
        title,
        descriptions,
        year,
        price
      })
      //Gravando no banco
      await newGame.save(); // .save() é um método do mongoose para cadastrar no BD
    }catch(error){
      console.log(error);
    }
  }
  //Exlcuir Game
  async Delete(id){
    try{
      await Game.findByIdAndDelete(id) //Método do Mongoose que seleciona o game e o deleta, ambos de uma só vez
      console.log(`Game com a id: ${id} foi deletado`)
    }catch(error){
      console.log(error)
    }
  }

  async Update(id,title,year,descriptions,price){
    try{
      const updatedGame= await Game.findByIdAndUpdate(id,{
        title,
        year,
        descriptions,
        price
      },{new:true}//Retorna o objeto anterior
      )
      console.log(`O jogo com a id ${id} foi alterado.`)
      return updatedGame;
    }catch(error){
      console.log(error)
    }
  }

  async getOne(id){
    try{
      const game= await Game.findOne({_id:id})
      return game
    }catch(error){
      console.log(error)
    }
  }
}



//Para exportar uma classe é necessário o 'new' após do default
export default new gameService();
