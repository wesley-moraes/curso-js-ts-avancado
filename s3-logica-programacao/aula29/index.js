const data = new Date('1995-01-12 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto;


//eu posso substituir o break por return, porque quando chega no break, o código também para de executar
switch (diaSemana) {
    case 0:
        diaSemanaTexto = "Domingo";
        break;
    case 1:
        diaSemanaTexto = "Segunda";
        break;
    case 2:
        diaSemanaTexto = "Terça";
        break;
    case 3:
        diaSemanaTexto = "Quarta";
        break;
    case 4:
        diaSemanaTexto = "Quinta";
        break;
    case 5:
        diaSemanaTexto = "Sexta";
        break;
    case 6:
        diaSemanaTexto = "Sábado";
        break;

    default:
        diaSemana = '';
        break;
}

console.log(diaSemanaTexto);