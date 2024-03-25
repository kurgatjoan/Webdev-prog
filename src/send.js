// Get references to HTML elements
const balanceElement = document.getElementById('balance');
const sendElement = document.getElementById('send');
const sendForm = document.getElementById('sendMoneyForm');
const sendBtn = document.getElementById('send-btn');
const table = document.getElementById('myTable');

// Function to update balance and send amount
function updateBalanceAndSend(amount) {
    // Convert balance to number
    let currentBalance = parseFloat(balanceElement.innerText.replace('KSH. ', '').replace(',', ''));

    // Check if the user has sufficient balance
    if (currentBalance < amount) {
        alert("You do not have sufficient balance to send that amount.");
        return;
    }

    // Deduct amount from balance
    currentBalance -= amount;

    // Format updated balance
    const formattedBalance = 'KSH. ' + currentBalance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

    // Update balance
    balanceElement.innerText = formattedBalance;

    // Display success message
    alert(`Transaction successful! ${amount} KSH sent.`);
}

// Event listener for form submission
sendForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the value entered in the send amount input field
    const sendAmount = parseFloat(sendForm.amounttosend.value);

    // Check if the send amount is valid
    if (isNaN(sendAmount) || sendAmount <= 0) {
        alert("Please enter a valid send amount.");
        return;
    }

    // Call function to update balance and send amount
    updateBalanceAndSend(sendAmount);

    // Reset the send amount input field
    sendForm.amounttosend.value = '';
});

// Event listener for sending money to selected contacts
table.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('delete-btn')) {
        // Retrieve the row of the selected contact
        const selectedRow = event.target.closest('tr');

        // Check if the checkbox for this row is checked
        const checkbox = selectedRow.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            // Retrieve the amount entered by the user
            const amount = parseFloat(prompt('Enter an amount to be sent to this contact:'));

            // Check if the entered amount is valid
            if (!isNaN(amount) && amount > 0) {
                // Call function to update balance and send amount
                updateBalanceAndSend(amount);
            } else {
                alert("Please enter a valid amount.");
            }
        } else {
            alert("Please select a contact.");
        }
    }
});
