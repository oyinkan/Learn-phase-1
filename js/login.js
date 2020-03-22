function loginDetails() {
	event.preventDefault();

	const email = document.querySelector("#email");
	const password = document.querySelector("#password");

	const user = {
		email: email.value,
		password: password.value
	}

	console.log(user);

	const details = document.getElementById("form-details");
	details.innerHTML = "<h1>Email: " +user.email+ "<br> Password: " +user.password+ "</h1>";
}