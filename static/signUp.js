const signUpForm = document.querySelector('.js-signUp');


function signUpSubmit(username, password, email) {
	const usernameSignUp = username.value;
	const passwordSignUp = password.value;
	const emailSignUp = email.value;
	
	/* PYTHON
	$.ajax({
		url: '/signin',
		type: 'POST',
		data: { username: usernameSignUp, password: passwordSignUp, emailadd: emailSignUp },
		success: function(response){
		    if(response['result'] == 'success'){
		    	alert('회원가입 성공!');
		    }
		}

	});*/

}

function checkInput(event) {
	const usernameInput = signUpForm.usernameInput;
	const passwordInput = signUpForm.passwordInput;
	const passwordCheck = signUpForm.passwordCheck;
	const emailInput = signUpForm.emailInput;
	/*const inputEmptyResponse = {
		usernameInput : "username.",
		passwordInput : "password.",
		emailInput : "email."
	};*/

	event.preventDefault();
	if(usernameInput.value=="" || passwordInput.value=="" || emailInput.value=="" ) {
		alert(`Please fill in the required fields.`);
		return false;
	} else {
		if(passwordInput.value != passwordCheck.value) {
			alert('Please confirm your password.');
			return false;
		} else{
			signUpSubmit(usernameInput, passwordInput, emailInput);
			return true;
		}
	}

}


function init() {
	signUpForm.addEventListener("submit", checkInput);
}

init();