const click = document.querySelectorAll(".button");
let display = document.querySelector("#display");
const clr = document.querySelectorAll("#clear");
const equal = document.getElementById("equal");
for (let i = 0; i < click.length; i++) {
  click[i].addEventListener("click", () => {
    display.value += click[i].value;
  });
}
for (let i = 0; i < clr.length; i++) {
  clr[i].addEventListener("click", () => {
    display.value = "";
  });
}
equal.addEventListener("click", () => {
  let p = display.value;
  let q = eval(p);
  display.value = q;
});
