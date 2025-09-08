let a = 4,
  b = 5;

//0   1  2 3  4
let values = ["sot eshte dite e premte", 2, 3, "vlera 40", 5];
document.writeln(values[0]);

document.writeln(`<h4>
    Sot me numrin e dites ${values[3]}
    </h4>`);

let array = [];
array[1] = 7;
array[0] = 8;

document.writeln(array);

let new_Array = new Array(1, 2, 3, 4);

document.writeln(new_Array);

let user_data = ["egzon", "/img/egzon.png", 2];

let person = ["filan fisteku", 30];

function Birthday(name, age) {
  document.writeln(`<h4>
    "Gëzuar ditëlindjen,
     ${name} 
    Uroj që mosha jote e re, 
    ${age} 
    vjeç, të sjellë shumë lumturi, shëndet dhe suksese në çdo hap të jetës."
    </h4>`);
}

person[0] = "Egzon Test";

Birthday(person[0], person[1]);
Birthday(person[0], person[1]);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("lastElement");
fruits.pop();
fruits.pop();

fruits.unshift("FirstElement");

for (let index = 0; index < fruits.length; index++) {
  document.writeln(`<h4>Fruti: ${fruits[index]}</h4>`);
}

const fruits_1 = ["Banana", "Orange", "Apple", "Mango"];
fruits_1.splice(0, 2, "Lemon", "Kiwi");

document.writeln(fruits_1);

const fruits_2 = ["Banana", "Orange", "Apple", "Mango"];

const fruits_3 = fruits_2.slice(1, 2);

document.writeln("<br>" + fruits_3);

let numbers = [1, 2, 3, 4, 5, 6, 9];

for (let i = 0; i < numbers.length; i++) {
  document.writeln(`<p>${numbers[i]} ^ 2  = ${numbers[i] ** 2}</p>`);
}

let studenti_1 = ["Emri dhe Mbiemri", 4, 5, 4, 5, 4, 4, 3, 2];

//te krijohen disa array per disa studenta sikurse shembulli me studenti_1
// si printohet si tabel dhe te gjendet nota mesatare e cili do student qe do te printohet

let st_1 = ["Ermri", 1, 3, 4, 4];
let st_2 = ["Ermri", 1, 3, 4, 4];
let st_3 = ["Ermri", 1, 3, 4, 4];
let st_4 = ["Ermri", 1, 3, 4, 4];

let students = [
  [1, 2, 3, "Miron"],
  [4, 5, 6],
  [7, 8, 9],
  [0, 0, 0],
  [0, 0, 0, "egzon"],
  [0, 0, 0],
];

// let array_test = [1,2,3];

// alert(students[4][3]);

for (let row = 0; row < students.length; row++) {
  document.writeln(`<p>`);

  for (let col = 0; col < students[row].length; col++) {
    document.writeln(`${students[row][col]}, `);
  }
  document.writeln(`</p>`);
}

