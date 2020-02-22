const signUpForm = document.querySelector('.js-signUp');


function signUpSubmit() {
	console.log('AJAX 통신 준비 중');

	/* PYTHON
	$.ajax({
		url: '',
		type: 'POST',
		data: {},
		success: function(response){
			console.log(response);
		    //if(response['result'] == 'success'){

		    //}
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
			signUpSubmit();
			return true;
		}
	}

}


function init() {
	signUpForm.addEventListener("submit", checkInput);
}

init();