import jwt from 'jsonwebtoken'
import User from '../models/User';

export default async (req, res, next) => {

  const {authorization} = req.headers;

  if(!authorization){
    return res.status(401).json({
      errors: ['Login required'],

    });
  }

  const [, token] = authorization.split(' ');
  try{
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const {id, email} = dados;

    const user = await User.findOne({where:{
      id,
      email
    }}); //Isto é uma verificacao quando é realizado um update no email
    //Verifica se o Id e email sao do mesmo usuario
    //Verifica apenas o email. Pode continuar alterando todos os outros dados
    if(!user){
      return res.status(401).json({
        errors: ['Usuário Inválido - Login Required']
      });
    } //Força o usuario a gerar um novo token

    req.userId = id;
    req.userEmail = email;

    return next();
  }catch(e){
      return res.status(401).json({
      errors: ['Token expirado ou inválido'],

    });
  }

}
