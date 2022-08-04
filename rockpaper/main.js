const choice = document.querySelectorAll('.choice');
const score  = document.querySelector('.score');
const modal  = document.querySelector('.modal');
const restart= document.querySelector('.restart');
const result = document.querySelector('.modal-content');


const scoreboard = {
    player: 0,
    computer:0
}
function play(e){
    restart.style.display = 'inline-block';
    const playerchoice = e.target.id;
    const computerchoice =  getcomputerchoice();
    const winner = getwinner(playerchoice,computerchoice);
    const result = showwinner(playerchoice,computerchoice,winner);
}

function getcomputerchoice(){
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getwinner(p,c){
    if(p == c){
        return 'draw';
    }else if(p == 'rock'){
        if(c == 'paper'){
            return 'computer';
        }else{
            return 'player';
        }
    }else if(p == 'paper'){
        if(c == 'scissors'){
            return 'computer';
        }else{
            return 'player';
        }
    }else if(p == 'scissors'){
        if(c == 'rock'){
            return 'computer';
        }else{
            return 'player'
        }
    }
}

function showwinner(p,c,winner){
    if(winner == 'player'){
        scoreboard.player++;
        modal.style.display = 'block';
        result.innerHTML = `
        You Win
        <i id="rock" class="choice fas fa-hand-${p} fa-10x"></i>
        <p>computer choose ${c}</p>
        `;
    }else if(winner == 'computer'){
        scoreboard.computer++;
        modal.style.display = 'block';
        result.innerHTML = `
        You Lose
        <i id="rock" class="choice fas fa-hand-${c} fa-10x"></i>
        <p>You choose ${p}</p>
        `;
    }else{
        modal.style.display = 'block';
        result.innerHTML = `
        Its Draw
        <i id="rock" class="choice fas fa-hand-${c} fa-10x"></i>
        <p>computer choose ${c}</p>
        `;
    }
    //showing score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
}

//restarting game
restart.addEventListener('click', () => {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `;
});

window.addEventListener('click',modalclose);
choice.forEach(choice => choice.addEventListener('click', play));

function modalclose(e){
    if(e.target.className == 'modal'){
        modal.style.display = 'none';
    }
}