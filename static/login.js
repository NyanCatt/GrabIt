const loginForm = document.querySelector('.js-login');
const clickSignUp = document.getElementById("js-openSignUp");

function openSignUp(event) {
	event.preventDefault();
	location.href = "signup.html";
	return false;
}

function loginSubmit() {
	console.log('AJAX 통신 준비 중');

	/*	PYTHON
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

function submitLogin(event) {
	const username = loginForm.user_id;
	const password = loginForm.user_password;

	event.preventDefault();
	if(username.value=="" || password.value=="") {
		alert('Please fill in your username and password.');
		return false;
	} else {
		loginSubmit();
		return true;
	}
}


function init() {
	clickSignUp.addEventListener("click", openSignUp);
	loginForm.addEventListener("submit", submitLogin);
}

init();