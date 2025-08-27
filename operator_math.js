let a = 5,
  b = 8;

document.writeln("Mbledhja e llog: a + b = " + (a + b) + "<br>");
document.writeln("Zbrijta e llog: a - b = " + (a - b) + "<br>");
document.writeln("Shumezimi i llog: a x b = " + a * b + "<br>");
document.writeln("Pjestimi i llog: a / b = " + a / b + "<br>");
document.writeln("Eksponenti i llog: a^3 = " + a ** 3 + "<br>");
document.writeln("Moduli i llog: a%b = " + (b % a) + "<br>");
document.writeln("Inkrementi(prefiks): ++a = " + ++a + "<br>");
document.writeln("Inkrementi(postfiks): a++ = " + a++ + " => " + a + "<br>");
document.writeln("Dekrementi(prefiks): --a = " + --a + "<br>");
document.writeln("Dekrementi(postfiks): a-- = " + a-- + " => " + a + "<br>");

//Shembulli 1

let x = 3,
  y = 4,
  z = 5;

let vl_mes = (x + y + z) / 3;

document.writeln("<h3>Vlera mes: " + vl_mes + "</h3>");

//Operatoret per ndarje te vleres(form te shkurtera)

let j = 10;

// j = j + 100  <=>  j+=100;

j += 100;
j *= 3;

//Operatoret krahasimore

let f = 4,
  l = "4";

document.writeln("<h4> f==l " + (f == l) + " </h4>");
document.writeln("<h4> f===l " + (f === l) + " </h4>");
document.writeln("<h4> f!=l " + (f != l) + " </h4>");
document.writeln("<h4> f!==l " + (f !== l) + " </h4>");
document.writeln("<h4> f>l " + (f > l) + " </h4>");
document.writeln("<h4> f < l " + (f < l) + " </h4>");
document.writeln("<h4> f >= l " + (f >= l) + " </h4>");
document.writeln("<h4> f <= l " + (f <= l) + " </h4>");

let result =
  f < 100 ? (l < 500 ? "test" : "test trestrtt") : "false dhe qa do tjeter";

document.writeln(result);

let piket_provim = prompt("Numri i pikeve ne provim");

// alert(value);

let print_res =
  piket_provim >= 50
    ? "<h1 class='success-info'>Urime e keni kaluar me sukses</h1>"
    : "<h1 class='alert-info'>Suksese ne heren tjeter</h1>";

document.writeln(print_res);

//operatoret logjike

//and operatori logjike
document.writeln(4 > 1 && 4 > 2);

//or operatori logjike
document.writeln("<br>" + (4 > 1 || 4 < 2));

//not operatori
document.writeln("<br>" + !(10 > 2));

document.writeln(5 > 10 || egzon > 3);



