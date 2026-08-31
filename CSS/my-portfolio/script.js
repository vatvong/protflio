
const modeBtn = document.getElementById('mode-btn');

modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        modeBtn.innerText = '☀️';
    } else {
        modeBtn.innerText = '🌙';
    }
});