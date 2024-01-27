let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function showDatePicker() {
  document.getElementById("birthday").style.display = "block";
  document.getElementById("custom-birthday").style.display = "none";
}

function showLoginPrompt() {
    var username = prompt("Enter your username:");
    if (username) {
      alert("You are logged in as " + username);
    }
  }
  function showSignUpPrompt() {
    var isSignedUp = localStorage.getItem('signedUp');
    if (isSignedUp) {
      alert("You have already signed up.");
    } else {
      alert("You have successfully signed up!");
      localStorage.setItem('signedUp', true);
    }
  }