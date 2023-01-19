let x = document.querySelector("#X");
let y = document.querySelector("#Y");
function showSomme() {
  document.querySelector("h3").innerHTML = somme(
  Number(x.value),
  Number(y.value));
  }
function somme(x, y) {
  return "Result : " + (x + y);
  }

function showDiv() {
  document.querySelector("h3").innerHTML = div(
  Number(x.value),
  Number(y.value));
  }
function div(x, y) {
  if(y===0){
    alert("Error")
  }
  return "Result : " + (x/y);
  }

function showMult() {
  document.querySelector("h3").innerHTML = mult(
  Number(x.value),
  Number(y.value));
  }
function mult(x, y) {
  return "Result: " + (x*y);
  }

function showSous() {
  document.querySelector("h3").innerHTML = sous(
  Number(x.value),
  Number(y.value));
  }
function sous(x, y) {
  return "Result: " + (x-y);
 }

    