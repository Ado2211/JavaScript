function resetForm() {
    document.getElementById('forename').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('country').value = '';
    document.getElementById('message').innerText = 'The form has been reset.';
    document.getElementById('forename').focus() ;
}

function register() {
    document.getElementById('message').innerText = 'Your account has been created.';
}