var agora = new Date();
var diaSem = agora.getDay();
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sábado
*/

switch (diaSem) {
  case 0:
    console.log(`Domingo`);
    break;
  case 1:
    console.log(`Segunda`);
    break;
  case 2:
    console.log(`Terça`);
    break;
  case 3:
    console.log(`Quarta`);
    break;
  case 4:
    console.log(`Quinta`);
    break;
  case 5:
    console.log(`Sexta`);
    break;
  case 6:
    console.log(`Sábado`);
    break;
}

