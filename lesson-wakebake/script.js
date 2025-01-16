

document.addEventListener("DOMContentLoaded", function () {

    // ПОПАП НА КНОПКУ //
    const closeButton = document.querySelector(".popup__close-button")
    const popup = document.querySelector(".popup")
    const overlay = document.querySelector(".overlay")
    const popupButton = document.querySelector('.hero__start-button')
    popupButton.onclick = function () {
        overlay.classList.remove("hidden-special");
        popup.classList.remove("hidden");
    }
    function closePopup() {
        overlay.classList.add("hidden-special");
        popup.classList.add("hidden");
    }
    closeButton.onclick = closePopup
    overlay.onclick = closePopup

    // АККОРДЕОН //
    let accWrapper = document.querySelectorAll(".program__accordion");
    let accHidden = document.querySelectorAll(".program__accordion-inside");
    accWrapper.forEach((el, index) => {
        el.onclick = () => {
            // КАК В МАКЕТЕ - ТРАНЗИШН ПРИ ОТКРЫТИИ ЕСТЬ ПРИ ЗАКРЫТИИ НЕТ (ГОВНОКОД) //
            if (!accHidden[index].classList.contains("accordion__hidden")) {
                accHidden[index].style.transition = "0s";
                accHidden[index].classList.toggle("accordion__hidden")
            } else {
                accHidden[index].style.transition = "700ms";
                accHidden[index].classList.toggle("accordion__hidden");
            }
        }
    });

    // ТАБЫ //
    let category = document.querySelectorAll('.program__category')
    let tabs = document.querySelectorAll('.program__tabs-item')
    tabs.forEach((tab, tabIndex) => {
        tab.addEventListener('click', function () {
            tabs.forEach(item => {
                item.classList.remove('tab-active');
            });
            tab.classList.add('tab-active');
            category.forEach(content => {
                content.classList.remove('active');
            });
            category[tabIndex].classList.add('active');
        });
    });

    // SWIPER //
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,

        pagination: {
            el: ".slider__pages",
            type: "fraction",
        },
        navigation: {
            nextEl: ".gallery__right",
            prevEl: ".gallery__left",
        },
    });

    // Функция для окраски левой кнопки при контакте с первым слайдером
    const prevButton = document.querySelector('.gallery__left');
    function updatePrevButtonColor() {
        if (!prevButton.classList.contains('swiper-button-disabled')) {
            document.querySelector(".gallery__left path").style.fill = "var(--akcentnyy)"
            document.querySelector(".gallery__left circle").style.stroke = "var(--akcentnyy)"
        } else {
            document.querySelector(".gallery__left path").style.fill = ""
            document.querySelector(".gallery__left circle").style.stroke = ""
        }
    }
    swiper.on('slideChange', function () {
        updatePrevButtonColor();
    });

    // ВТОРОЙ СВАЙПЕР //
    const swiperTwo = new Swiper(".swiperTwo", {
        slidesPerView: 3,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".reviews__right",
            prevEl: ".reviews__left",
        },
        scrollbar: {
            el: ".reviews__scrollbar",
        },
        on: {
            init: function () {
                const slides = this.slides;
                slides.forEach((slide, index) => {
                    if (index !== this.activeIndex + 1) { 
                        slide.classList.add('scale');
                    }
                });
            },
            slideChange: function () {
                this.slides.forEach(slide => slide.classList.remove('scale'));

                const slides = this.slides;
                slides.forEach((slide, index) => {
                    if (index !== this.activeIndex + 1) {
                        slide.classList.add('scale');
                    }
                });
            }
        }
    });
});






