module.exports = (req, res, next) =>{
    console.log();
    console.log('Trabalhando com Middlewres globais');
    console.log();

    next();
}