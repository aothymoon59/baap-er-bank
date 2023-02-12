// step 1: add event listener to deposit button

document.getElementById("btn-deposit").addEventListener("click", function () {
  // step 2: get the deposit amount from deposit input filed
  let depositField = document.getElementById("deposit-field");
  let newDepositValue = depositField.value;
  newDepositValue = parseFloat(newDepositValue);

  if (isNaN(newDepositValue)) {
    alert("Please provide a valid number");
    return;
  }

  //   step 3: get the current deposit total
  let depositTotalElement = document.getElementById("deposit-total");
  let prevDepositTotal = depositTotalElement.innerText;
  prevDepositTotal = parseFloat(prevDepositTotal);

  //   step 4 : add numbers to set the total deposit
  let currentDepositTotal = prevDepositTotal + newDepositValue;

  //   set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  //   step 5 : get balance current total
  let balanceTotalElement = document.getElementById("balance-total");
  let prevBalanceTotal = balanceTotalElement.innerText;
  prevBalanceTotal = parseFloat(prevBalanceTotal);

  // step 6: calculate current balance total

  let currentBalanceTotal = prevBalanceTotal + newDepositValue;

  //   set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  // clear the input deposit filed
  depositField.value = "";
});
