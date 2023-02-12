/* 
1. add events handler to withdraw button
2. get the withdraw amount from the withdraw input field and also make sure its convert in parseFloat number
3. Get previous withdraw total
4. calculate total withdraw amount
5. get the previous balance total
6. calculate new balance total and set the new balance total
*/

// step 1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step 2
  let withdrawField = document.getElementById("withdraw-field");
  let newWithdrawValue = withdrawField.value;
  newWithdrawValue = parseFloat(newWithdrawValue);

  if (isNaN(newWithdrawValue)) {
    alert("Please provide a valid number");
    return;
  }

  //   step 3
  let withdrawTotalElement = document.getElementById("withdraw-total");
  let prevWithdrawTotal = withdrawTotalElement.innerText;
  prevWithdrawTotal = parseFloat(prevWithdrawTotal);

  //   step 5
  let balanceTotalElement = document.getElementById("balance-total");
  let prevBalanceTotal = balanceTotalElement.innerText;
  prevBalanceTotal = parseFloat(prevBalanceTotal);

  if (newWithdrawValue > prevBalanceTotal) {
    alert("Baap er bank a eto taka nai !!!");
    withdrawField.value = "";
    return;
  }

  //   step 4
  let currentWithdrawTotal = prevWithdrawTotal + newWithdrawValue;

  //   set the withdraw total
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step 6
  let newBalanceTotal = prevBalanceTotal - newWithdrawValue;

  //   set the balance total
  balanceTotalElement.innerText = newBalanceTotal;

  //   clear the input withdraw field
  withdrawField.value = "";
});
