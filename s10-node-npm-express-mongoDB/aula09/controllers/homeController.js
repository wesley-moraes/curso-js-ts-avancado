

exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do Cliente: <input type="text" name="nome"> <br>
            Outro Campo: <input type="text" name="outroCampo" /> <br>
            <button>Enviar Form</button>
        </form>
    `);
}

exports.trataPost = (req, res) =>{
    res.send('Nova Rota de Post');
}