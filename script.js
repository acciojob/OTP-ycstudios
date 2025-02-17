// Get all input fields
const codes = document.querySelectorAll('.code');

// Focus first input on load
document.getElementById('code-1').focus();

// Add event listeners to all input fields
codes.forEach((code, idx) => {
    // Handle input
    code.addEventListener('input', (e) => {
        const value = e.target.value;
        
        // Only allow numbers
        if (!value.match(/[0-9]/)) {
            code.value = '';
            return;
        }

        // Move to next input if available
        if (value && idx < codes.length - 1) {
            const nextInput = document.getElementById(`code-${idx + 2}`);
            nextInput.focus();
        }
    });

    // Handle keydown
    code.addEventListener('keydown', (e) => {
        // Handle backspace
        if (e.key === 'Backspace') {
            // If current field is empty and we're not on the first field,
            // move to previous field
            if (!code.value && idx > 0) {
                e.preventDefault();
                const prevInput = document.getElementById(`code-${idx}`);
                prevInput.value = '';
                prevInput.focus();
            }
            // If current field has a value, just clear it
            else if (code.value) {
                code.value = '';
            }
        }
    });
});