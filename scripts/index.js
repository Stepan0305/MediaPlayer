import { radioInit } from './radio.js';
import { videoInit } from './video.js';
import { musicInit } from './music.js';

radioInit();
videoInit();
musicInit();

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

playerBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        deactivate();
        btn.classList.add('active');
        playerBlock[index].classList.add('active');
    })
});

const deactivate = () =>{
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));
};

console.log(playerBlock);
console.log(playerBtn);