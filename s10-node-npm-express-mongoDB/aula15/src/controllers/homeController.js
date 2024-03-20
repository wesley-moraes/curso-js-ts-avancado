
//const HomeModel = require('../models/HomeModel');

/*
HomeModel.create({
    titulo: 'Um titulo de testes',
    descricao: 'Uma descrição de testes.'
})
*/
/*
HomeModel.find()
.then(dados => console.log(dados))
.catch(e => console.log(e));
*/

//exports.paginaInicial = (req, res, next) => {
exports.paginaInicial = (req, res) => {
    
    /*
    //Um recuso utilizado - hoje usam mais o react! Mas este é um recurso do JS
    req.flash('info', 'Olá mundo!');
    req.flash('error', 'Erro!');
    req.flash('success', 'Olá mundo!');
    */

    //Cria uma sessão! Um cookie
    //req.session.usuario = {nome: 'Luiz', logado: true}
    //console.log(req.session.usuario);
    console.log('passei aqui')


    //console.log('respondenvo ao cliente');
    /*
    res.send(`
        <form action="/" method="POST">
            Nome do Cliente: <input type="text" name="nome"> <br>
            Outro Campo: <input type="text" name="outroCampo" /> <br>
            <button>Enviar Form</button>
        </form>
    `);
    */
   res.render('index');
   return;
   //next();
}


//exports.trataPost = (req, res, next) =>{
exports.trataPost = (req, res) =>{
    //res.send('Nova Rota de Post');
    res.send(req.body);
    return;
}