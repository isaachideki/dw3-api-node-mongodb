import jwt from 'jsonwebtoken'
import userController from '../controllers/userController.js'

//Função para verificar a autenticação do usuário
//Verificar se ele possui um token
const Authorization=(req,res,next)=>{
    //Capturar o token
    const authToken= req.headers['authorization']
    //Verificando se o Token existe
    if(authToken != undefined){
        //todo token vem com uma palavra adicionada, para pegar o token de fato cortamos o espaço entre a palavra bearer e o token original, para tornar em um vetor de duas partes
        //Uma em que há a palavra e a outra em que há o token de fato.
        //bearer é o token ao portador, em que é necessário ao usuário porta-lo para ter acesso ao sistema e mantê-lo para continuar tendo acesso
        const bearerToken = authToken.split(' ')
        const token= bearerToken[1]
        jwt.verify(token,userController.JWTSecret,(error,data)=>{
            if(error){
                //401 não autorizado
                res.status(401).json({error: "Acesso não autorizado. Token inválido."})
            }else{
                //Se o token é válido
                req.token= token
                req.loggedUser={
                    id: data.id,
                    email: data.email
                }
                //Prosseguindo com a requisição
                next()
            }
        })
    }else{
        //Se o token não existir
        res.status(401).json({error:"Acesso não autorizado, você não está autenticado."})
    }
}

export default {Authorization}