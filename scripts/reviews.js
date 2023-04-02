const wrapper = document.querySelector('.reviews-wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 1; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})