exports.paginaInicial = (req, res) => {
    console.log('passei aqui')

    res.render('index', {
        titulo: 'Este é um <spa style="color: red"> título',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   });
   return;
}

exports.trataPost = (req, res) =>{
    res.send(req.body);
    return;
}