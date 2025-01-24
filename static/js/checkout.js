document.addEventListener('DOMContentLoaded', function () {
    const checkoutForm = document.getElementById('checkoutForm');
    const payNowButton = document.getElementById('payNow');
    const phoneInput = document.getElementById('number');
    const pincodeInput = document.getElementById('pincode');
    const termsCheckbox = document.getElementById('terms');


    function validateForm() {
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('number').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state').value.trim();
        const pincode = document.getElementById('pincode').value.trim();
        const terms = termsCheckbox.checked;

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check all conditions
        return (
            fullName &&
            emailRegex.test(email) &&
            phone.length === 10 &&
            city &&
            state &&
            pincode.length === 6 &&
            terms
        );
    }


    function togglePayNowButton() {
        if (validateForm()) {
            payNowButton.disabled = false;
        } else {
            payNowButton.disabled = true;
        }
    }

    const inputs = document.querySelectorAll('#checkoutForm input, #checkoutForm select');
    inputs.forEach(input => {
        input.addEventListener('input', togglePayNowButton);
        input.addEventListener('change', togglePayNowButton);
    });


    phoneInput.addEventListener('input', function (e) {
        let cleaned = e.target.value.replace(/\D/g, '');
        if (cleaned.length > 10) {
            cleaned = cleaned.slice(0, 10);
        }
        e.target.value = cleaned;
    });

    pincodeInput.addEventListener('input', function (e) {
        let cleaned = e.target.value.replace(/\D/g, '');
        if (cleaned.length > 6) {
            cleaned = cleaned.slice(0, 6);
        }
        e.target.value = cleaned;
        togglePayNowButton();
    });

    payNowButton.addEventListener('click', function (e) {
        e.preventDefault();

        // If form is valid, proceed with payment simulation
        if (validateForm()) {
            payNowButton.disabled = true;
            payNowButton.textContent = 'Processing...';

            // Simulate API call
            setTimeout(() => {
                const paymentData = {
                    fullName: document.getElementById('fullName').value.trim(),
                    email: document.getElementById('email').value.trim(),
                    phone: document.getElementById('number').value.trim(),
                    city: document.getElementById('city').value.trim(),
                    state: document.getElementById('state').value.trim(),
                    pincode: document.getElementById('pincode').value.trim(),
                    amount: 40.0,
                };

                console.log('Payment processed:', paymentData);
                window.location.href = '/payment-success';
            }, 2000);
        }
    });

    // Initial state of the button
    togglePayNowButton();
});