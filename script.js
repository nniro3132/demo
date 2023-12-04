const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform login validation or submit data to the server
  // For demonstration purposes, just log the values
  console.log("Username:", username);
  console.log("Password:", password);
});

