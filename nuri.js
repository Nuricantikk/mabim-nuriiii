function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "Nuri" && password =="Nuri"){
            if(confirm("Apakah Anda Ingin Login?") == true){
                window.location.href = "https://github.com/Nuricantikk"
            } else {
                alert("Login dibatalkan karena anda salah!");
            }
            
    } else{
            if (done == 0) {
                alert("Username/Pasword Salah");
            }
    }
} 
