function SumCalculcation() {
  //merr vlerat

  let value_1 = document.getElementById("nr_1").value;
  let value_2 = document.getElementById("nr_2").value;

  //merr veprimin

  let action = document.getElementById("action").value;

  let sum = 0;

  switch (action) {
    case "+":
      sum = Number.parseFloat(value_1) + Number.parseFloat(value_2);
      document.getElementById("result").innerText = `Shuma e llog ${sum}`;
      break;

    case "-":
      sum = Number.parseFloat(value_1) - Number.parseFloat(value_2);
      document.getElementById("result").innerText = `Zbritja e llog ${sum}`;
      break;

    case "x":
      sum = Number.parseFloat(value_1) * Number.parseFloat(value_2);
      document.getElementById("result").innerText = `Shumezimi i llog ${sum}`;
      break;
    default:
      break;
  }

  // alert(value_2);
}

//shto detyra te reja

function NewTask(text) {
  let countClass = document.getElementsByClassName("alert-info").length;
  return `<div class="col-12 alert alert-info" id="id_${countClass + 1}">
            ${text}
            <button class="btn btn-danger" onclick="deleteItem('id_${
              countClass + 1
            }')">X</button>
        </div>`;
}

function addTask() {
  let task = document.getElementById("task_title").value;
  let html = NewTask(task);

  //printo

  document.getElementById("tasks").innerHTML += html;
}

function deleteItem(id_elementit) {
  document.getElementById(id_elementit).remove();
}
