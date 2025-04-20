console.log('Hello from global scope');

function changeText() {
    document.querySelector('h2').textContent = 'Hello form Callback';
}

const timerId = setTimeout(changeText, 4000);   // setTimeout returns the timer

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer Cancelled');
    
});