const mongoose = require('mongoose');
const homeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: String
});

const HomeModel = mongoose.model('Home', homeSchema);

//module.exports = HomeModel;

class Home{

}

module.exports = Home;