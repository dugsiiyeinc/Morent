document.addEventListener('DOMContentLoaded', () => {
    const rangeInput = document.getElementById('volume');
    const rangeValue = document.getElementById('rangeValue');

// ======================Range Javscript Code===================
    // rangeValue.textContent = rangeInput.value
    rangeInput.addEventListener('input', (event) => {
        rangeValue.textContent = event.target.value;
    });
    rangeValue.textContent = rangeInput.value;

   




    // End Of document Loaded 
});
