function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Admin1@rhyzen16" && password === "RspyCMDS") {
        alert("Login successful");
        window.location.href = 'https://www.tinkercad.com/';
    } else {
        alert("Login failed");
    }
}
