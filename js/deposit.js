document.getElementById('button-deposit').addEventListener('click',function(){
    const depositField = document.getElementById("deposit-amount");
    const newDepositAmountString = depositField.value ;
    const newDepositAmount = parseFloat(newDepositAmountString);
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText =  currentDepositTotal;

    const balanceField = document.getElementById("total-balance");
    const previousBalanceTotalString = balanceField.innerText;
    previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceField.innerText = currentBalanceTotal;




depositField.value = "";
});