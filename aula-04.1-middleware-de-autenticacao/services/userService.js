import User from "../models/Users.js";

class userService{
    async Create(name,email,password){
        try{
            const newUser = new User({
                name,
                email,
                password
            })
            // .save utilizado para gravar os registros no BD
            await newUser.save();
        }catch(error){
            console.log(error);
        }
    }
    //método para buscar um usuário
    async getOne(email){
        try{
            //Método findOne() busca um registro no banco de dados
            const user = await User.findOne({email:email})
            return user;
        }catch(error){
            console.log(error);
        }
    }
}
//Para exportar classes basta usar a palavra new
export default new userService();