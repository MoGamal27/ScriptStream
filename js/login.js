const loginPage = document.getElementById('loginPage');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

loginPage.addEventListener('LOGIN', event =>{
    event.preventdefault();
    isInputValid();
});

function isInputValid() {
    const emailValue = email.value.trim();
	const passValue = pass.value.trim();

	if(emailValue === '') {
		setErrorFor(email, 'Email can not be blank !');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email !');
	} else {
		setSuccessFor(email);
	}

    if(passValue === '') {
		setErrorFor(pass, 'Password can not be blank !');
	} else {
		setSuccessFor(pass);
	}
} 


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
    return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
	//return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}