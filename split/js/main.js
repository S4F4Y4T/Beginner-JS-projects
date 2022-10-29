window.addEventListener('load',() => {
    let handle = document.querySelector('.handle');
    let top    = document.querySelector('.top');
    let wrapper= document.querySelector('.wrapper');
    let skew = 0;
    let delta = 0;
    
    wrapper.addEventListener('mousemove',(e) => {
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        
        handle.style.left = e.clientX + delta + 'px';

        top.style.width= e.clientX + 1000 + delta + 'px';
    })
});