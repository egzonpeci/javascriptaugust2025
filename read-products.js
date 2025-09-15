class Product {
  constructor(id, title, description, price, thumbnail) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
  }

  static CardProduct(x) {
    document.writeln(`<div class="card">
  <img src="${x.thumbnail}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${x.description}</p>
  </div>
</div>`);
  }
}

//fetch function

GetCurrentDate().then(
  function (v) {
    console.log("test");
  },
  function (e) {
    console.log("gabim");
  }
);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.products.length; i++) {
      Product.CardProduct(data.products[i]);
    }
  })
  .catch((error) => document.writeln(`<h1>Diqka nuk shkoi mire ${error}</h1>`));

//async function

async function GetCurrentDate() {
  console.log("test");
}


function HandleFunction(){

    try {
        console.logsss("testt asas");
    } catch (error) {
          console.log(error)
    }
}


HandleFunction();