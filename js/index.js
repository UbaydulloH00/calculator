document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('.block_button input[type="button"]');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const buttonValue = this.value;
  
        if (buttonValue === 'DEL') {
          // Handle delete functionality
          display.value = display.value.slice(0, -1);
        } else if (buttonValue === 'RESET') {
          // Handle reset functionality
          display.value = '';
        } else if (buttonValue === '=') {
          // Handle evaluation functionality
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = 'Error';
          }
        } else {
          // Append the clicked button's value to the display
          display.value += buttonValue;
        }
      });
    });
});
