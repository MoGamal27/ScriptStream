const form = document.getElementById('form');
const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(firstnameValue === '') {
		setErrorFor(firstname, 'Username cannot be blank');
	} else {
		setSuccessFor(firstname);
	}

    if(lastnameValue === '') {
        setErrorFor(lastname, 'Lastname cannot be blank');
    } else {
        setSuccessFor(lastname);
    }
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
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
