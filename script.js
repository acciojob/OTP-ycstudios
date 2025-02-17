//your JS code here. If required.
// Get all input fields
const codes = document.querySelectorAll('.code');

// Focus first input on load
codes[0].focus();

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
            codes[idx + 1].focus();
        }
    });

    // Handle keydown
    code.addEventListener('keydown', (e) => {
        // Handle backspace
        if (e.key === 'Backspace') {
            // If current field is empty and we're not on the first field,
            // move to previous field and clear it
            if (!code.value && idx > 0) {
                e.preventDefault();
                codes[idx - 1].value = '';
                codes[idx - 1].focus();
            }
            // If current field has a value, just clear it
            else if (code.value) {
                code.value = '';
            }
        }
        // Handle left arrow
        else if (e.key === 'ArrowLeft' && idx > 0) {
            codes[idx - 1].focus();
        }
        // Handle right arrow
        else if (e.key === 'ArrowRight' && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    // Handle paste
    code.addEventListener('paste', (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        const numbers = pastedData.match(/[0-9]/g);
        
        if (numbers) {
            numbers.forEach((number, index) => {
                if (index < codes.length) {
                    codes[index].value = number;
                    if (index < codes.length - 1) {
                        codes[index + 1].focus();
                    }
                }
            });
        }
    });
});