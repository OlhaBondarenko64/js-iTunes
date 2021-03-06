import {videoPlayerInit} from './videoPlayer.js';
import {musicPlayerInit} from './musicPlayer.js';
import {radioPlayerInit} from './radioPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');
// console.log(playerBtn);
// console.log(playerBlock);

const deactivationPlayerBtn = () => {
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));
};

playerBtn.forEach((btn, index) => btn.addEventListener('click', () => {
    deactivationPlayerBtn();
    btn.classList.add('active');
    playerBlock[index].classList.add('active');
}));

videoPlayerInit();
musicPlayerInit();
radioPlayerInit();