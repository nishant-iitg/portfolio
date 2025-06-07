document.addEventListener('DOMContentLoaded', function() {
    // Text to be typed
    const name = "Nishant Bharti.";
    const typingElement = document.getElementById('typed-name');
    
    // Typing speed in milliseconds
    const typingSpeed = 150;
    // Delay before starting the animation (in milliseconds)
    const startDelay = 500;
    
    // Function to simulate typing
    function typeWriter(text, element, speed) {
        let i = 0;
        element.textContent = ''; // Clear any existing content
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
            // The cursor will keep blinking because of the CSS animation
        }
        
        // Start typing after a short delay
        setTimeout(type, startDelay);
    }
    
    // Start the typing animation
    typeWriter(name, typingElement, typingSpeed);
});
