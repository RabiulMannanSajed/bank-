document.getElementById('deposit-button').addEventListener('click', function () {


    ///deposit part 
    const depositInput = document.getElementById('deposit-input');

    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');

    console.log(depositTotal.innerText);

    const previousDepositText = (depositTotal.innerText);
    const previousDepositAmount = parseFloat(previousDepositText);
    const updatedDepositAmount = (previousDepositAmount + newDepositAmount);

    depositTotal.innerText = updatedDepositAmount;
    depositInput.value = ' ';



    ///Balance part 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const currentBalance = balanceTotalAmount + newDepositAmount;
    // console.log(balanceTotalAmount);
    balanceTotal.innerText = currentBalance;
})


document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw toatal
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    console.log(previousWithdrawTotal);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    console.log(newWithdrawTotal);
    withdrawTotal.innerText = newWithdrawTotal;
    withdrawInput.value = '';

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText



})