// common function to get input & increase or decrease
function updateProductNumber(product, price, isIncreasing) {
  const ProductInput = document.getElementById(product + "-number");
  let productNumber = parseInt(ProductInput.value);
  if (isIncreasing) {
    productNumber = productNumber + 1;
  } else if (ProductInput.value > 0) {
    productNumber = productNumber - 1;
  }
  // setting value
  ProductInput.value = productNumber;
  // update total
  const total = document.getElementById(product + "-total");
  total.innerText = productNumber * price;

  // call to calculate calculate Subtotal
  calculateTotal();
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

// Calculate Sub total here
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subtotal=phoneTotal+caseTotal;
  const tax=subtotal/10;    //(subtotal*10)/100
  const totalPrice=subtotal+tax;

  // update on html
  document.getElementById('sub-total').innerText=subtotal;
  document.getElementById('tax-amount').innerText=tax;
  document.getElementById('total-price').innerText=totalPrice;
}

// For phone increase decrease event
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

// For case increase & decrease button
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
