const signinForm = document.getElementById("signin-form");
const signupForm = document.getElementById("signup-form");
const signinButton = document.getElementById("show-signin");
const signupButton = document.getElementById("show-signup");

signinButton.addEventListener("click", () => {
  signinForm.hidden = false;
  signupForm.hidden = true;

  signinButton.classList.add("active");
  signupButton.classList.remove("active");
});

signupButton.addEventListener("click", () => {
  signinForm.hidden = true;
  signupForm.hidden = false;

  signinButton.classList.remove("active");
  signupButton.classList.add("active");

  document.getElementById("signup-username").focus();
});

signupForm.addEventListener("submit", event => {
  event.preventDefault();

  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value;
  const confirmation = document.getElementById("confirm-password").value;
  const error = document.getElementById("signup-error");

  if (password !== confirmation) {
    error.textContent = "Passwords do not match.";
    return;
  }

  alert(`Account created for ${username}`);
});