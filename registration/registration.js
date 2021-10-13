function next1(e) {
  console.log(e);
  e.preventDefault();
  document.getElementsByClassName("secondary")[0].style.transform =
    "translateX(-100%)";
  //   document.getElementById("btn1").addEventListener("click", (e) => {});
}

function next2(e) {
  console.log(e);
  e.preventDefault();
  document.getElementsByClassName("secondary")[0].style.transform =
    "translateX(-200%)";
  //   document.getElementById("btn1").addEventListener("click", (e) => {});
}

function next2Back(e) {
  console.log(e);
  e.preventDefault();
  document.getElementsByClassName("secondary")[0].style.transform =
    "translateX(0%)";
  //   document.getElementById("btn1").addEventListener("click", (e) => {});
}
function next3Back(e) {
  console.log(e);
  e.preventDefault();
  document.getElementsByClassName("secondary")[0].style.transform =
    "translateX(-100%)";
  //   document.getElementById("btn1").addEventListener("click", (e) => {});
}

function register(e) {
  e.preventDefault();
  console.log(e);
}
