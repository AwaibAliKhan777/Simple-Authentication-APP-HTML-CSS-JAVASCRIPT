document.getElementById("loginForm").addEventListener('submit',function(event){
    event.preventDefault();

    // predefined credentials

    const validUsername = "admin";
    const validPassword = "password123";

    // Get user input

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    //validate credentials

    if(username===validUsername && password===validPassword){

        //Redirect to welcome page 

        window.location.href = "welcome.html";
    }

    else{
        //show error message

        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = "Invalid username or password!";
    }
});