//Importando o service
import userService from "../services/userService.js";
//Importando o JWT
import jwt from 'jsonwebtoken';
//segredo para gerar o token da api
const JWTSecret = 'thegames - secret'

//Função para CADASTRAR um usuario
const createUser = async(req, res) => {
    try{
        //coletando os dados
        const{ name, email, password} = req.body;
        //enviando para cadastrar
        await userService.Create(name, email, password);
        //retornando um resposta
        res.status(201).json({message: 'usuario cadastro com sucesso!'})
        //cod 201 (created)
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: 'Não foi possivel cadastrar o usuario. erro interno do servidor'})
    }
}


// Função para AUTENTICAR um usuario (Função de login)
const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body
        //Se o email existe
        if (email != undefined){
            //Busscando o usuario no banco
            const user = await userService.getOne(email)
            //Se o usuario for encontrado 
            if (user != undefined){
                //verificando se a senha esta certa
                if(user.password == password){
                    //criando o TOKEN
                    jwt.sign({id: user._id, email: user.email }, JWTSecret, { expiresIn: '48h'}, (error, token) => {
                        if (error){
                            //falha
                            res.status(400).json({error: "Não deu certo"})
                        }
                        //sucesso
                        else {
                            res.status(200).json({ message: 'Login realizado com sucesso',token : token})
                        }
                    })
                        
                }
            }
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: 'Não foi possivel realizar o login. erro interno do servidor'})
    }
}



export default {createUser, loginUser}