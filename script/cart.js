let cartData = JSON.parse(localStorage.getItem("cartItem")) || [];

let totalPrice = cartData.reduce((acc, elem, index) => {
  return acc + +elem.price;
}, 0);
document.querySelector("#amount").textContent = totalPrice;
localStorage.setItem("amount", totalPrice);

let totalItem = +cartData.length;
document.querySelector("#totalItem").textContent = totalItem;
document.querySelector(".itemCart").textContent = totalItem;

function mensData(cartData) {
  document.querySelector("#container").innerHTML = null;

  cartData.forEach((elem, index) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let category = document.createElement("p");
    category.textContent = elem.category;

    let title = document.createElement("h2");
    title.textContent = elem.title;

    let quantity = document.createElement("div");
    quantity.setAttribute("id", "quant");

    let minusBtn = document.createElement("span");
    minusBtn.textContent = " - ";
    minusBtn.addEventListener("click", function () {
      numQuant.textContent = +numQuant.textContent - 1;
      price.textContent = numQuant.textContent * elem.price;
      if (numQuant.textContent == 0) {
        cartData.splice(index, 1);
        localStorage.setItem("cartItem", JSON.stringify(cartData));
        mensData(cartData);
        totalItem--;
        document.querySelector("#totalItem").textContent = totalItem;
        document.querySelector(".itemCart").textContent = totalItem;
      }
      totalPrice = totalPrice - elem.price;
      document.querySelector("#amount").textContent = totalPrice;
    });

    let numQuant = document.createElement("h2");
    numQuant.textContent = "1";

    let plusBtn = document.createElement("span");
    plusBtn.textContent = " + ";
    plusBtn.addEventListener("click", function () {
      numQuant.textContent = +numQuant.textContent + 1;
      price.textContent = numQuant.textContent * elem.price;
      totalPrice = totalPrice + elem.price;
      document.querySelector("#amount").textContent = totalPrice;
    });

    quantity.append(minusBtn, numQuant, plusBtn);

    let price = document.createElement("p");
    price.textContent = elem.price;

    let addbtn = document.createElement("button");
    addbtn.textContent = "Remove";
    addbtn.addEventListener("click", function () {
      deleteCart(elem, price.textContent, index);
    });

    div.append(image, category, title, quantity, price, addbtn);

    document.getElementById("container").append(div);
  });
}
mensData(cartData);

// delete item in cart
function deleteCart(elem, price, index) {
  cartData.splice(index, 1);
  localStorage.setItem("cartItem", JSON.stringify(cartData));

  totalPrice = totalPrice - Number(price);
  document.querySelector("#amount").textContent = totalPrice;

  totalItem--;
  document.querySelector("#totalItem").textContent = totalItem;
  document.querySelector(".itemCart").textContent = totalItem;

  mensData(cartData);
}
let disamount;
document.querySelector("#coupon>button").addEventListener("click", function () {
  let inputValue = document.querySelector("#discount").value;
  if (inputValue == "fitswell20" && totalPrice > 0) {
    disamount = Math.floor(totalPrice - totalPrice * 0.2);
    document.querySelector("#amount").textContent = disamount;
  } else {
    disamount = totalPrice;
    document.querySelector("#amount").textContent = totalPrice;
  }
  localStorage.setItem("amount", disamount);
});

document.getElementById("checkout").addEventListener("click", () => {
  window.location.href = "payment.html";
});

// //logged name
// let accData = JSON.parse(localStorage.getItem("accdata")) || [];
// console.log(accData);

// // document.querySelector("#account").innerHTML = `<li id="account"><a>Log Out</a><a>Delete Account</a></li>`

// if (accData[0] != undefined) {
//   document.querySelector("#logged").textContent = `HI! ${accData[0].fname}`;
// }
