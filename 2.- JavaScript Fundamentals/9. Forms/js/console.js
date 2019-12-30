import $ from 'jquery';
// PREVENTING FORM SUBMISSION
//THE SUBMIT EVENT
let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    // FORM.ELEMENTS[]
	let user = form.elements['user'];
	let avatarFile = form.elements['avatar-file'];

	let posting = {
		user: user.value,
		avatarFile: avatarFile.value
	};
	
	let promise = $.post(
		"http://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users", posting
    );
     //SHOWING VALIDATION ERRORS
	promise.then(
	    data => console.log('success: ', data),
	    error => console.log('error: ', error)
	);
	
//prevent the browers from submitting the form
	event.preventDefault();

});