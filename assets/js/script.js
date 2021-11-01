const burger = document.querySelector('.header__burger')
const header = document.querySelector('.header__menu')

if (burger) {
    burger.addEventListener("click", function(e) {
        document.body.classList.toggle('lock')
        burger.classList.toggle('active');
        header.classList.toggle('active');
    });
}

const headerLinks = document.querySelectorAll('.header__link[data-goto]');
if (headerLinks.length > 0) {
    headerLinks.forEach(headerLink => {
        headerLink.addEventListener("click", onHeaderLinkClick);
    });

    function onHeaderLinkClick(e) {
        const headerLink = e.target;
        if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
            const gotoBlock = document.querySelector(headerLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            if (burger.classList.contains('active')) {
                document.body.classList.remove('lock')
                burger.classList.remove('active');
                header.classList.remove('active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

console.log(
    `Score: 141 / 150
    [+] вёрстка валидная +10
    [±] вёрстка семантическая +16
    [+] для оформления СV используются css-стили +10
    [+] контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10
    [+] вёрстка адаптивная +10
    [+] есть адаптивное бургер-меню +10
    [+] на странице СV присутствует изображение - фото +10
    [+] контакты для связи и перечень навыков оформлены в виде списка ul > li +10
    [+] CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
    [+] CV содержит пример вашего кода +10
    [+] CV содержит изображения-ссылки на выполненные вами проекты +10
    [+] CV выполнено на английском языке +10
    [+] выполнены требования к Pull Request +10
    [-] есть видеорезюме автора CV
    [±] изайн, оформление, качество выполнения CV +5`
);
