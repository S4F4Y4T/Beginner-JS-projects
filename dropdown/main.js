const trigger = document.querySelectorAll('.cool li');
const back = document.querySelector('.dropdown');
const nav = document.querySelector('.top');

function enter(){
    this.classList.add('trigger','trigger-active');
    back.classList.add('open');

    const dropdown = this.querySelector('.drop');
    const dropcords = dropdown.getBoundingClientRect();
    const navcord  = nav.getBoundingClientRect();

    const cords = {
        height: dropcords.height,
        width: dropcords.width,
        top: dropcords.top - navcord.top,
        left:dropcords.left - navcord.left
    };

    back.style.setProperty('width',`${cords.width}px`);
    back.style.setProperty('height',`${cords.height}px`);
    back.style.setProperty('transform',`translate(${cords.left}px, ${cords.top}px)`);
}

function leave(){
    this.classList.remove('trigger','trigger-active');
    back.classList.remove('open');
}



trigger.forEach(trigger => trigger.addEventListener('mouseenter', enter));
trigger.forEach(trigger => trigger.addEventListener('mouseleave', leave));
