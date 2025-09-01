// let n1 = 1;
// for (let i = 1; i <= 10; i++) {
//   document.writeln(`<h4>${n1} x ${i} = ${n1 * i}</h4>`);
// }

// document.writeln("<h5>--------------------</h5>");

// let n2 = 4;
// for (let i = 1; i <= 10; i++) {
//   document.writeln(`<h4>${n2} x ${i} = ${n2 * i}</h4>`);
// }

//funksionet
function emri_funksiont() {
  //bosh
}

function me_parametra(a, b) {
  return a + b;
}

function tabela_shumezimit(n) {
  for (let i = 1; i <= 10; i++) {
    document.writeln(`<h4>${n} x ${i} = ${n * i}</h4>`);
  }
}

tabela_shumezimit(4);
tabela_shumezimit(8);
tabela_shumezimit(9);

function MsgSuccess(msg) {
  document.writeln(`<h1>${msg}</h1>`);
}

MsgSuccess("Sot eshte dita e pare e shkolles");
MsgSuccess("Te dhenat e juaja u ruajten me sukses");
MsgSuccess("Sot eshte dite me diell");

function SumNumbers(a, b) {
  return a + b;
}

SumNumbers(10, 5);
document.writeln(SumNumbers(10, 5, "+"));

function VeprimetAritmetike(a, b, operatori) {
  switch (operatori) {
    case "+":
      document.writeln(`<h2>Shume e nr ${a} + ${b} = ${a + b}</h2>`);
      break;

    case "-":
      document.writeln(`<h2>Zbritja e nr ${a} - ${b} = ${a - b}</h2>`);
      break;

    case "x":
      document.writeln(`<h2>Shumezimi i nr ${a} x ${b} = ${a * b}</h2>`);
      break;

    case "/":
      document.writeln(`<h2>Pjestimi i nr ${a} / ${b} = ${a / b}</h2>`);
      break;

    default:
      document.writeln("<h1>Gabim operatori</h1>");
      break;
  }
}

VeprimetAritmetike(9, 6, "+");
VeprimetAritmetike(9, 6, "-");
VeprimetAritmetike(9, 6, "x");
VeprimetAritmetike(9, 6, "/");

document.writeln("<table border='1'>");

for (let row = 0; row < 100; row++) {
  document.writeln("<tr>");

  for (let col = 0; col < 100; col++) {
    document.writeln("<td>Test</td>");
  }
  document.writeln("</tr>");
}

document.writeln("</table>");
