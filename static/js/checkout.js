// Validation Functions
function validateFullName() {
    const fullName = document.getElementById('fullName');
    const fullNameError = document.getElementById('fullNameError');
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;

    if (!nameRegex.test(fullName.value.trim())) {
        fullName.classList.add('input-error');
        fullNameError.style.display = 'block';
        return false;
    }
    fullName.classList.remove('input-error');
    fullNameError.style.display = 'none';
    return true;
}

function validateEmail() {
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value.trim())) {
        email.classList.add('input-error');
        emailError.style.display = 'block';
        return false;
    }
    email.classList.remove('input-error');
    emailError.style.display = 'none';
    return true;
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone.value.trim())) {
        phone.classList.add('input-error');
        phoneError.style.display = 'block';
        return false;
    }
    phone.classList.remove('input-error');
    phoneError.style.display = 'none';
    return true;
}

function validateCity() {
    const city = document.getElementById('city');
    const cityError = document.getElementById('cityError');
    const cityRegex = /^[a-zA-Z\s]{2,50}$/;

    if (city.value.trim() && !cityRegex.test(city.value.trim())) {
        city.classList.add('input-error');
        cityError.style.display = 'block';
        return false;
    }
    city.classList.remove('input-error');
    cityError.style.display = 'none';
    return true;
}

function validateState() {
    const state = document.getElementById('state');
    const stateError = document.getElementById('stateError');
    const stateRegex = /^[a-zA-Z\s]{2,50}$/;

    if (state.value.trim() && !stateRegex.test(state.value.trim())) {
        state.classList.add('input-error');
        stateError.style.display = 'block';
        return false;
    }
    state.classList.remove('input-error');
    stateError.style.display = 'none';
    return true;
}

function validatePincode() {
    const pincode = document.getElementById('pincode');
    const pincodeError = document.getElementById('pincodeError');
    const pincodeRegex = /^\d{6}$/;

    if (pincode.value.trim() && !pincodeRegex.test(pincode.value.trim())) {
        pincode.classList.add('input-error');
        pincodeError.style.display = 'block';
        return false;
    }
    pincode.classList.remove('input-error');
    pincodeError.style.display = 'none';
    return true;
}

function validateTerms() {
    const termsCheckbox = document.getElementById('terms');
    const termsError = document.getElementById('termsError');

    if (!termsCheckbox.checked) {
        termsError.style.display = 'block';
        return false;
    }
    termsError.style.display = 'none';
    return true;
}

// Add event listeners for real-time validation
document.getElementById('fullName').addEventListener('blur', validateFullName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('city').addEventListener('blur', validateCity);
document.getElementById('state').addEventListener('blur', validateState);
document.getElementById('pincode').addEventListener('blur', validatePincode);
document.getElementById('terms').addEventListener('change', validateTerms);

// Checkout Form Validation
function validateCheckoutForm() {
    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isCityValid = validateCity();
    const isStateValid = validateState();
    const isPincodeValid = validatePincode();
    const isTermsAccepted = validateTerms();

    return isFullNameValid && isEmailValid && isPhoneValid && 
           isCityValid && isStateValid && isPincodeValid && 
           isTermsAccepted;
}

// Pay Now button handler
document.getElementById('payNow').addEventListener('click', function(event) {
    event.preventDefault();
    
    if (validateCheckoutForm()) {
        window.location.href = '/payments';
    }
});

// Terms and Conditions Modal Logic
document.getElementById('termsLink').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('termsModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('termsModal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('termsModal')) {
        document.getElementById('termsModal').style.display = 'none';
    }
});