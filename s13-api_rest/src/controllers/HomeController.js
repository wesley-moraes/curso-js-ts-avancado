class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true
    });
  }
}

//Quando eu quero ter o objeto da classe, e não a classe instanciada eu já exporto ela instanciada
export default new HomeController();
