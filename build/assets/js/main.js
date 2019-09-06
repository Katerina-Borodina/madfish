
function mainPageTopSlider() {
    $('.latest_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
        // prevArrow: '<div class="arrow-slider arrow-slider_left"></div>',
        // nextArrow: '<div class="arrow-slider arrow-slider_right"></div>'
    });
}

// function mainPageBottomSlider() {
//     $('.numbers_slider').slick({
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         variableWidth: true,
//         prevArrow: '<div class="slider-arrow-numbers slider-arrow-numbers__left"></div>',
//         nextArrow: '<div class="slider-arrow-numbers slider-arrow-numbers__right"></div>',
//         responsive: [
//             {
//                 breakpoint: 770,
//                 settings: {
//                     arrows: false,
//                     dots: false,
//                     slidesToScroll: 1
//                     // centerMode: true,
//                     // centerPadding: '40px',
//                     // slidesToShow: 3
//                 }
//             },
//             {
//                 breakpoint: 1520,
//                 settings: {
//                     // centerMode: true,
//                     // centerPadding: '40px',
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     variableWidth: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// }
//
// function restaurantPageScrollToBlock() {
//     $(".js-scroll-to-id-block").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#this-block-id-to-scroll").offset().top
//         }, 1000);
//     });
// }
//
// function roomsPageScrollToBlock() {
//     $(".js-scroll-to-block-1").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#js-block-1").offset().top
//         }, 1000);
//     });
//     $(".js-scroll-to-block-2").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#js-block-2").offset().top
//         }, 1000);
//     });
//     $(".js-scroll-to-block-3").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#js-block-3").offset().top
//         }, 1000);
//     });
//     $(".js-scroll-to-block-4").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#js-block-4").offset().top
//         }, 1000);
//     });
//     $(".js-scroll-to-block-5").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#js-block-5").offset().top
//         }, 1000);
//     });
//     $(".js-scroll-to-block-6").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#js-block-6").offset().top
//         }, 1000);
//     });
//     $(".js-scroll-to-block-7").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#js-block-7").offset().top
//         }, 1000);
//     });
//     $(".js-scroll-to-block-8").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#js-block-8").offset().top
//         }, 1000);
//     });
//
// }
//
// function tennisPageScrollToBlock() {
//     $(".js-scroll-to-id-block").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#this-block-id-to-scroll").offset().top
//         }, 1000);
//     });
// }
//
// function aboutPageScrollToBlock() {
//     $(".js-scroll-to-id-block").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#this-block-id-to-scroll").offset().top
//         }, 1000);
//     });
// }
//
// function activePageScrollToBlock() {
//     $(".js-scroll-to-id-block").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#this-block-id-to-scroll").offset().top
//         }, 1000);
//     });
// }
//
// function roomsPageScrollToTop() {
//     $(".arrow-top").on('click', function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#scroll-top").offset().top
//         }, 1000);
//     });
// }
//
// function MainPageFormReservation() {
//     let x, i, j, selElmnt, a, b, c;
//     x = document.getElementsByClassName("custom-select");
//     for (i = 0; i < x.length; i++) {
//         selElmnt = x[i].getElementsByTagName("select")[0];
//         a = document.createElement("DIV");
//         a.setAttribute("class", "select-selected");
//         a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//         x[i].appendChild(a);
//         b = document.createElement("DIV");
//         b.setAttribute("class", "select-items select-hide");
//         for (j = 1; j < selElmnt.length; j++) {
//             c = document.createElement("DIV");
//             c.innerHTML = selElmnt.options[j].innerHTML;
//             c.addEventListener("click", function (e) {
//                 let y, i, k, s, h;
//                 s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//                 h = this.parentNode.previousSibling;
//                 for (i = 0; i < s.length; i++) {
//                     if (s.options[i].innerHTML == this.innerHTML) {
//                         s.selectedIndex = i;
//                         h.innerHTML = this.innerHTML;
//                         y = this.parentNode.getElementsByClassName("same-as-selected");
//                         for (k = 0; k < y.length; k++) {
//                             y[k].removeAttribute("class");
//                         }
//                         this.setAttribute("class", "same-as-selected");
//                         break;
//                     }
//                 }
//                 h.click();
//             });
//             b.appendChild(c);
//         }
//         x[i].appendChild(b);
//         a.addEventListener("click", function (e) {
//             /*when the select box is clicked, close any other select boxes,
//             and open/close the current select box:*/
//             e.stopPropagation();
//             closeAllSelect(this);
//             this.nextSibling.classList.toggle("select-hide");
//             this.classList.toggle("select-arrow-active");
//         });
//     }
//
//     function closeAllSelect(elmnt) {
//         let x, y, i, arrNo = [];
//         x = document.getElementsByClassName("select-items");
//         y = document.getElementsByClassName("select-selected");
//         for (i = 0; i < y.length; i++) {
//             if (elmnt == y[i]) {
//                 arrNo.push(i)
//             } else {
//                 y[i].classList.remove("select-arrow-active");
//             }
//         }
//         for (i = 0; i < x.length; i++) {
//             if (arrNo.indexOf(i)) {
//                 x[i].classList.add("select-hide");
//             }
//         }
//     }
//
//     document.addEventListener("click", closeAllSelect);
//
//     function summPiple(obj) {
//         obj.find("#summRun").on('click', function (event) {
//             event.preventDefault();
//             $("#inputNum").text(+obj.find("#child").val() + +obj.find("#adult").val());
//         })
//     }
//
//     summPiple($(".guests"));
//
//     $(".input_num").on("click", function () {
//         $(this).addClass("input_num-active");
//     });
//
//     $("#summRun").on("click", function () {
//         $(".input_num").removeClass("input_num-active");
//     });
//
//     $(document).mouseup(function (e) {
//         let div = $(".guests");
//         let num = $(".input_num");
//         if (!div.is(e.target)
//             && div.has(e.target).length === 0) {
//             num.removeClass("input_num-active");
//         }
//     });
//
//     $("#btn_rst").on("click", function () {
//         $("#child").val(0);
//         $("#adult").val(0);
//     });
// }
//
// function reservPageFormReservation() {
//     let x, i, j, selElmnt, a, b, c;
//     x = document.getElementsByClassName("custom-select-form");
//     for (i = 0; i < x.length; i++) {
//         selElmnt = x[i].getElementsByTagName("select")[0];
//         a = document.createElement("DIV");
//         a.setAttribute("class", "select-selected");
//         a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//         x[i].appendChild(a);
//         b = document.createElement("DIV");
//         b.setAttribute("class", "select-items select-hide");
//         for (j = 1; j < selElmnt.length; j++) {
//             c = document.createElement("DIV");
//             c.innerHTML = selElmnt.options[j].innerHTML;
//             c.addEventListener("click", function (e) {
//                 let y, i, k, s, h;
//                 s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//                 h = this.parentNode.previousSibling;
//                 for (i = 0; i < s.length; i++) {
//                     if (s.options[i].innerHTML == this.innerHTML) {
//                         s.selectedIndex = i;
//                         h.innerHTML = this.innerHTML;
//                         y = this.parentNode.getElementsByClassName("same-as-selected");
//                         for (k = 0; k < y.length; k++) {
//                             y[k].removeAttribute("class");
//                         }
//                         this.setAttribute("class", "same-as-selected");
//                         break;
//                     }
//                 }
//                 h.click();
//             });
//             b.appendChild(c);
//         }
//         x[i].appendChild(b);
//         a.addEventListener("click", function (e) {
//             /*when the select box is clicked, close any other select boxes,
//             and open/close the current select box:*/
//             e.stopPropagation();
//             closeAllSelect(this);
//             this.nextSibling.classList.toggle("select-hide");
//             this.classList.toggle("select-arrow-active");
//         });
//     }
//
//     function closeAllSelect(elmnt) {
//         let x, y, i, arrNo = [];
//         x = document.getElementsByClassName("select-items");
//         y = document.getElementsByClassName("select-selected");
//         for (i = 0; i < y.length; i++) {
//             if (elmnt == y[i]) {
//                 arrNo.push(i)
//             } else {
//                 y[i].classList.remove("select-arrow-active");
//             }
//         }
//         for (i = 0; i < x.length; i++) {
//             if (arrNo.indexOf(i)) {
//                 x[i].classList.add("select-hide");
//             }
//         }
//     }
//
//     document.addEventListener("click", closeAllSelect);
// }
//
// function MainPageVideo() {
//     $('.btn-video').on("click", function () {
//         let video = $("#video");
//         video.paused ? video.get(0).play() : video.get(0).pause();
//     });
//
//     const video = $("#video");
//     const vidButton = $(".btn-video");
//     const vidTitle = $(".main_panorama-title");
//     const vidDesc = $(".main_panorama-desc");
//     vidButton.click(function () {
//         let thisEvent = vidButton.data('btn-video');
//         switch (thisEvent) {
//             case "play":
//                 video.get(0).pause();
//                 vidButton.data('btn-video', 'paused');
//                 vidButton.removeClass('hidden');
//                 $('.in').removeClass('dpnone');
//                 break;
//             case "paused":
//                 video.get(0).play();
//                 $('.in').addClass('dpnone');
//                 vidButton.data('btn-video', 'play',);
//                 vidButton.addClass('hidden');
//                 vidTitle.addClass('hidden');
//                 vidDesc.addClass('hidden');
//                 break;
//             default:
//                 console.warn('Unknown data-btn-video value');
//         }
//     });
//     video.on('mousemove', function () {
//         let thisEvent = vidButton.data('btn-video');
//         switch (thisEvent) {
//             case "play":
//                 vidButton.removeClass('hidden');
//                 window.setTimeout(vidButton.addClass('hidden'), 1000);
//                 break;
//             case "paused":
//                 vidButton.removeClass('hidden');
//                 break;
//             default:
//                 console.warn('Unknown data-btn-video value');
//         }
//     });
// }
//
// function MainPageAccordion() {
//     let acc = document.getElementsByClassName("regulations_btn");
//     for (i = 0; i < acc.length; i++) {
//         acc[i].addEventListener("click", function () {
//             this.classList.toggle("active");
//             let regulations_panel = this.nextElementSibling;
//             if (regulations_panel.style.maxHeight) {
//                 regulations_panel.style.maxHeight = null;
//             } else {
//                 regulations_panel.style.maxHeight = regulations_panel.scrollHeight + "px";
//             }
//         });
//     }
// }
//
// function roomsPageSlider() {
//     let options = swiperOptionsObject('rooms');
//
//     $('.js-rooms-slider').each(function (i, elem) {
//         let sliderMain = $(elem).find('.main-slider'),
//             sliderNav = $(elem).find('.nav-slider');
//         let mainSlider = new Swiper(sliderMain, options.mainSliderOptions);
//         let navSlider = new Swiper(sliderNav, options.navSliderOptions);
//         mainSlider.controller.control = navSlider;
//         navSlider.controller.control = mainSlider;
//     });
// }
//
// function restaurantPageHeaderSlider() {
//     new Swiper('.js-header-slider', {
//         slidesPerView: 1,
//         spaceBetween: 30,
//         effect: 'fade',
//         speed: 1000,
//         keyboard: {
//             enabled: true,
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         breakpoints: {
//             768: {
//                 slidesPerView: 1,
//                 spaceBetween: 0,
//                 pagination: {
//                     el: '.swiper-pagination',
//                     clickable: true
//                 },
//             }
//         }
//     });
// }
//
// function restaurantPageTopLoopSlider() {
//     let options = swiperOptionsObject('rooms');
//
//     $('.js-slide-resr').each(function (i, elem) {
//         // console.log('+++', i,'+++93939', elem);
//         let sliderMain = $(elem).find('.main-slider'),
//             sliderNav = $(elem).find('.nav-slider');
//         console.log('+++', sliderMain, '+++93939', sliderNav);
//         let mainSlider = new Swiper(sliderMain, options.mainSliderOptions);
//         let navSlider = new Swiper(sliderNav, options.navSliderOptions);
//         mainSlider.controller.control = navSlider;
//         navSlider.controller.control = mainSlider;
//     });
// }
//
// function restaurantPageBottomLoopSlider() {
//     let options = swiperOptionsObject('rooms');
//
//     $('.js-slide-terrasa').each(function (i, elem) {
//         let sliderMain = $(elem).find('.main-slider'),
//             sliderNav = $(elem).find('.nav-slider');
//         console.log('+++', sliderMain, '+++93939', sliderNav);
//         let mainSlider = new Swiper(sliderMain, options.mainSliderOptions);
//         let navSlider = new Swiper(sliderNav, options.navSliderOptions);
//         mainSlider.controller.control = navSlider;
//         navSlider.controller.control = mainSlider;
//     });
// }
//
// function restaurantPageBottomSlider() {
//     $('.restaurant_menu-slider').slick({
//         dots: true,
//         customPaging: function (slider, i) {
//             return '<span>' + $(slider.$slides[i]).attr('data-name') + '</span>';
//         },
//         fade: true,
//         cssEase: 'linear',
//         swipe: false
//     });
// }
//
// function tennisPageHeaderSlider() {
//     new Swiper('.js-tennis_slider', {
//         slidesPerView: 1,
//         spaceBetween: 30,
//         effect: 'fade',
//         speed: 1000,
//         keyboard: {
//             enabled: true,
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// }
//
// function aboutPageHeaderSlider() {
//
//     new Swiper('.js-about_slider', {
//         slidesPerView: 1,
//         spaceBetween: 30,
//         effect: 'fade',
//         speed: 1000,
//         keyboard: {
//             enabled: true,
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// }
//
// function aboutPagebottomSlider() {
//     $('.about_bottom-slider').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: true,
//         focusOnSelect: true,
//         variableWidth: true,
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     arrows: false,
//                     dots: false,
//                     centerMode: false,
//                 }
//             }
//         ],
//         prevArrow: '<div class="slider-arrow-header slider-arrow-header__left"></div>',
//         nextArrow: '<div class="slider-arrow-header slider-arrow-header__right"></div>'
//     });
// }
//
// function popup() {
//     let p = $(".popup_overlay");
//
//     $("#popup_toggle").click(function () {
//         p.css("display", "block");
//         p.css("visibility", "visible").css("opacity", "1");
//     });
//     p.click(function (event) {
//         if (event.target == this) {
//             $(p).css("display", "none");
//         }
//         if (event.target == this) {
//             $(p)
//                 .css("visibility", "hidden")
//                 .css("opacity", "0");
//         }
//     });
//     $(".popup_close").click(function () {
//         p.css("display", "none");
//         p.css("visibility", "hidden").css("opacity", "0");
//     });
// }
//
// function popupForm() {
//     let p = $(".popup-res_overlay");
//
//     $("#popup-res_toggle").click(function () {
//         p.css("display", "block");
//         p.css("visibility", "visible").css("opacity", "1");
//     });
//     p.click(function (event) {
//         if (event.target == this) {
//             $(p).css("display", "none");
//         }
//         if (event.target == this) {
//             $(p)
//                 .css("visibility", "hidden")
//                 .css("opacity", "0");
//         }
//     });
//     $(".popup-res_close").click(function () {
//         p.css("display", "none");
//         p.css("visibility", "hidden").css("opacity", "0");
//     });
// }
//
// function navMunuMob() {
//     let menu_mob = $(".menu_mob");
//     $(".header_nav-mob_btn").click(function () {
//         menu_mob.css("display", "block").css("left", 0).removeClass('menu-close').addClass('menu-open');
//         $('thml').css("overflow", 'hidden');
//         $('body').css("overflow", 'hidden');
//     });
//
//     $(".menu_mob-header_close").click(function () {
//         menu_mob.css("left", '100%').removeClass('menu-open').addClass('menu-close');
//         setTimeout(function () {
//             menu_mob.css("display", "none")
//         }, 600);
//         $('thml').css("overflow", 'auto');
//         $('body').css("overflow", 'auto');
//     });
// }

$(document).ready(function () {
    const BODY = $('body');
    // navMunuMob();

    if (BODY.hasClass('main-page')) {
        mainPageTopSlider();
        // mainPageBottomSlider();
        // MainPageFormReservation();
        // MainPageVideo();
        // MainPageAccordion();
    }
    //
    // if (BODY.hasClass('rooms-page')) {
    //     roomsPageSlider();
    //     roomsPageScrollToBlock();
    //     roomsPageScrollToTop();
    // }
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
    // if (BODY.hasClass('about-page')) {
    //     aboutPageHeaderSlider();
    //     aboutPagebottomSlider();
    //     aboutPageScrollToBlock();
    // }
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


