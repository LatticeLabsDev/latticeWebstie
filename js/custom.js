// All elements selected here
const menuBtn = document.querySelector('.menuBtn')
const closeMenuBtn = document.querySelector('.closeMenuBtn')
const mobileMenuBody = document.querySelector('.mobileMenu')
const allMobileMenus = document.querySelectorAll('.mobileDropdownMenuItems .accordion-body a')

// Controll open and close menu
menuBtn.addEventListener('click', () => {
    mobileMenuBody.style.width = "100%";
})
closeMenuBtn.addEventListener('click', () => {
    mobileMenuBody.style.width = "0%";
})

// Handle Hiding menues after click

allMobileMenus.forEach(item => {
    item.addEventListener('click', event => {
        mobileMenuBody.style.width = "0%";
    })
})

// Slider Controller
$('.driveCardsSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});