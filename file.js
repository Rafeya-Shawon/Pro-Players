const cart = [];
function displayPlayer() {
  const cartContainer = document.getElementById("player-cart");
  cartContainer.textContent = "";

  for (let i = 0; i < 5; i++) {
    totalPrice = cart[i].pdPrice;
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${cart[i].pdName}</td>
        `;

    cartContainer.appendChild(tr);
  }
  cartContainer.appendChild(tr);
}
function addToCart(element) {
  const pdName = element.parentNode.parentNode.children[0].innerText;
  const pd = {
    pdName: pdName,
  };
  cart.push(pd);
  if (cart.length > 5) {
    alert("Sorry, You Can add only Five Player");
    return;
  }

  displayPlayer();
}
function multiplyBy() {
  if (cart.length > 5) {
    cart.length = 5;
  }
  num1 = document.getElementById("firstNumber").value;
  document.getElementById("result").innerHTML = num1 * cart.length;
}
function additionBy() {
  var a = document.getElementById("result").innerText;
  var b = document.getElementById("managerNumber").value;
  var c = document.getElementById("coachNumber").value;
  var d = parseInt(a) + parseInt(b) + parseInt(c);

  document.getElementById("totalResult").innerHTML = +d;
}
