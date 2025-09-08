let students = [
  ["Miron", "https://cdn-icons-png.flaticon.com/512/147/147142.png"],
  ["Ronit", "https://cdn-icons-png.flaticon.com/512/147/147142.png"],
  ["Egzon", "https://cdn-icons-png.flaticon.com/512/147/147142.png"],
  ["Miron", "https://cdn-icons-png.flaticon.com/512/147/147142.png"],
  ["Ronit", "https://cdn-icons-png.flaticon.com/512/147/147142.png"],
  ["Egzon", "https://cdn-icons-png.flaticon.com/512/147/147142.png"],
  ["Miron", "https://cdn-icons-png.flaticon.com/512/147/147142.png"],
  ["Ronit", "https://cdn-icons-png.flaticon.com/512/147/147142.png"],
  ["Egzon", "https://cdn-icons-png.flaticon.com/512/147/147142.png"],
  ["Miron", "https://cdn-icons-png.flaticon.com/512/147/147142.png"],
  ["Ronit", "https://cdn-icons-png.flaticon.com/512/147/147142.png"],
  ["Egzon", "https://cdn-icons-png.flaticon.com/512/147/147142.png"],
];

function GenerateCard(fullname, link) {
  return `
    <div class="col-md-3 mt-3">
    <div class="card">
  <img src="${link}" class="img-fluid" alt="...">
  <div class="card-body">
    <h4 class="card-text text-bold">${fullname}</h4>
    <h6>Linku ${link}</h6>
  </div>
  </div>
</div>`;
}

document.writeln("<div class='row'>");
for (let i = 0; i < students.length; i++) {
  document.writeln(GenerateCard(students[i][0], students[i][1]));
}

document.writeln("</div>");

let persons = [
  {
    fullName: "Egzon",
    address: "Prishtine",
    phone: "044121212",
  },
  {
    fullName: "Miron",
    address: "Prishtine",
    phone: "044121212",
    data:  function() {
      return `<h1>${this.fullName} ${this.phone}</h1>`;
    },
  },
];

document.writeln(persons[1].data());


