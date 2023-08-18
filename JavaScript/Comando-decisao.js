function maior1(a, b) {
  if (a > b) {
    return a;
  }
}

function maior2(a, b) {
  var r = a > b ? a : b;
  return r;
}

function formatames(mes) {
  switch (mes) {
    case 1:
      return "Janeiro";
    case 2:
      return "Fevereiro";
    case 3:
      return "Março";
    case 4:
      return "Abril";
    default:
      return "Não implementei ainda";
  }
}

const result1 = maior1(4, 3);
const result2 = maior1(3, 4);
const result3 = maior2(6, 8);

const result4 = formatames(3);

console.log("resultado = 4", result1);
console.log("resultado = undefined", result2);
console.log("resultado = 8", result3);
console.log("resultado = Março", result4);
