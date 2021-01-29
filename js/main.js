
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
