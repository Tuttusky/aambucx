var cpnBtn = document.getElementById("cpnCode"); // This should be "cpnCode" as it's the id of your tap to copy element
var cpnCodeText = document.getElementById("cpnCodeText"); // The ID for the text element containing the code

cpnBtn.addEventListener('click', () => { 
    // Copy the coupon code text to the clipboard
    navigator.clipboard.writeText(cpnCodeText.innerHTML); // Use the correct ID

    // Change the button text to indicate it has been copied
    cpnBtn.innerHTML = 'Copied';
    // Reset the button text after 2 seconds
    setTimeout(() => {
        cpnBtn.innerHTML = 'Tap to copy';
    }, 2000);
});
