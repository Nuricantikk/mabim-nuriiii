function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "SaharGanteng" && password =="SaharGanteng"){
            if(confirm("Apakah Anda Ingin Login?") == true){
                window.location.href = "https://github.com/vinsmkod"
            } else {
                alert("Login dibatalkan karena anda bukan jawa!");
            }
            
    } else{
            if (done == 0) {
                alert("Username/Pasword Salah");
            }
    }
} 