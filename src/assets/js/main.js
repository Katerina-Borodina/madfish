function mainPageTopSlider() {
    $('.latest_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            // {
            //     breakpoint: 600,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //     }
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
        prevArrow: '<div class="arrow-slider arrow-slider_left"></div>',
        nextArrow: '<div class="arrow-slider arrow-slider_right"></div>'
    });
}

function mainPageBottomSlider() {
    $('.blog_slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }],
        prevArrow: '<div class="arrow-slider arrow-slider_left-blog"></div>',
        nextArrow: '<div class="arrow-slider arrow-slider_right-blog"></div>'
    });
}

function navMunu() {
    let menu_mob = $(".menu_nav");
    $(".header_right-btn").on('click', () => {
        menu_mob.css("display", "block").css("right", 0).removeClass('menu-close').addClass('menu-open');
        $('thml').css("overflow", 'hidden');
        $('body').css("overflow", 'hidden');
        // $(".wrap").css("z-index", "1");
        // $(".menu_nav").css("z-index", "100");
    });

    $(".menu_nav-close").on('click', () => {
        menu_mob.css("right", '-100%').removeClass('menu-open').addClass('menu-close');
        setTimeout(function () {
            menu_mob.css("display", "none")
        }, 600);
        $('thml').css("overflow", 'auto');
        $('body').css("overflow", 'auto');
    });
}

function mainPageScrollToBlock() {
    $(".js-scroll-to-id-block").on('click', function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#this-block-id-to-scroll").offset().top
        }, 1000);
    });
}

function aboutPageTopSlider() {
    $('.about_slider-top').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }],
        prevArrow: '<div class="arrow-slider arrow-slider_left"></div>',
        nextArrow: '<div class="arrow-slider arrow-slider_right"></div>'
    });
}

function aboutPageBottomSlider() {
    $('.about_slider-bottom').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    centerMode: 0,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }],
        prevArrow: '<div class="arrow-slider arrow-slider_left"></div>',
        nextArrow: '<div class="arrow-slider arrow-slider_right"></div>'
    });
}

function heightAbsolute() {
    $('.js-append-height').height($('.js-height').height());
}

function projectPageBottomSlider() {
    $('.project_more_slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<div class="arrow-slider arrow-slider_left-blog"></div>',
        nextArrow: '<div class="arrow-slider arrow-slider_right-blog"></div>'
    });
}


$(document).ready(function () {
    const BODY = $('body');
    navMunu();

    if (BODY.hasClass('main-page')) {
        mainPageTopSlider();
        mainPageBottomSlider();
        mainPageScrollToBlock();
    }

    if (BODY.hasClass('about-page')) {
        aboutPageTopSlider();
        aboutPageBottomSlider();
        mainPageBottomSlider();
    }

    if (BODY.hasClass('project-page')) {
        heightAbsolute();
        projectPageBottomSlider();
    }
    //
    // if (BODY.hasClass('restaurant-page')) {
    //     restaurantPageScrollToBlock();
    //     restaurantPageHeaderSlider();
    //     restaurantPageTopLoopSlider();
    //     restaurantPageBottomSlider();
    //     restaurantPageBottomLoopSlider();
    // }
    //
    // if (BODY.hasClass('tennis-page')) {
    //     tennisPageHeaderSlider();
    //     tennisPageScrollToBlock();
    // }
    //

    //
    // if (BODY.hasClass('active-page')) {
    //     activePageScrollToBlock();
    //     aboutPagebottomSlider();
    // }
    //
    // if (BODY.hasClass('reserv-page')) {
    //     reservPageFormReservation();
    //     popup();
    //     popupForm();
    //     MainPageFormReservation();
    // }
    //
    // if (BODY.hasClass('test')) {
    //     test();
    // }
});


