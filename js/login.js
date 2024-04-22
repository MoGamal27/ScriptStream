const loginPage = document.getElementById('loginPage');
const Email = document.getElementById('Email');
const pass = document.getElementById('pass');

loginPage.addEventListener('LOGIN', event =>{
    event.preventdefault();
    isInputValid();
});

function isInputValid() {
    const EmailValue = Email.value.trim();
	const passValue = pass.value.trim();

	if(EmailValue === '') {
		setErrorFor(Email, 'Email can not be blank !');
	} else if (!isEmail(EmailValue)) {
		setErrorFor(Email, 'Not a valid email !');
	} else {
		setSuccessFor(Email);
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

function isEmail(Email) {
    return Email.includes('@') && Email.includes('.') && Email.indexOf('@') < Email.lastIndexOf('.');
	//return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email);
}