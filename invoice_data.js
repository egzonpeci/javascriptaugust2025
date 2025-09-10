let invoice_data = {
  invoice_nr: "34XDT34",
  date: "10/09/2025",
  items: [
    {
      desc: "Product 1",
      unit_price: 100,
      qty: 1,
      total: function () {
        return this.unit_price * this.qty;
      },
    },
    {
      desc: "Product 2",
      unit_price: 30,
      qty: 1.5,
      total: function () {
        return this.unit_price * this.qty;
      },
    },
    {
      desc: "Product 1",
      unit_price: 100,
      qty: 1,
      total: function () {
        return this.unit_price * this.qty;
      },
    },
    {
      desc: "Product 2",
      unit_price: 30,
      qty: 1.5,
      total: function () {
        return this.unit_price * this.qty;
      },
    },
  ],
};

function GenerateInvoiceRow(desc, price, qty, total) {
  return `
           <tr>
                <th>${desc}</th>
                <th>${price}</th>
                <th>${qty}</th>
                <th>${total}</th>
            </tr>
    `;
}

//merr listen e produkteve

let products = invoice_data.items;

let htmlProducts = "";
for (let i = 0; i < products.length; i++) {
  htmlProducts += GenerateInvoiceRow(
    products[i].desc,
    products[i].unit_price,
    products[i].qty,
    products[i].total()
  );
}

document.writeln(htmlProducts);

//leximi i json file-it

fetch("products.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
