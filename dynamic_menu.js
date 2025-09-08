// <li class="nav-item">
//   <a class="nav-link" href="#">Link</a>
// </li>
// <li class="nav-item">
//   <a class="nav-link" href="#">Link</a>
// </li>
// <li class="nav-item">
//   <a class="nav-link" href="#">Link</a>
// </li>


let menus = [
    ["home.html","Home"],
    ["about.html","Rreth Nesh"],
    ["contact.html","Kontakti"],
    ["contact.html","Kontakti"],
    ["contact.html","Kontakti"],
    ["contact.html","Kontakti"],
];



for (let i = 0; i < menus.length; i++) {

  document.writeln(`<li class="nav-item">
                  <a class="nav-link" href="${menus[i][0]}">${menus[i][1]}</a>
                </li>
`);
}
