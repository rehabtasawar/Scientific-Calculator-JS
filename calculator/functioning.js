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
            
            else if (btntext === 'CE') {
                screen.value = screen.value.slice(0, -1);
            }
            
            else if (btntext === '=') {
                try {
                    screen.value = eval(screen.value);
                } catch (err) {
                    screen.value = 'Error';
                }
            } 
            
            else {
                screen.value += btntext;
            }
        });
    });

    function sin()
    {
        screen.value = Math.sin(screen.value);
    }
});
