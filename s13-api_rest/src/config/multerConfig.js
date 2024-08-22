import multer from 'multer';
import {extname, resolve} from 'path';

const aleatorio = () =>{
  return Math.floor(Math.random() * 10000 + 10000);
}

export default {

  fileFilter: (req, file, cb)=>{
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){
      return cb(new multer.MulterError('Arquivo precisa ser PGN ou JPEG'))
    }

    return cb(null, true); //null = não há erros, true = pode continuar seguindo
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images')); //O caminho onde salva o arquivo
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`)
    } //O nome do arquivo
  })


};
