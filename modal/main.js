
const modal  = document.querySelectorAll('.modal');
const close  = document.querySelectorAll('.close');
const modalbtn = document.querySelectorAll('#modal-btn');

modalbtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const attr = btn.getAttribute('data-modal');
        document.getElementById(attr).style.display = 'block'
    });
})

close.forEach((cls) => {
    cls.addEventListener('click',() => {
        cls.closest('.modal').style.display = 'none';
    })
})

window.addEventListener('click',outsideClick);

function outsideClick(e){
    modal.forEach((modal) => {
        if(e.target == modal){
            modal.style.display = 'none';
        }
    }) 
}


