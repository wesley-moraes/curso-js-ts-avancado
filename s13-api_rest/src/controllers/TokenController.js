import User from '../models/User'

class TokenController {
  async store(req, res) {

    const { email = "", password = "" } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais Inválidas'],
      });
    }

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    res.json('OK');
  }
}

//Quando eu quero ter o objeto da classe, e não a classe instanciada eu já exporto ela instanciada
export default new TokenController();
