document.getElementById('button-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawValueString = withdrawField.value ;
    newWithdrawValue = parseFloat(newWithdrawValueString);
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const currentTotal = previousWithdrawTotal + newWithdrawValue;
    withdrawTotalElement.innerText =  currentTotal;

    const balanceField = document.getElementById("total-balance");
    const previousBalanceTotalString = balanceField.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawValue > previousBalanceTotal){
        alert('insufficient balance');
        return;

    }
    const currentBalanceTotal = previousBalanceTotal - newWithdrawValue;
    balanceField.innerText = currentBalanceTotal;

    
    withdrawField.value ="";
})