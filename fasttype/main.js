const time = document.querySelector('#time');
const current = document.querySelector('#current-word');
const score = document.querySelector('#score');
const message = document.querySelector('#message');
const type   = document .querySelector('#type');

let runtime = 5;
let isPlaying;
let scorenum = 0;

const words = ['fuck','suck','hack','motherfucker','sucker'];

window.addEventListener('load',init);

function init(){
    showword(words);
    type.addEventListener('input',startmatch);
    setInterval(countdown,1000);
    setInterval(checkstatus,50);

}

function showword(words){
    const randIndex = Math.floor(Math.random() * words.length);
    console.log(randIndex);
    current.innerHTML = words[randIndex];
}

function startmatch(){
    if(match()){
        isPlaying = true;
        runtime = 6;
        message.innerHTML = 'correct';
        showword(words);
        type.value = '';
        scorenum++;
    }else{
        isPlaying = false;
        message.innerHTML = 'Incorrect';
    }
    score.innerHTML = scorenum;
}

function match(){
    if(type.value == current.innerHTML){
        return true;
    }else{
        return false;
    }
}

function countdown(){
    if(isPlaying && runtime > 0){
        runtime--;
    }else if(runtime === 0){
        isPlaying = false;
    }

    time.innerHTML = runtime;
}

function checkstatus(){
    if(!isPlaying && time.innerHTML == 0){
        message.innerHTML = 'Game Over!!!';
        score.innerHTML = 0;
    }
}