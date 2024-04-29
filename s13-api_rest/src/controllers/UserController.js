import User from '../models/User'

class UserController {
  async store(req, res) {
    const novoUser = await User.create({
      nome: 'Luiz',
      email: 'mariacrz@hotmail.com',
      password: '123456'
    })
    res.json({
      novoUser
    });
  }
}

//Quando eu quero ter o objeto da classe, e não a classe instanciada eu já exporto ela instanciada
export default new UserController();
