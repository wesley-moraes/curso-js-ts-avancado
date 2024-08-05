import Aluno from '../models/Aluno'

class HomeController{
  async index(req, res){

    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'mariacrz@hotmail.com',
      idade: 23,
      peso: 40,
      altura: 1.80
    });

    res.json({
      novoAluno
    });
  }
}

export default new HomeController();
