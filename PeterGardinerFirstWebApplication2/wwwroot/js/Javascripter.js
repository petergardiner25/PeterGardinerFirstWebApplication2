var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    alert('From ' + document.getElementById('from').value + ', ' + 'Email ' + document.getElementById('email').value + 'Message' + document.getElementById('message').value);
});