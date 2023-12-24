document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
   
    if(username === "" || password === "") {
       alert('Please fill in all fields');
    } else {
       // Code to execute when form is submitted
       alert('You are logged in');
    }
   });