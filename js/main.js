
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

(function()
{
let speed = 600;
let moving_frequency = 1;
let links = document.getElementsByTagName('a');
let href;
for(let i=0; i<links.length; i++)
{   
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
    {
        links[i].onclick = function()
        {
            let element;
            let href = this.attributes.href.nodeValue.toString();
            if(element = document.getElementById(href.substr(1)))
            {
                let hop_count = speed/moving_frequency;
                let getScrollTopDocumentAtBegin = getScrollTopDocument();
                let gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                for(let i = 1; i <= hop_count; i++)
                {
                    (function()
                    {
                        let hop_top_position = gap*i;
                        setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                    })();
                }
            }

            return false;
        };
    }
}

let getScrollTopElement =  function (e)
{
    let top = 0;

    while (e.offsetParent != undefined && e.offsetParent != null)
    {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
    }

    return top;
};

let getScrollTopDocument = function()
{
    return document.documentElement.scrollTop + document.body.scrollTop;
};
})();

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