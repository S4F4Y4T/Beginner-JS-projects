
const prev    = document.querySelector("#prev"); //getting previous button
const next    = document.querySelector("#next"); //getting next button
const slide   = document.querySelectorAll(".slide"); //getting slide image

const auto = true;



const nextSlide = () => {
    //getting current class
    const current = document.querySelector(".current");
    //removing previous current class
    current.classList.remove("current");

    if(current.nextElementSibling){
        //adding current class to next image
        current.nextElementSibling.classList.add('current')
    }else{
        //adding current class to first image
        slide[0].classList.add("current");
    }
}

const prevSlide = () => {
    //getting current class
    const current = document.querySelector('.current');
    //removing previous current class
    current.classList.remove('current');

    if(current.previousElementSibling){
        //adding current class to previous image
        current.previousElementSibling.classList.add('current');
    }else{
        //adding current class to last image
        slide[slide.length - 1].classList.add('current');
    }
}

next.addEventListener('click', e => {
    nextSlide();    //switch to next image
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
  });
  prev.addEventListener('click', e => {
    prevSlide();    //switch to previous image
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
  });

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, 5000);
  }