
// АНИМАЦИЯ БУРГЕРА //
document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
});

// ВЫЕЗЖАЕТ МЕНЮ //
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.survive__column-menu').classList.toggle('animate');

    if('.survive__column-menu.animate') {
    document.querySelector('.survive__column-img').classList.toggle('active');
    }
});

// ПЛАВНАЯ НАВИГАЦИЯ ПО САЙТУ //

const smoothLinks = document.querySelectorAll(['a[href="#top"], a[href="#about"], a[href="#features"], a[href="#system_req"], a[href="#quotes"]']);
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}; 

// ПРОПАДАЕТ МЕНЮ ПРИ КЛИКЕ //

document.querySelector('.survive__column-menu').addEventListener('click', function() {
    document.querySelector('.survive__column-menu').classList.remove('animate');

    if('.survive__column-menu.animate') {
        document.querySelector('.survive__column-img').classList.remove('active');
        }
        document.querySelector('.burger span').classList.remove('active');
});

// СЛАЙДЕР //

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующий слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}
setInterval(plusSlide, 3500); // АВТОМАТИЧЕСКОЕ ПЕРЕЛИСТЫВАНИЕ ИНТЕРВАЛ
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("whois__slider-dots-item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dots", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dots";
}