const loginForm = document.querySelector('.js-login');
const clickSignUp = document.getElementById("js-openSignUp");

function openSignUp(event) {
	event.preventDefault();
	location.href = "signup.html";
	return false;
}

function loginSubmit(username, password) {
	
	const userId = username.value;
	const userPassword = password.value;

	/*	PYTHON
	$.ajax({
		url: '/login',
		type: 'POST',
		data: { username: userId, password: userPassword },
		success: function(response){
		    if(response['result'] == 'success'){
		    	alert('로그인 성공!');
		    } 
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
		loginSubmit(username, password);
		return true;
	}
}


function init() {
	clickSignUp.addEventListener("click", openSignUp);
	loginForm.addEventListener("submit", submitLogin);
}

init();