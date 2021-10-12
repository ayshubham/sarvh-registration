function next1(e) {
  console.log(e);
  e.preventDefault();
  document.getElementsByClassName("secondary")[0].style.transform =
    "translateX(-100%)";
  //   document.getElementById("btn1").addEventListener("click", (e) => {});
}

next1();
