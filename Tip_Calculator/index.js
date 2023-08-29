const btnEle = document.getElementById("calculate");
const billInputEle = document.getElementById("bill");
const tipInputEle = document.getElementById("tip");
const totalSpanEle = document.getElementById("total");

function calculateTotal() {
  const billValue = billInputEle.value;
  const tipValue = tipInputEle.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpanEle.innerText = totalValue.toFixed(2);
}

btnEle.addEventListener("click", calculateTotal);
