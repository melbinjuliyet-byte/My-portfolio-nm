// Button click event

document.getElementById("learnMoreBtn").addEventListener("click", function() {

  alert("Thanks for visiting! Scroll down to learn more about me.");

});

// Form submission

const form = document.getElementById("contactForm");

const status = document.getElementById("formStatus");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  if (name && email && message) {

    status.textContent = "Thank you for contacting me, " + name + "!";

    status.style.color = "green";

    form.reset();

  } else {

    status.textContent = "Please fill out all fields.";

    status.style.color = "red";

  }

});