/// 27-7 
// for deposit part
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);

    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    inputField.value = ' ';
    return amountValue;
}

function updateTotalField(totalFieldId, newDepositAmount) {
    const totalAmount = document.getElementById(totalFieldId);
    const textTotal = (totalAmount.innerText);
    const previousTotal = parseFloat(textTotal);
    totalAmount.innerText = (previousTotal + newDepositAmount);
}

// Update Balance
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    // to make the function useful for 2 part send the true and false  
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + amount; // newDepositAmount pass by the parameter 
    }
    else {
        if ()
            balanceTotal.innerText = balanceTotalAmount - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {

    const newDepositAmount = getInputValue('deposit-input');

    /*  const depositTotal = document.getElementById('deposit-total');
     console.log(depositTotal.innerText);
     const previousDepositText = (depositTotal.innerText);
     const previousDepositAmount = parseFloat(previousDepositText);
     const updatedDepositAmount = (previousDepositAmount + newDepositAmount); */
    updateTotalField('deposit-total', newDepositAmount);
    ///Balance part 
    updateBalance(newDepositAmount, true); // true means addition 
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const currentBalance = balanceTotalAmount + newDepositAmount;
    balanceTotal.innerText = currentBalance; */

})

document.getElementById('withdraw-button').addEventListener('click', function () {

    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText); */
    const newWithdrawAmount = getInputValue('withdraw-input');

    // set withdraw total
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    console.log(previousWithdrawTotal);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    console.log(newWithdrawTotal);
    withdrawTotal.innerText = newWithdrawTotal; */
    updateTotalField('withdraw-total', newWithdrawAmount);

    // update balance
    /*  const balanceTotal = document.getElementById('balance-total');
     const previousBalanceText = balanceTotal.innerText;
 
     const previousDepositTotal = parseFloat(previousBalanceText);
     const newBalanceTotal = previousDepositTotal - newWithdrawAmount;
     balanceTotal.innerText = newBalanceTotal; */
    updateBalance(newWithdrawAmount, false); // false means subtruction 
})