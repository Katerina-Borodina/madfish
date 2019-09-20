function mainPageTopSlider() {
    $('.latest_slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
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
            }
        ],
        prevArrow: '<div class="arrow-slider arrow-slider_left"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)" transform="rotate(0)"><path d="M14.4789 20.2837L16.7539 18.0087L9.27891 10.5337L16.7539 3.05869L14.4789 0.78369L4.7289 10.5337L14.4789 20.2837Z" fill="#fff" /></g><defs><clipPath id="clip0"><rect width="19.5" height="19.5" fill="white" transform="translate(20.4922 20.2837) rotate(180)"/></clipPath></defs></svg></div>',
        nextArrow: '<div class="arrow-slider arrow-slider_right"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)" transform="rotate(0)"><path d="M14.4789 20.2837L16.7539 18.0087L9.27891 10.5337L16.7539 3.05869L14.4789 0.78369L4.7289 10.5337L14.4789 20.2837Z" fill="#fff" /></g><defs><clipPath id="clip0"><rect width="19.5" height="19.5" fill="white" transform="translate(20.4922 20.2837) rotate(180)"/></clipPath></defs></svg></div>'
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
        prevArrow: '<div class="arrow-slider arrow-slider_left-blog"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)" transform="rotate(0)"><path d="M14.4789 20.2837L16.7539 18.0087L9.27891 10.5337L16.7539 3.05869L14.4789 0.78369L4.7289 10.5337L14.4789 20.2837Z" fill="#fff" /></g><defs><clipPath id="clip0"><rect width="19.5" height="19.5" fill="white" transform="translate(20.4922 20.2837) rotate(180)"/></clipPath></defs></svg></div>',
        nextArrow: '<div class="arrow-slider arrow-slider_right-blog"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)" transform="rotate(0)"><path d="M14.4789 20.2837L16.7539 18.0087L9.27891 10.5337L16.7539 3.05869L14.4789 0.78369L4.7289 10.5337L14.4789 20.2837Z" fill="#fff" /></g><defs><clipPath id="clip0"><rect width="19.5" height="19.5" fill="white" transform="translate(20.4922 20.2837) rotate(180)"/></clipPath></defs></svg></div>'
    });
}

function navMunu() {
    let menu_mob = $(".menu_nav");
    $(".header_right-btn, .btn-butter").on('click', () => {
        menu_mob.css("display", "block").removeClass('menu-close').addClass('menu-open');
        $('html').css("overflow", 'hidden');
        $('body').addClass('menu-on');
    });

    $(".menu_nav-close").on('click', () => {
        menu_mob.removeClass('menu-open').addClass('menu-close');
        setTimeout(function () {
            menu_mob.css("display", "none")
        }, 500);
        $('html').css("overflow", 'auto');
        $('body').removeClass('menu-on');
    });

    $('.file input[type="file"]').change((e) => {
        let value = e.target.files[0].name;

        setTimeout(() => {
            $('.file span').html(value);
        }, 2500);
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
        prevArrow: '<div class="arrow-slider arrow-slider_left"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)" transform="rotate(0)"><path d="M14.4789 20.2837L16.7539 18.0087L9.27891 10.5337L16.7539 3.05869L14.4789 0.78369L4.7289 10.5337L14.4789 20.2837Z" fill="#fff" /></g><defs><clipPath id="clip0"><rect width="19.5" height="19.5" fill="white" transform="translate(20.4922 20.2837) rotate(180)"/></clipPath></defs></svg></div>',
        nextArrow: '<div class="arrow-slider arrow-slider_right"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)" transform="rotate(0)"><path d="M14.4789 20.2837L16.7539 18.0087L9.27891 10.5337L16.7539 3.05869L14.4789 0.78369L4.7289 10.5337L14.4789 20.2837Z" fill="#fff" /></g><defs><clipPath id="clip0"><rect width="19.5" height="19.5" fill="white" transform="translate(20.4922 20.2837) rotate(180)"/></clipPath></defs></svg></div>'
    
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
        prevArrow: '<div class="arrow-slider arrow-slider_left"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)" transform="rotate(0)"><path d="M14.4789 20.2837L16.7539 18.0087L9.27891 10.5337L16.7539 3.05869L14.4789 0.78369L4.7289 10.5337L14.4789 20.2837Z" fill="#fff" /></g><defs><clipPath id="clip0"><rect width="19.5" height="19.5" fill="white" transform="translate(20.4922 20.2837) rotate(180)"/></clipPath></defs></svg></div>',
        nextArrow: '<div class="arrow-slider arrow-slider_right"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)" transform="rotate(0)"><path d="M14.4789 20.2837L16.7539 18.0087L9.27891 10.5337L16.7539 3.05869L14.4789 0.78369L4.7289 10.5337L14.4789 20.2837Z" fill="#fff" /></g><defs><clipPath id="clip0"><rect width="19.5" height="19.5" fill="white" transform="translate(20.4922 20.2837) rotate(180)"/></clipPath></defs></svg></div>'
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
        prevArrow: '<div class="arrow-slider arrow-slider_left-blog"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)" transform="rotate(0)"><path d="M14.4789 20.2837L16.7539 18.0087L9.27891 10.5337L16.7539 3.05869L14.4789 0.78369L4.7289 10.5337L14.4789 20.2837Z" fill="#fff" /></g><defs><clipPath id="clip0"><rect width="19.5" height="19.5" fill="white" transform="translate(20.4922 20.2837) rotate(180)"/></clipPath></defs></svg></div>',
        nextArrow: '<div class="arrow-slider arrow-slider_right-blog"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)" transform="rotate(0)"><path d="M14.4789 20.2837L16.7539 18.0087L9.27891 10.5337L16.7539 3.05869L14.4789 0.78369L4.7289 10.5337L14.4789 20.2837Z" fill="#fff" /></g><defs><clipPath id="clip0"><rect width="19.5" height="19.5" fill="white" transform="translate(20.4922 20.2837) rotate(180)"/></clipPath></defs></svg></div>'
    });
}

function articlePageBottomSlider() {
    $('.article_slider').slick({
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
        prevArrow: '<div class="arrow-slider arrow-slider_left"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)" transform="rotate(0)"><path d="M14.4789 20.2837L16.7539 18.0087L9.27891 10.5337L16.7539 3.05869L14.4789 0.78369L4.7289 10.5337L14.4789 20.2837Z" fill="#fff" /></g><defs><clipPath id="clip0"><rect width="19.5" height="19.5" fill="white" transform="translate(20.4922 20.2837) rotate(180)"/></clipPath></defs></svg></div>',
        nextArrow: '<div class="arrow-slider arrow-slider_right"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)" transform="rotate(0)"><path d="M14.4789 20.2837L16.7539 18.0087L9.27891 10.5337L16.7539 3.05869L14.4789 0.78369L4.7289 10.5337L14.4789 20.2837Z" fill="#fff" /></g><defs><clipPath id="clip0"><rect width="19.5" height="19.5" fill="white" transform="translate(20.4922 20.2837) rotate(180)"/></clipPath></defs></svg></div>'
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

    if (BODY.hasClass('blog-page')) {
        let items = $('.blog-p_item');

        items.each(function (index, value) {
            // console.log('height', $(value).find('.blog-p_item-plash').height());
            if ($(window).width() > 1100) {
                $(value).css("margin-bottom", $(value).find('.blog-p_item-plash').height() + 25);
            }
        })

    }

    if (BODY.hasClass('article-page')) {
        articlePageBottomSlider();
    }


});


