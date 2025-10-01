function addProduct() {
  //merr vlerat e prod, qty, price
  let product = document.getElementById("product").value;
  let quantity = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;

  //krijo modelin per printim
  document.getElementById("products").innerHTML += generateRow(
    product,
    quantity,
    price
  );

  TotalInvoice();
}

function generateRow(prod, qty, price) {
  let amount = qty * price;
//   <tr onclick="deleteRow(this)"></tr>
  return `<tr>
              <td>${prod}</td>
              <td>
              <input type="number" value="${qty}" class="form-control">
              </td>
              <td>${price}</td>
              <td class="text-end amount">${amount}</td>
            </tr>`;
}

function TotalInvoice() {
  let countAmount = document.getElementsByClassName("amount");
  let total = 0.0;
  if (countAmount.length > 0) {
    for (let i = 0; i < countAmount.length; i++) {
      total += Number.parseFloat(countAmount[i].innerText);
    }
  }
  document.getElementById("total").innerText = total.toFixed(2);
}

function deleteRow(currentRow) {
  currentRow.remove();
  TotalInvoice();
}
