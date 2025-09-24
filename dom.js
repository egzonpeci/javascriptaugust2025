//get data by id

let _dataById = document.getElementById("about");
_dataById.innerText += " Teksti i shenuar me js";
_dataById.style.color = "red";

console.log(_dataById);

//get elements by classname

let _dataByClassName = document.getElementsByClassName("text-white");

// _dataByClassName[0].hidden = false;
// _dataByClassName[0].className += " new-class";
for (let i = 0; i < _dataByClassName.length; i++) {
  _dataByClassName[i].style.color = "brown";
}

console.log(_dataByClassName);


//get datas by tag name

let _getDataByTagName = document.getElementsByTagName("h4");

//selektori eshte i njejti sikurse ne css
let getDataAsQuery = document.querySelector(".text-white");
console.log(getDataAsQuery);

let getDatasAsQueryAsList = document.querySelectorAll(".text-white");
console.log(getDatasAsQueryAsList);


//te merret vetem html ne baze te id

let htmlDataById = document.getElementById("box");


document.getElementById("html-box").innerHTML = htmlDataById.innerHTML;
document.getElementById("text-box").innerHTML = htmlDataById.innerText;

// console.log(htmlDataById);


document.getElementById("text-danger").innerHTML += "<span class='new-class'> pjesa tjeter e shtuar</span>"