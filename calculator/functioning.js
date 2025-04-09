document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('#screen');
    const buttons = document.querySelectorAll('.btn');
    
    // Loop through each button and add an event listener
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const btntext = e.target.innerText;

            if (btntext === 'AC') {
                screen.value = '';
            }

            if (btn === 'x') {
                screen.value = '*';
            }

            

            else if (btntext === 'CE') {
                screen.value = screen.value.slice(0, -1);
            }

            else {
                screen.value += btntext;
            }
        });
    });
});
