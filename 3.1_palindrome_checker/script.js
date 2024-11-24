function checkPalindrome(event) {
    // Prevent the form from submitting to refresh the page
    event.preventDefault();

    // Get the user input value
    const input = document.getElementById("inputField").value;

    // Remove spaces and convert to lowercase for comparison
    const basicString = input.replace(/\s+/g, '').toLowerCase();

    // Reverse the sanitized string
    const reversedString = basicString.split('').reverse().join('');

    // Get result message
    const result = document.getElementById("result");

    // Check if the original sanitized string matches the reversed string
    if (basicString === reversedString) {
        // Display success message
        result.textContent = `"${input}" is a palindrome!`;

    } else {
        // Display failure message
        result.textContent = `"${input}" is not a palindrome.`;
    }
}