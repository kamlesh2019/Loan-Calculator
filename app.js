function calulateLoan() {
    const amount = document.querySelector('#amount').value;
    const interest_rest = document.querySelector('#interest').value;
    const months = document.querySelector('#months').value;
    const interest = (amount * (interest_rest * 0.01)) / months;
    const payment = ((amount / months) + interest).toFixed(2);

    document.querySelector('#payment').innerHTML = 'EMI: ₹' + payment;

}