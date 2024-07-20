document.addEventListener('DOMContentLoaded', () => {
    let rangeInput = document.getElementById('volume');
    let rangeValue = document.getElementById('rangeValue');
    let passwordInput = document.getElementById('pass-input');
    let showHideIcon = document.getElementById('show-hide');
    
    // ======================Range JavaScript Code===================
    // Initial setting of the range value
    rangeValue.textContent = rangeInput.value;
    
    // Update the displayed range value when the input changes
    rangeInput.addEventListener('input', (event) => {
        rangeValue.textContent = event.target.value;
    });
    // End of range
    
    // Show and hide password feature
    showHideIcon.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showHideIcon.classList.remove('fa-eye-slash');
            showHideIcon.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            showHideIcon.classList.remove('fa-eye');
            showHideIcon.classList.add('fa-eye-slash');
        }
    });
    
    // End Of document Loaded 

});