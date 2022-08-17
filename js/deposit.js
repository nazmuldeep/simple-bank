document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepostiTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepostiTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousTotalBalanceString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';

})