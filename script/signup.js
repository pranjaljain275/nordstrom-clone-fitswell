// Signup
document.querySelector("#signup-btn").addEventListener("click", accDataFun);

accData = [];

function accDataFun() {
  let fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let data = {
    fname,
    lname,
    email,
    password,
  };

  accData.push(data);
  localStorage.setItem("accdata", JSON.stringify(accData));
  setTimeout(() => {
    window.location.href = "signin.html";
  }, 2000);
}
