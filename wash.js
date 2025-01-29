document.addEventListener('DOMContentLoaded', function () {
    // Payment Option Button functionality
    const paymentOptionButton = document.getElementById('paymentOptionButton');
    const paymentOptionSection = document.getElementById('paymentOptionSection');
    const nextStepButton = document.getElementById('nextStepButton');
    const paymentDetails = document.getElementById('paymentDetails');
    
    // Toggle Payment Option section visibility when the Payment Option button is clicked
    paymentOptionButton.addEventListener('click', function() {
        paymentOptionSection.style.display = 'block'; // Show the payment options
    });
    
    // Check if a payment option is selected
    const paymentOptions = document.querySelectorAll('input[name="paymentOption"]');
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            nextStepButton.disabled = false; // Enable the Continue button when an option is selected
        });
    });

    // When the Continue button is clicked
    nextStepButton.addEventListener('click', function() {
        // Hide the payment option section
        paymentOptionSection.style.display = 'none';
        
        // Optionally show a confirmation message
        alert("Payment Option selected. Proceeding with your form submission.");
        
        // Show payment details section
        paymentDetails.style.display = 'block'; // Show payment instructions
    });

    // Show payment details when the 'How to Pay' button is clicked
    const paymentButton = document.getElementById('paymentButton');
    paymentButton.addEventListener('click', function() {
        paymentDetails.style.display = 'block'; // Show the payment instructions section
    });

    // Handle form submission
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
        // Prevent page refresh
        event.preventDefault();
        
        // Show an alert message when the form is submitted
        alert("Form submitted! A confirmation message will be sent to you after payment.");
        
        // You can add your form submission logic here (e.g., send the data to a server)
        
        // Optionally, reset the form
        form.reset();
    });
});
