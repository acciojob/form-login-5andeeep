const form = document.getElementById('form1');

function getFormvalue() {
    //Write your code here
	const firstName = form[0].value;
	const lastName = form[1].value;
	alert(`${firstName} ${lastName}`);
}
