    // JavaScript code for form validation
	// Prevent form from submitting
  document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('myForm');

      form.addEventListener('submit', function(evt) {
        evt.preventDefault(); 

    // Retrieve the input field value
    let inputField = document.getElementById('inputField');
    let inputValue = inputField.value;
      console.log('Input value:', inputValue);

    // Regular expression pattern for alphanumeric input
    let regex = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if(!regex.test(inputValue)) {
      // Invalid Input: Display error message
      alert("Error: Please enter only alphanumeric characters.")
    } else {
      //Valid Input: Display Confirmation and submit the form
      alert("Form Submitted Successfully!")
    }

      });
    });
