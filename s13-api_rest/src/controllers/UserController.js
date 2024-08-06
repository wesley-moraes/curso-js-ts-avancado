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
    return res.json(novoUser);

    }catch(e){
      console.log(e)
      //res.status(400).json('Deu um erro')
      return res.status(400).json(
        {errors: e.errors.map((err) => err.message)}
      );
    };
  }

  //Index
  async index(req, res){
    try{
      const users = await User.findAll();
      return res.json(users);
    }catch(e){
      return res.json(null);
    }
  }


  //Show
  async show(req, res){
    try{
      //const {id} = req.params;
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    }catch(e){
      return res.json(null);
    }
  }


  //Update
  async update(req, res){
    try{
      //const {id} = req.params;
      if(!req.params.id){
        return res.status(400).json({
          errors: ['ID não enviado.'],
        })
      }
      const user = await User.findByPk(req.params.id);

      if(!user){
        return res.status(400).json({
          errors: ['Usuário não existe']
        })
      }

      const novosDados = await user.update(req.body)

      return res.json(novosDados);
    }catch(e){
      console.log(e)
      //res.status(400).json('Deu um erro')
      return res.status(400).json(
        {erros: e.errors.map((err) => err.message)}
      );
    }
  }
  //Delete
  async delete(req, res){
    try{
      //const {id} = req.params;
      if(!req.params.id){
        return res.status(400).json({
          errors: ['ID não enviado.'],
        })
      }
      const user = await User.findByPk(req.params.id);

      if(!user){
        return res.status(400).json({
          errors: ['Usuário não existe']
        })
      }

      await user.destroy();

      return res.json(user);
    }catch(e){
      console.log(e)
      //res.status(400).json('Deu um erro')
      return res.status(400).json(
        {errors: e.errors.map((err) => err.message)}
      );
    }
  }

  /**
 * index -> Lista todos os usuários -> GET
 * store/create -> cria um novo usuário -> POST
 * delete -> Apaga um usuário -> DELETE
 * show -> mostra um usuário -> GET
 * update -> atualiza um usuário -> PATCH ou PUT
 */

}

export default new UserController();
