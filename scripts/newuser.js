function newuser(form) {
	registercode = new Array("982629972", "432176");/* 1st code for admin, 2nd one for members code*/

	if(form.code.value == registercode[0]) {
		alert("Please contact your Administrator to recieve your admin username and password. The member site username is 'members' and password is 'members'")/* When you enter admin code */
	}
	else if(form.code.value == registercode[1]) {
		alert("Hey Beta Testers! Username - 'members', password - 'members'"))/* Member username and password*/
	}
	else {
		alert("Incorrect code. Please re-try or ask natesway4 for the beta code again!.")/* No such user */
	}
}
