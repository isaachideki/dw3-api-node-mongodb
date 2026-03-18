// Importando o service
import userService from "../services/userService.js";

// Função para CADASTRAR um usuario
const createUser = async(req,res) => {
    try{
        //Coletando dados
        const {name, email, password} = req.body;
        await userService.Create(name,email,password)
        //Enviando para cadastrar
        res.status(201).json({message: 'Usuario cadastrado com sucesso!'})
        //Cod 201 (CREATED)
    } catch(error){
        console.log(error)
        res.status(500).json({error: 'Não foi possivel cadastrar o usuário. Erro interno do servidor.'})
    }
}

export default {createUser}