
// for deposit part
function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);

    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    depositInput.value = ' ';
    return newDepositAmount;
}



document.getElementById('deposit-button').addEventListener('click', function () {

    const newDepositAmount = getInputValue('deposit-input');

    const depositTotal = document.getElementById('deposit-total');

    console.log(depositTotal.innerText);

    const previousDepositText = (depositTotal.innerText);
    const previousDepositAmount = parseFloat(previousDepositText);
    const updatedDepositAmount = (previousDepositAmount + newDepositAmount);

    depositTotal.innerText = updatedDepositAmount;
    ///Balance part 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const currentBalance = balanceTotalAmount + newDepositAmount;
    // console.log(balanceTotalAmount);
    balanceTotal.innerText = currentBalance;
})

document.getElementById('withdraw-button').addEventListener('click', function () {

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    const newWithdrawAmount = getInputValue('withdraw-input');

    console.log(newWithdrawAmount);

    // set withdraw toatal
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    console.log(previousWithdrawTotal);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    console.log(newWithdrawTotal);
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;

    const previousDepositTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousDepositTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
})