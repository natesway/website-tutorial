function check(form) {
    username = new Array("admin1", "admin2", "members");
    password = new Array("admin1", "admin2", "members");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('../html/secret.html')/* The Administrator homepage */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]) {
		location.replace('../index.html')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Incorrect Password")
	}
	else {
		alert("Incorrect Username or Password")
	}
}
