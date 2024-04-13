import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Otavio',
      email: 'mariacrz@hotmail.com',
      idade: 23,
      peso: 70,
      altura: 1.8
    })
    res.json({
      novoAluno
    });
  }
}

//Quando eu quero ter o objeto da classe, e não a classe instanciada eu já exporto ela instanciada
export default new HomeController();
