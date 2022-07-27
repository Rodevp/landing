const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

function setActiveSlide(i) {
    
    for (let slide of slides) {
        slide.classList.remove('active')
        slides[i].classList.add('active')
    }

    for (let dot of dots) {
        dot.classList.remove('active')
        dots[i].classList.add('active')
    }

}

for (let j = 0; j < dots.length; j++) {
    dots[j].addEventListener('click', e => {
        setActiveSlide(j)
    })
}

