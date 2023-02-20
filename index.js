document.getElementById('login-submit').addEventListener('click', function () {


    //teke input emil value 

    const userEmail = document.getElementById('user-email');
    const userName = userEmail.value;

    //teke input value of user password

    const userPassword = document.getElementById('user-password');
    const passwordValue = userPassword.value;
    const checkValue = document.getElementById('check-value');
    if ((userName == 'sajed@gmail.com') && (passwordValue == '01843616224')) {
        window.location.href = 'banking.html';
    }
    else {
        checkValue.style.display = 'block';
    }
})