document.querySelector("#loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.querySelector("#email").value.trim();
	const password = document.querySelector("#password").value.trim();
	const error = document.querySelector('.error');
	const details = document.getElementById("form-details");

	if (email != "" && password != "") {
		const user = {
			email: email,
			password: password
		}

		console.log(user);
		details.innerHTML = `<h1>Email:  ${user.email} <br> Password: ${user.password} </h1>`;
	}	

	else {
		error.innerHTML = "Email or Password missing"
	}
});