import Auto from "./auto_lunar.js";

const instruccion = document.querySelector("#instruccion");
const form = document.querySelector("#mover-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let car = new Auto();
  div.innerHTML = "<p>" + car.ejecutar(instruccion.value.toString()) + "</p>";
});
