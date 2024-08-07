import User from '../models/User';
import jwt from 'jsonwebtoken'

class TokenController{
  async store(req, res){

    const {email = '', password = ''} = req.body;

    if(!email || !password){
      return res.status(401).json({
        errors: ['Credenciais Inválidas'],
      });
    }; //Se o usuario nao informar nada, já retorna

    const user = await User.findOne({where: {email}}); //where: {email : email}

    if(!user){
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    };

    console.log(email, password);

    if(!(await user.passwordIsValid(password))){
      return res.status(401).json({
        errors: ['Senha Inválida'],
      });
    }

    const {id} = user;
    const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });

    return res.json({token});
  }
}

export default new TokenController();
