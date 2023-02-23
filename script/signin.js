// Signin
document.querySelector("#signin-btn").addEventListener("click", accDataFun);

function accDataFun() {
  let fname;
  let lname;

  let emaillog = document.querySelector("#email").value;
  let passwordlog = document.querySelector("#password").value;

  let accData = JSON.parse(localStorage.getItem("accdata")) || [];

  let credential = false;

  for (let i = 0; i < accData.length; i++) {
    if (accData[i].email == emaillog && accData[i].password == passwordlog) {
      credential = true;
      fname = accData[i].fname;
      lname = accData[i].lname;
      break;
    }
  }
  if (credential == true) {
    document.querySelector("#account").textContent = fname + " " + lname;
    alert("Login Successfull");
    window.location.href = "index.html";
  } else {
    alert("Wrong Credential");
  }
}
