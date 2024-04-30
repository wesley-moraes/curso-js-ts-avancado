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
      res.json({
        novoUser
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({
        erros: e.errors.map((err) => err.message)
      });
    }

  }
}

//Quando eu quero ter o objeto da classe, e não a classe instanciada eu já exporto ela instanciada
export default new UserController();
