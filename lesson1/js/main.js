$(function () {

    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        appendArrows: $('.certificate__arrows'),
        responsive:
            [
                {
                    breakpoint: 1281,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        arrows: false,
                        dots: true,
                        appendDots: $('.team__slide-mobile'),
                        infinite: true,
                        slidesToShow: 1,
                    }
                }
            ]
    })
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')(
        )
    });
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')(
        )
    });

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.testimonials__dots'),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.certificate__arrows'),

    });

    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')(
        )
    });
    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')(
        )
    })

    $('.program__accordeon-link').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('program__accordeon-link--active')
        $(this).children('.program__accordeon-text').slideToggle()
    })

    /* A smooth scroll + Margin upside */

    $(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top - 150
        $('body,html').animate({ scrollTop: top }, 1500)
    });



    $('.header__burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
        $('.header__burger').toggleClass('header__burger--active')
    })

    /* -------------------Простой аккордеон------------------------ */

    $('.questions__more').on('click', function() {
        $(this).next().slideToggle()
    })




})


