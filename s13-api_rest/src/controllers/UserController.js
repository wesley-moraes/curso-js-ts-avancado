import User from '../models/User'

class UserController{
  async store(req, res){
    try{
    const novoUser = await User.create(
    /*
      {
      nome: 'Maria',
      email: 'mariacrz@hotmail.com',
      password: '123456',
    }
    */
      req.body
    );
    res.json(novoUser);

    }catch(e){
      console.log(e)
      //res.status(400).json('Deu um erro')
      res.status(400).json(
        {erros: e.errors.map((err) => err.message)}
      );
    };
  }
}

export default new UserController();
