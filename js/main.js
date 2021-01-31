
// АНИМАЦИЯ БУРГЕРА //
document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    })

// ВЫЕЗЖАЕТ МЕНЮ //
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.survive__column-menu').classList.toggle('animate');

    if('.survive__column-menu.animate') {
    document.querySelector('.survive__column-img').classList.toggle('active');
    }
})

// ПЛАВНАЯ НАВИГАЦИЯ ПО САЙТУ //

const smoothLinks = document.querySelectorAll('a[href^="#"]');
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
})