document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".project-carousel", {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 30,
        pagination: {
        el: ".swiper-pagination",
        clickable: true
        }
    });
});

