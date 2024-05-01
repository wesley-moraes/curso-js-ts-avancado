import User from '../models/User'

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body
        /*
        {
        nome: 'Luiz',
        email: 'mariacrz@hotmail.com',
        password: '123456'
        }
        */
      )
      return res.json({
        novoUser
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        erros: e.errors.map((err) => err.message)
      });
    }

  }

  //Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  //Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id); //Primary key
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  //Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }

      const user = await User.findByPk(req.params.id); //Primary key

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe']
        })
      }

      const novosDados = await user.update(req.body);

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message)
      });
    }
  }

  //Delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }

      const user = await User.findByPk(req.params.id); //Primary key

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe']
        })
      }

      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message)
      });
    }
  }
}

//Quando eu quero ter o objeto da classe, e não a classe instanciada eu já exporto ela instanciada
export default new UserController();
