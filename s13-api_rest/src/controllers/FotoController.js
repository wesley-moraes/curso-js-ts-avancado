import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController{
  store(req, res){

    return upload(req, res, async (err)=> {

      if(err){
        return res.status(400).json({
          errors: [err]
        })
      }

      const {originalname, filename} = req.file;
      const {aluno_id} = req.body; //Para associar o id
      const foto = await Foto.create({originalname, filename, aluno_id});

      res.json(req.file)
    });
  }
}

export default new FotoController();
