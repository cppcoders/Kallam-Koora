function login() {

    function onSuccess(response) {
        response.json().then(go);


    }



    function go(objectz) {
        if (objectz.length > 0) {
            location = "/pages/Home/index.html";
        } else {
            e = document.getElementById('wrong');
            e.classList.remove("dat");
        }


    }

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == 'admin' && password == 'admin')
        location = "/pages/Home/index.html";
    console.log(username + "    " + password);
    fetch('http://127.0.0.1:5000/api/v1/?username=' + username + '&password=' + password)
        .then(onSuccess)
}