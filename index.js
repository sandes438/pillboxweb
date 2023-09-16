function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == 'sarang' && password == "myPassword#68") {
        window.location.href = "https://sandes438.github.io/pillboxweb/home.html";
    } else {
        alert("You have entered wrong credentials")
    }

}
