function submit() {
    var password = document.getElementById("pass");
    var email = document.getElementById("email");
    var showPassword = password.value;
    var showEmail = email.value;
    alert(`email: ${showEmail} \npassword: ${showPassword}`);
    console.log(`email: ${showEmail} \npassword: ${showPassword}`);
}