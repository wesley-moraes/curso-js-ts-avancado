import Aluno from '../models/Aluno'
import Foto from '../models/Foto'

class AlunoController{
  async index(req, res){
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include:{
        model: Foto,
        attributes: ['filename']
      }
    })
    res.json(alunos);
  }

  async store(req, res){
    try{
      const aluno = await Aluno.create(req.body);

      res.json(aluno);
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }


  }

  async show(req, res){
    try{
      const {id} = req.params;
      if(!id){
        return res.status(400).json({
          errors: ['Faltando ID']
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include:{
          model: Foto,
          attributes: ['filename']
        }
      });
      if(!aluno){
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }

      res.json(aluno);

    }catch(e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async delete(req, res){
    try{
      const {id} = req.params;
      console.log('o id do aluno:' , id)
      if(!id){
        return res.status(400).json({
          errors: ['Faltando ID']
        });
      }

      const aluno = await Aluno.findByPk(id);
      console.log('Dados do aluno', aluno)
      if(!aluno){
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }

      await aluno.destroy();
      res.json({
        "apagado" : true
      })

    }catch(e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async update(req, res){
    try{
      const {id} = req.params;
      if(!id){
        return res.status(400).json({
          errors: ['Faltando ID']
        });
      }

      const aluno = await Aluno.findByPk(id);
      if(!aluno){
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      res.json(alunoAtualizado);

    }catch(e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

export default new AlunoController();
