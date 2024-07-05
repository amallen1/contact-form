const form = document.getElementById("contact-form");
const radioOptionContainer = document.querySelectorAll(".radio-option");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const radioGroup = document.getElementById("radio-group");
const alertBox = document.getElementById("alert-box");
const consentError = document.querySelector(".checkbox-option + .error-msg");

const removeError = (inputElement) => {
  inputElement.classList.remove("error");
  inputElement.nextElementSibling.classList.remove("show");
};

const showAlert = () => {
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
};

const onSubmit = (e) => {
  e.preventDefault();

  let hasErrors = false;
  const inquiry = document.querySelector('input[name="inquiry"]:checked');

  if (!firstName.value) {
    firstName.classList.add("error");
    firstName.nextElementSibling.classList.add("show");
    hasErrors = true;
  }

  if (!lastName.value) {
    lastName.classList.add("error");
    lastName.nextElementSibling.classList.add("show");
    hasErrors = true;
  }

  if (!email.value) {
    email.classList.add("error");
    email.nextElementSibling.classList.add("show");
    hasErrors = true;
  }

  if (!inquiry) {
    radioGroup.nextElementSibling.classList.add("show");
    hasErrors = true;
  }

  if (!message.value) {
    message.classList.add("error");
    message.nextElementSibling.classList.add("show");
    hasErrors = true;
  }

  if (!consent.checked) {
    consent.classList.add("error");
    consentError.classList.add("show");
    hasErrors = true;
  }

  let formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    inquiry: inquiry ? inquiry.value : null,
    message: message.value,
    consent: consent.checked,
  };

  if (!hasErrors) {
    showAlert();
    form.reset();
    console.log("Form Data:", formData);
  }
};

radioOptionContainer.forEach((option) => {
  option.addEventListener("click", () => {
    const radioInput = option.querySelector('input[type="radio"]');
    radioInput.checked = true;
  });
});

firstName.addEventListener("focus", () => removeError(firstName));
lastName.addEventListener("focus", () => removeError(lastName));
email.addEventListener("focus", () => removeError(email));
radioGroup.addEventListener("click", () => removeError(radioGroup));
message.addEventListener("focus", () => removeError(message));
consent.addEventListener("focus", () => {
  consent.classList.remove("error");
  consentError.classList.remove("show");
});

form.addEventListener("submit", onSubmit);
