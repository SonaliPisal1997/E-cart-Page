document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('mouseover', () => {
            option.classList.add('expanded');
            const radioButton = option.querySelector('input[type="radio"]');
            if (radioButton) {
                radioButton.checked = true; // Set radio button to active
            }
        });

        option.addEventListener('mouseout', () => {
            option.classList.remove('expanded');
            const radioButton = option.querySelector('input[type="radio"]');
            if (radioButton) {
                radioButton.checked = false; // Remove radio button active state
            }
        });
    });
});
