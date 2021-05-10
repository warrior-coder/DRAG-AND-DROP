const CELLS = document.querySelectorAll('.cell');
const CARD = document.querySelector('.card_container');

CARD.addEventListener('dragstart', () => {
    setTimeout(() => {
        CARD.classList.add('hide');
    }, 1);
});

CARD.addEventListener('dragend', () => {
    CARD.classList.remove('hide');
});

// for (let i = 0; i < CELLS.length; i++) {
//     console.log('sdsd');
//     CELLS[i].addEventListener('dragover', () => {
//         console.log('OVER');
//     });
//     CELLS[i].addEventListener('dragenter', () => {
//         console.log('ENTER');
//     });
// }
for (const cell of CELLS)
{
    cell.addEventListener('dragover', (e) =>
    {
        e.preventDefault();
    });
    cell.addEventListener('drop', () =>
    {
        cell.append(CARD);
    });

    // Optional part for cell glow
    cell.addEventListener('dragenter', () => { 
        cell.classList.add('glow');
    });
    cell.addEventListener('dragleave', () => {
        cell.classList.remove('glow');
    });
    
}