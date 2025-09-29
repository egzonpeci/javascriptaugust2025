// let modelCard = ` <div class="col-md-4 bg-success">
//             <h1>Test test</h1>
//         </div>`;

// let htmlBody = "";

// for (let i = 0; i < 20; i++) {
//   htmlBody += modelCard;
// }

// document.getElementById("cards").innerHTML = htmlBody;

class Product {
  constructor(id, title, description, price, image) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
  }

  static GenerateCard(item) {
    return `<div class="col-md-3 mt-2" id="${item.id}">
       <div class="card">
           <h4 class='text-end p-2 text-danger' onclick='removeById(${item.id})' >X</h4>

  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <p class="card-text">${item.description}</p>
    <h4>${item.price} $</h4>
  </div>
</div>
       
       </div>`;
  }
}

//get data as json from url

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((obj) => {
    let htmlPayload = "";
    for (let i = 0; i < obj.length; i++) {
      htmlPayload += Product.GenerateCard(obj[i]);
    }

    //show data
    document.getElementById("products").innerHTML = htmlPayload;
  });

function showMsg() {
  alert("Sot eshte dite e Merkure");
}

function changeColor(obj) {
  //   console.log(obj);
  obj.style.color = "red";
  obj.hidden = true;
}

function removeById(id) {
  document.getElementById(id).hidden = true;
}

function redText(obj) {
  obj.style.color = "red";
}
