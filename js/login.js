document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('submit button click')
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log('your email is ', email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log('your password is', password)

    if (email === 'dip21@gmail.com' && password === 'nazmuldip') {
        window.location.href = "bank.html"

    }
    else {
        alert('invalid user.Please enter correct username and password')
    }

})