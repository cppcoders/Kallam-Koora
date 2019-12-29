function register() {

    function onSuccess(response) {

        location = ("../../index.html");

    }





    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username + "    " + password);
    if (username != password)
        fetch('http://127.0.0.1:5000/api/v2/?username=' + username + '&password=' + password)
        .then(onSuccess)
}