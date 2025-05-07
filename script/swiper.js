document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
        },
        loop: true
    });
});