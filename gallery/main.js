const current = document.querySelector('.main');
const imgs    = document.querySelectorAll('.gallerys img');

imgs[0].style.opacity = 0.4;

imgs.forEach((img) => {
    
    img.addEventListener('click', (e) => {
        //removing previous fadein effect
        imgs.forEach((selected) => selected.style.opacity = 1);

        //adding image to main image
        current.src = img.src;

        current.classList.add('fadein');

        setTimeout(() => current.classList.remove('fadein'), 500);
        
        //adding fadin effect to selected image
        img.style.opacity = 0.4;
    })
});

