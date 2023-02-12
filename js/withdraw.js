document.getElementById('button-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawValueString = withdrawField.value;
     const newWithdrawValue = parseFloat(newWithdrawValueString);
     withdrawField.value = "";
     if(isNaN(newWithdrawValue)){
        alert('please provide a valid number');
        return;
     }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const currentTotal = previousWithdrawTotal + newWithdrawValue;
    withdrawTotalElement.innerText = currentTotal;

    const balanceField = document.getElementById("total-balance");
    const previousBalanceTotalString = balanceField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   

    if (newWithdrawValue > previousBalanceTotal) {
        alert('insufficient balance');
        return;

    }
    const currentBalanceTotal = previousBalanceTotal - newWithdrawValue;
    balanceField.innerText = currentBalanceTotal;
})