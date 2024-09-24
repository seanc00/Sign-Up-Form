function validateForm() {
  // Get form values
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  // Regular expressions for validation
  const nameRegex = /^[a-zA-Z,.''-]{2,}$/; // Letters and common name characters only
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Simple email format
  const phoneRegex = /^[0-9]{10,15}$/; // Allows 10-15 digits for phone numbers

  // Validation logic
  let isValid = true;

  // Validate first name
  if (!firstName || !nameRegex.test(firstName)) {
    alert('Please enter a valid first name.');
    setInvalid(document.getElementById('first-name'));
    isValid = false;
  } else {
    setValid(document.getElementById('first-name'));
  }

  // Validate last name
  if (!lastName || !nameRegex.test(lastName)) {
    alert('Please enter a valid last name.');
    setInvalid(document.getElementById('last-name'));
    isValid = false;
  } else {
    setValid(document.getElementById('last-name'));
  }

  // Validate email
  if (!email || !emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    setInvalid(document.getElementById('email'));
    isValid = false;
  } else {
    setValid(document.getElementById('email'));
  }

  // Validate phone number
  if (!phone || !phoneRegex.test(phone)) {
    alert('Please enter a valid phone number (10-15 digits).');
    setInvalid(document.getElementById('phone'));
    isValid = false;
  } else {
    setValid(document.getElementById('phone'));
  }

  // Validate passwords
  if (!password) {
    alert('Please enter a password.');
    setInvalid(document.getElementById('password'));
    isValid = false;
  } else {
    setValid(document.getElementById('password'));
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    setInvalid(document.getElementById('confirm-password'));
    isValid = false;
  } else if (password && confirmPassword) {
    setValid(document.getElementById('confirm-password'));
  }

  // Final form submission check
  if (isValid) {
    alert('Data has been submitted!');
    // Proceed with form submission or additional logic
  }

  return isValid;
}

// Function to set input as valid
function setValid(element) {
  element.style.border = '2px solid green';
}

// Function to set input as invalid
function setInvalid(element) {
  element.style.border = '2px solid red';
}

// Add event listener for form submission
document.querySelector('.createAccBtn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission for validation
  validateForm();
});
