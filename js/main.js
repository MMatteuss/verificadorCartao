document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const cardNumber = document.getElementById('cardNumber');
    const expirationDate = document.getElementById('expirationDate');
    const cvv = document.getElementById('cvv');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function(event) {
        let valid = true;
        errorMessage.innerHTML = '';

        // Validate card number
        if (!/^\d{16}$/.test(cardNumber.value)) {
            valid = false;
            errorMessage.innerHTML += '<p>O número do cartão deve conter 16 dígitos.</p>';
        }

        // Validate expiration date
        if (!/^\d{2}\/\d{2}$/.test(expirationDate.value)) {
            valid = false;
            errorMessage.innerHTML += '<p>A data de expiração deve estar no formato MM/AA.</p>';
        }

        // Validate CVV
        if (!/^\d{3,4}$/.test(cvv.value)) {
            valid = false;
            errorMessage.innerHTML += '<p>O CVV deve conter 3 ou 4 dígitos.</p>';
        }

        if (!valid) {
            event.preventDefault();
        } else {
            updateCard();
        }
    });
});

function updateCard() {
    document.getElementById('display-card-name').innerText = document.getElementById('card-name').value;
    document.getElementById('display-card-number').innerText = document.getElementById('card-number').value;
    document.getElementById('display-expiry-date').innerText = document.getElementById('expiry-date').value;
    document.getElementById('display-cvv').innerText = document.getElementById('cvv').value;
}