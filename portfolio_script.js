// Example JavaScript for form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validate inputs
    if (name && email && message) {
      alert('Thank you for your message!');
      // You can add code here to send the form data to a server
    } else {
      alert('Please fill out all fields.');
    }
  });