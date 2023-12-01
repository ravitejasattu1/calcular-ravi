let string = "";
let inputField = document.querySelector('input');
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        switch (buttonText) {
            case '=':
                try {
                    string = eval(string);
                    inputField.value = string;
                } catch (error) {
                    inputField.value = 'Error';
                }
                break;
            case 'C':
                // Remove the last character
                string = string.slice(0, -1);
                inputField.value = string;
                break;
            case 'AC':
                // Clear all
                string = '';
                inputField.value = '';
                break;
            default:
                string += buttonText;
                inputField.value = string;
                break;
        }
    });
});
