// Get references to HTML elements
const balanceElement = document.getElementById('balance');
const withdrawElement = document.getElementById('withdraw');
const withdrawForm = document.getElementById('withdrawForm');
const withdrawBtn = document.getElementById('withdraw-btn');

// Add event listener to the withdrawal form submission
withdrawForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value entered in the withdrawal input field
    const withdrawAmount = parseFloat(withdrawForm.amount.value);

    // Check if the withdrawal amount is valid
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid withdrawal amount.");
        return;
    }

    // Convert balance and withdrawal amount to numbers
    let currentBalance = parseFloat(balanceElement.innerText.replace('$', '').replace(',', ''));
    let currentWithdraw = parseFloat(withdrawElement.innerText.replace('$', '').replace(',', ''));

    // Check if the user has sufficient balance for the withdrawal
    if (currentBalance < withdrawAmount) {
        alert("You do not have sufficient balance to withdraw that amount.");
        return;
    }

    // Update balance and withdrawal amount
    currentBalance -= withdrawAmount;
    currentWithdraw += withdrawAmount;

    // Format updated amounts with currency symbol and comma separation
    const formattedBalance = '$' + currentBalance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    const formattedWithdraw = '$' + currentWithdraw.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

    // Update the text content of balance and withdrawal elements
    setTimeout()
    balanceElement.innerText = formattedBalance;
    withdrawElement.innerText = formattedWithdraw;

    // Reset the withdrawal input field
    withdrawForm.amount.value = '';

    // Display success message
    alert("Transaction successful!");
});