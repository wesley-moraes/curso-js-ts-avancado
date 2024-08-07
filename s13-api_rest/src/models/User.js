import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs'

export default class User extends Model{
  static init(sequelize){
    super.init({
      nome: {
        type:  Sequelize.STRING,
        defaultValue: '',
        validate:{
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracters'
          }
        }
      },

      email: {
        type:  Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe'
        },
        validate:{
          isEmail: {
            msg: 'Email inválido'
          }
        }
      },
      password_hash: {
        type:  Sequelize.STRING,
        defaultValue: '',
      },

      password: {
        type:  Sequelize.VIRTUAL,
        defaultValue: '',
        validate:{
          len: {
            args: [3, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres'
          }
        }
      }, //Virtual = Ele não vai existir na base de dados

    },{
      sequelize
    });

    this.addHook('beforeSave', async user => {
      if(user.password){
        user.password_hash = await bcryptjs.hash(user.password, 8)
      }

    })

    return this;
  }

  passwordIsValid(password){
    return bcryptjs.compare(password, this.password_hash);
  }
}
