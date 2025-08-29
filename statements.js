let a = 4,
  b = 3;

if (a > b) {
  document.writeln("Brenda komandes if");
} else {
  document.writeln("Ne else");
}

if (a > 2) {
  document.writeln("<h3>a me e madhe se 2</h3>");
  if (b > 3) {
    document.writeln("<h3>b me e madhe se 3</h3>");
  }
}

if (a > 2 && b > 3) {
  document.writeln("Vlera a dhe b");
}

let x = 2,
  y = 70,
  z = 90;

if (x > y && x > z) {
  document.writeln("Vlera max x");
}

if (y > x && y > z) {
  document.writeln("Vlera max y");
}

if (z > x && z > y) {
  document.writeln("Vlera max z");
}

//form te shkurter dhe shpejt

if (x > y && x > z) {
  document.writeln("<h4>Vlera max x</h4>");
} else if (y > z) {
  document.writeln("<h4>Vlera max y</h4>");
} else {
  document.writeln("<h4>Vlera max z</h4>");
}

//50 - 59 nota 6
//60 - 69 nota 7
//70 - 79 nota 8
//80 - 89 nota 9
//90 - 100 nota 10

let nr_piket = prompt("Numri i pikeve ne provim");

if (nr_piket >= 50 && nr_piket < 59) {
  document.writeln("<h4>Nota 6</h4>");
} else if (nr_piket >= 60 && nr_piket < 69) {
  document.writeln("<h4>Nota 7</h4>");
} else if (nr_piket >= 70 && nr_piket < 79) {
  document.writeln("<h4>Nota 8</h4>");
} else if (nr_piket >= 80 && nr_piket < 89) {
  document.writeln("<h4>Nota 9</h4>");
} else if (nr_piket >= 90 && nr_piket <= 100) {
  document.writeln("<h4>Nota 10</h4>");
} else if (nr_piket < 50) {
  document.writeln("<h4>Nota 5</h4>");
}

let gjinia = 340;

switch (gjinia) {
  default:
    document.writeln("<h4>Asnje nga gjinit e zgjedhura</h4>");
    break;
  case "f":
  case "femer":
    document.writeln("<h4>Gjinia femrore</h4>");
    break;
  case "m":
  case "2":
  case 340:
    document.writeln("<h4>Gjinia mashkullore</h4>");
    break;
}

// cift shumezojm me numrin 5
// tek shumezojm me numrin 10

let input_value = 2;

// let mbetja = input_value % 2;
// alert(mbetja);

switch (input_value % 2) {
  case 0:
    document.writeln("<h2>Nr cift " + input_value * 5 + "</h2>");
    break;
  case 1:
    document.writeln("<h2>Nr tek " + input_value * 10 + "</h2>");
    break;
  default:
    break;
}
