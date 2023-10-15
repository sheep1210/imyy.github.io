let slide = document.querySelectorAll('.slide');
let inner = document.querySelectorAll('.inner');

slide.forEach((s, i) => {
s.addEventListener('click', () => {
    slide.forEach((S1) => {
        S1.classList.remove('active');
        S1.style.transform = `translateX(${slide[i].getAttribute('data-t')}%)`;
        inner.forEach((inn) => {
            inn.style.transform = `translateX(${inner[i].getAttribute('data-i')}%)`;
        })
    })
    slide[i].classList.add('active')
})
})