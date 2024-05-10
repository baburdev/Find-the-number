const form = document.querySelector('.form');
const input = document.querySelector('.input');
const box = document.querySelector('.box');
const RandomNum = parseInt(Math.random() * 100 + 1);

refreshPage = () => {
    window.location.reload();
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    const value = Number(input.value);
    input.value = '';
    
    if(value > RandomNum){
        box.textContent = 'Enter a smaller number than ' + value;
    } else if(value < RandomNum){
        box.textContent = 'Enter a bigger number than ' + value;
    } else {
        box.textContent = 'Well done!, It was: ' + value;
        box.style.backgroundColor = '#08cc43';
    }
});