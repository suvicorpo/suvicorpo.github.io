// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('pitch-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert('Thanks for reaching out!');
      form.reset();
    } else {
      alert('Oops! There was a problem submitting your form.');
    }
  }).catch(error => {
    alert('Oops! There was a problem submitting your form.');
  });
});

// Make sure this runs after the DOM is ready
window.addEventListener("load", () => {
  const button = document.querySelector(".mobile-nav-toggle");
  const nav = document.querySelector(".nav-links");

  if (!button || !nav) {
    console.warn("Button or nav not found!");
    return;
  }

  // Always remove previous listener first
  button.replaceWith(button.cloneNode(true));
  const newButton = document.querySelector(".mobile-nav-toggle");

  newButton.addEventListener("click", () => {
    console.log("Mobile nav button clicked!");
    nav.classList.toggle("open");
  });
});
