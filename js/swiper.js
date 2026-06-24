
var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable:true,
    },
    autoplay:{
        delay:2500,
    },
    loop:true,
    grabCursor: true
});

/* swiper slide products */
var swiper = new Swiper(".slide_product", {
    slidesPerView: 2,
    spaceBetween: 10,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
        500: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 7,
            spaceBetween: 20
        }
    }
});

















