// Model de Usuários
// Importando o mongose
import mongoose from "mongoose";
import mongose from "mongoose";

const userSchema = new mongose.Schema({
    name: String,
    email: String,
    password: String,
})

const User = mongoose.model("User", userSchema);

export default User;