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

function validate() {
  let msg = "";
  console.log(document.querySelector("#fullname"));
  if (!document.querySelector("#fullname").value) {
    msg = "type fullname";
    return false;
  }
  if (!(document.querySelector("#pancard").value.length <= 10)) {
    msg = "type pan number equal to 10 characters";
    return false;
  }
  if (!document.querySelector("#email").value) {
    msg = "type email";
    return false;
  }
  if (!(document.querySelector("#phonenumber").value.length <= 10)) {
    msg = "type phone number equal to 10 characters";
    return false;
  }
  if (!document.querySelector("#youraddress").value) {
    msg = "type your address";
    return false;
  }
  if (!(document.querySelector("#yourpincode").value.length <= 6)) {
    msg = "type pin code equal to 6 characters";
    return false;
  }
}
