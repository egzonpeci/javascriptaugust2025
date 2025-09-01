let first_value = 0;

while (first_value < 10) {
  document.writeln("<h4> " + (first_value + 1) + ". test</h4>");
  first_value++;
}

let second_value = 0;

do {
  document.writeln("<h3>Brenda loop-es do while</h3>");
} while (second_value > 10);

for (let i = 0; i < 10; i++) {
  // document.writeln("<h4> " + (i + 1) + ". Loop-a for</h4>");
  document.writeln(`<h4> ${i + 1}.
  Loop-a <h4>`);
}

//tabela me 5

let n = 5;

// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20

for (let j = 1; j <= 10; j++) {
  document.writeln(`<p> ${n} x ${j} = ${j * n}</p>`);
}

//shumen e numrave prej 0 - 100
//  1 + 2 + 3 + 4 + ... + 100

let sum = 0;

for (let j = 0; j <= 100; j++) {
  sum += j;
}

document.writeln(`<h4>Shuma e nr prej 0 deri 100 <br> ${sum}</h4>`);

0 - 10;

// 1,3,5,7,9 h1
// 2,4,6,8,10 h6

for (let j = 0; j < 10; j++) {
  if ((j + 1) % 2 == 0) {
    document.writeln(`<h6>Numri cift</h6>`);
  } else {
    document.writeln(`<h1>Numri tek</h1>`);
  }
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    document.writeln(`<h4>${i} ${j} Heading 4 </h4>`);
  }
}

//tabela e shumezimit

for (let i = 1; i <= 10; i++) {
  document.writeln(`<h2>Tabela e shumezimit me ${i}</h2>`);

  for (let j = 1; j <= 10; j++) {
    document.writeln(`<p>${i} x ${j} = ${i * j}</p>`);
  }
  document.writeln("<br>");
}

//print all headings

for (let i = 1; i <= 6; i++) {
  document.writeln(`<h${i}>Heading ${i}</h${i}>`);
}

for (let index = 0; index < 10; index++) {
  if (index == 0) break;

  if (index == 3 || index == 4) continue;
  document.writeln(`<p>vlera e printuar ${index}</p>`);
}

//te gjenerohen 3 numrat e targave te vetura-ve ne RKS

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      document.writeln(`<h1>${i}${j}${k}</h1>`);
      if (k == 5) break;
    }
  }
}