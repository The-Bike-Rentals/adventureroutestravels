(function ($) {
    "use strict";
    var windowOn = $(window);

    /*===========================================
        =            Windows Load          =
    =============================================*/
    $(window).on('load', function () {
        wowAnimation();
    });

    /*======================================
      Preloader activation
      ========================================*/
    $(window).on('load', function (event) {
        $('#preloader').delay(500).fadeOut(500);
    });

    /*===========================================
        =        Wow Active      =
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    /*======================================
    Mobile Menu Js
    ========================================*/
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "1199",
        meanExpand: ['<i class="fa-solid fa-plus"></i>'],
    });

    $("#mobile-menu-2").meanmenu({
        meanMenuContainer: ".mobile-menu-2",
        meanScreenWidth: "4000",
        meanExpand: ['<i class="fa-solid fa-plus"></i>'],
    });

    /*======================================
      Sidebar Toggle
      ========================================*/
    $(".offcanvas-close,.offcanvas-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("info-open");
        $(".offcanvas-overlay").removeClass("overlay-open");
    });
    $(".sidebar-toggle").on("click", function () {
        $(".offcanvas-area").addClass("info-open");
        $(".offcanvas-overlay").addClass("overlay-open");
    });

    /*======================================
      Body overlay Js
      ========================================*/
    $(".body-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    /*======================================
      Sticky Header Js
      ========================================*/

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 250) {
            $("#header-sticky").addClass("bd-sticky");
        } else {
            $("#header-sticky").removeClass("bd-sticky");
        }
    });

    /*======================================
      Data Css js
      ========================================*/
    $("[data-background").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    /*======================================
      MagnificPopup image view
      ========================================*/
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    let tourImagePopupGallery = $(".tour-image-popup");
    tourImagePopupGallery.each(function () {
        let elm = $(this);
        let options = elm.data("gallery-options");
        let imageGallery = elm.magnificPopup(
            "object" === typeof options ? options : JSON.parse(options)
        );
    });


    /*======================================
      MagnificPopup video view
      ========================================*/
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    /*======================================
      PureCounter Js
      ========================================*/

    new PureCounter();
    new PureCounter({
        filesizing: true,
        selector: ".filesizecount",
        pulse: 2,
    });

    /*======================================
      Nice Select Js
      ========================================*/
    $(".input-box-select, .banner-search-select, .shop-selector, .shop-selector-sort, .country-list, .booking-infant-age").niceSelect();

    /*======================================
      Button scroll up js
      ========================================*/
    var progressPath = document.querySelector(".backtotop-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".backtotop-wrap").addClass("active-progress");
        } else {
            jQuery(".backtotop-wrap").removeClass("active-progress");
        }
    });
    jQuery(".backtotop-wrap").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, parseInt(duration, 10)); // Fixing parseInt call with radix parameter
        return false;
    });


    /*======================================
    Slider Swiper
    ========================================*/

    //Banner Slider Active Js
    if ($('.banner_more_item').length > 1) {
        var banner = new Swiper(".banner__active", {
            slidesPerView: 1,
            loop: true,
            roundLengths: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".tourigo-navigation-next",
                prevEl: ".tourigo-navigation-prev",
            },
        });
    }

    var banner = new Swiper(".banner-two-active", {
        slidesPerView: 1,
        loop: true,
        roundLengths: false,
        effect: 'fade',
        autoplay: {
            delay: 7000,
        },
        navigation: {
            nextEl: ".banner-navigation-next",
            prevEl: ".banner-navigation-prev",
        },
    });

    var slider = new Swiper('.bd-slider-active', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 7000,
        },
        navigation: {
            nextEl: ".banner-navigation-next",
            prevEl: ".banner-navigation-prev",
        },
    });

    var swiper = new Swiper('.banner-four-slider', {
        direction: 'vertical',
        speed: 800,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        mousewheelControl: true,
        watchSlidesProgress: true,
        mousewheel: {
            releaseOnEdges: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });

    var tourActivation = new Swiper(".tour__active", {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tourigo-navigation-next",
            prevEl: ".tourigo-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });

    var tourActivationTwo = new Swiper(".tour__active_two", {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tourigo-navigation-next",
            prevEl: ".tourigo-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });

    var tourThreeActivation = new Swiper(".tour-three-active", {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tourigo-navigation-next",
            prevEl: ".tourigo-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });

    var tourActivation = new Swiper(".tour-four-active", {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tourigo-navigation-next",
            prevEl: ".tourigo-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });

    var testimonialActivation = new Swiper(".testimonial_active", {
        slidesPerView: 2,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tourigo-navigation-next",
            prevEl: ".tourigo-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 1,
            },
            1400: {
                slidesPerView: 2,
            },
            1600: {
                slidesPerView: 2,
            },
        },
    });

    var testimonialFiveActive = new Swiper(".testimonial-five-active", {
        slidesPerView: 1,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tourigo-navigation-next",
            prevEl: ".tourigo-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            },
            1400: {
                slidesPerView: 1,
            },
            1600: {
                slidesPerView: 1,
            },
        },
    });

    var testimonialSixActive = new Swiper(".testimonial-six-active", {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: false,
        loop: true,
        allowTouchMove: true,
        observer: true,
        autoplay: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tourigo-navigation-next",
            prevEl: ".tourigo-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 3,
            },
        },
    });

    var testimonialActivation_2 = new Swiper(".testimonial_active_2", {
        slidesPerView: 1,
        spaceBetween: 24,
        centeredSlides: false,
        loop: true,
        allowTouchMove: true,
        observer: true,
        autoplay: {
            delay: 6000
        },
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tourigo-navigation-next",
            prevEl: ".tourigo-navigation-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            },
            1400: {
                slidesPerView: 1,
            },
            1600: {
                slidesPerView: 1,
            },
        },
    });

    var teamActivation = new Swiper(".team-activation", {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tourigo-navigation-next",
            prevEl: ".tourigo-navigation-prev",
        },
        breakpoints: {
            // // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            451: {
                slidesPerView: 2,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 4,
            },
            1600: {
                slidesPerView: 4,
            },
        },
    });

    var packageActivation = new Swiper(".package-activation", {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tourigo-navigation-next",
            prevEl: ".tourigo-navigation-prev",
        },
        breakpoints: {
            // // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            451: {
                slidesPerView: 2,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
            1600: {
                slidesPerView: 4,
            },
        },
    });

    var detailsSlideActivation = new Swiper(".details-slide-activation", {
        slidesPerView: 1,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tourigo-navigation-next",
            prevEl: ".tourigo-navigation-prev",
        },
    });

    if (jQuery(".testimonial-active-two").length > 0) {
        let testimonial = new Swiper(".testimonial-active-two", {
            slidesPerView: 3,
            spaceBetween: 24,
            centeredSlides: true,
            loop: true,
            pagination: {
                el: ".slider-pagination",
                clickable: true,
            },
            allowTouchMove: true,
            observer: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                500: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                },
                1400: {
                    slidesPerView: 3,
                },
                1600: {
                    slidesPerView: 3,
                },
            },
        });
    }

    if (jQuery(".testimonial-active-three").length > 0) {
        let testimonial = new Swiper(".testimonial-active-three", {
            slidesPerView: 1,
            spaceBetween: 24,
            centeredSlides: false,
            loop: true,
            allowTouchMove: true,
            observer: true,
            pagination: {
                el: ".slider-pagination",
                clickable: true,
            },
        });
    }

    var blogActivation = new Swiper(".blog_activation", {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: true,
        loop: true,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".blog-slider-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });

    var trip = new Swiper(".activity-activation", {
        slidesPerView: 6,
        spaceBetween: 24,
        loop: false,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        autoplay: false,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            451: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    var brand = new Swiper(".brand-active", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1400: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    var brandTwo = new Swiper(".brand-active-2", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    var brandTwo = new Swiper(".instagram-slide-activation", {
        slidesPerView: 6,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        autoplay: true,
        centeredSlides: true,
        breakpoints: {
            1400: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 6,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: 3,
            },
        },
    });

    /*======================================
    Feedback activation js
    ========================================*/

    var feedback = new Swiper(".feedback__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".feedback__button-prev",
            prevEl: ".feedback__button-next",
        },
        pagination: {
            el: ".bd-swiper-dot",
            clickable: true,
        },
    });

    // activity-slider-four active js 
    let activitySliderFour = new Swiper('.activity-slider-four', {
        slidesPerView: 5,
        spaceBetween: 24,
        loop: false,
        observeParents: true,
        observer: true,
        centeredSlides: false,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            451: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    // activity-slider-four active js 
    let activitySliderFive = new Swiper('.activity-slider-five', {
        slidesPerView: 3,
        loop: true,
        autoplay: true,
        centeredSlides: true,
        spaceBetween: 24,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            451: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*=============================================
    product active
    =============================================*/

    var productDetails = new Swiper(".product-details-nav", {
        spaceBetween: -20,
        slidesPerView: 4,
        navigation: {
            nextEl: ".product-details-button-next",
            prevEl: ".product-details-button-prev",
        },
    });
    var productDetailsActive = new Swiper(".product-details-active", {
        spaceBetween: 0,
        thumbs: {
            swiper: productDetails,
        },
        navigation: {
            nextEl: ".product-details-button-next",
            prevEl: ".product-details-button-prev",
        },
    });

    /*======================================
    slider-rang js
    ========================================*/

    $(document).ready(function () {
        var slider = document.getElementById('slider-range');
        var minValue = 0;
        var maxValue = 1500;

        if ($("#slider-range").length) {
            noUiSlider.create(slider, {
                start: [0, 500],
                connect: true,
                range: {
                    'min': minValue,
                    'max': maxValue
                }
            });

            var amount = document.getElementById('amount');
            slider.noUiSlider.on('update', function (values, handle) {
                amount.value = "$" + values[0] + " - $" + values[1];
            });

            $('#filter-btn').on('click', function () {
                $('.filter-widget').slideToggle(1000);
            });
        }
    });

    // Cart
    $('.bd-cart-minus').on('click', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val(), 10) - 1; // Adding radix parameter
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.bd-cart-plus').on('click', function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val(), 10) + 1); // Adding radix parameter
        $input.change();
        return false;
    });

    $('.guest-number-minus').on('click', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val(), 10) - 1; // Adding radix parameter
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.guest-number-plus').on('click', function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val(), 10) + 1); // Adding radix parameter
        $input.change();
        return false;
    });

    // Show Login Toggle Js
    $('#showlogin').on('click', function () {
        $('#checkout-login').slideToggle(900);
    });

    // Show Coupon Toggle Js
    $('#showcoupon').on('click', function () {
        $('#checkout_coupon').slideToggle(900);
    });

    $('.checkout-payment-item label').on('click', function () {
        $(this).siblings('.checkout-payment-desc').slideToggle(400);

    });

    //  Show Login Toggle Js
    $('.checkout-login-form-reveal-btn').on('click', function () {
        $('#returnCustomerLoginForm').slideToggle(400);
    });

    // Show Coupon Toggle Js
    $('.checkout-coupon-form-reveal-btn').on('click', function () {
        $('#checkoutCouponForm').slideToggle(400);
    });

    // Create An Account Toggle Js
    $('#cbox').on('click', function () {
        $('#cbox_info').slideToggle(900);
    });

    // Shipping Box Toggle Js
    $('#ship-box').on('click', function () {
        $('#ship-box-info').slideToggle(1000);
    });

    /*======================================
    content hidden class js
    ========================================*/
    $('.contentHidden').remove();

    // Flatpicker activation
    $("#selectingMultipleDates").flatpickr({
        mode: "range",
        altInput: true,
        altFormat: "j, M",
        dateFormat: "m-d",
    });

    $("#selectingMultipleDate").flatpickr({
        mode: "range",
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        defaultDate: ["2024-04-21", "2024-04-24"]
    });

    // For currency
    $(document).on('click', '#header-currency-toggle', function (e) {
        e.stopPropagation(); // Prevent the event from bubbling up
        $(".header-currency ul").toggleClass("lang-list-open");
    });

    // For language
    $(document).on('click', '#header-language-toggle', function (e) {
        e.stopPropagation(); // Prevent the event from bubbling up
        $(".header-language ul").toggleClass("lang-list-open");
    });

    // Click outside handler
    $(document).on('click', function (e) {
        // Check if the click occurred outside the currency toggle and its associated ul
        if (!$(e.target).closest('#header-currency-toggle').length && !$(e.target).closest('.header-currency ul').length) {
            $(".header-currency ul").removeClass("lang-list-open");
        }
        // Check if the click occurred outside the language toggle and its associated ul
        if (!$(e.target).closest('#header-language-toggle').length && !$(e.target).closest('.header-language ul').length) {
            $(".header-language ul").removeClass("lang-list-open");
        }
    });

    // Search Js
    $(".bd-search-open-btn").on("click", function () {
        $(".bd-search-popup-area").addClass("bd-search-opened");
        $(".bd-search-overlay").addClass("bd-search-opened");
    });

    $(".bd-search-close-btn").on("click", function () {
        $(".bd-search-popup-area").removeClass("bd-search-opened");
        $(".bd-search-overlay").removeClass("bd-search-opened");
    });

    $(".bd-search-overlay").on("click", function () {
        $(".bd-search-popup-area").removeClass("bd-search-opened");
        $(".bd-search-overlay").removeClass("bd-search-opened");
    });

    // cleave js activation start
    if (jQuery("#cardmmyy").length > 0) {
        var dateCleave = new Cleave('#cardmmyy', {
            date: true,
            datePattern: ['m', 'y']
        });
    }

    if (jQuery("#cvvcode").length > 0) {
        var cvvCleave = new Cleave('#cvvcode', {
            delimiter: '',
            blocks: [3],
        });
    }

    if (jQuery("#creditCard").length > 0) {
        var cleave = new Cleave('#creditCard', {
            creditCard: true,
            onCreditCardTypeChanged: function (type) {
                var creditCardLogo = document.getElementById('creditCardLogo',);
                switch (type) {
                    case 'visa':
                        creditCardLogo.className = 'fa-brands fa-cc-visa'; // FontAwesome class for Visa
                        break;
                    case 'mastercard':
                        creditCardLogo.className = 'fa-brands fa-cc-mastercard'; // FontAwesome class for MasterCard
                        break;
                    case 'amex':
                        creditCardLogo.className = 'fa-brands fa-cc-amex'; // FontAwesome class for American Express
                        break;
                    case 'discover':
                        creditCardLogo.className = 'fa-brands fa-cc-discover'; // FontAwesome class for Discover
                        break;
                    case 'jcb':
                        creditCardLogo.className = 'fa-brands fa-cc-jcb'; // FontAwesome class for Discover
                        break;
                    case 'diners':
                        creditCardLogo.className = 'fa-brands fa-cc-diners-club'; // FontAwesome class for Diners
                        break;
                    default:
                        creditCardLogo.className = ''; // Clear the class if no matching type is found
                        break;
                }
            }
        });
    }
    // cleave js activation end

    // Product Color Activation
    $('.color-variation-btn').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // step 
    $(document).ready(function () {
        var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn-2'),
            allPrevBtn = $('.prevBtn-2');

        allWells.hide();

        navListItems.click(function (e) {
            e.preventDefault();
            var $target = $($(this).attr('href')),
                $item = $(this);

            if (!$item.hasClass('disabled')) {
                navListItems.removeClass('step-active');
                $item.addClass('step-active');
                allWells.hide();
                $target.show();
                $target.find('input:eq(0)').focus();
            }
        });

        allPrevBtn.click(function () {
            var curStep = $(this).closest(".setup-content"),
                curStepBtn = curStep.attr("id"),
                prevStepSteps = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

            prevStepSteps.removeAttr('disabled').trigger('click');
        });

        allNextBtn.click(function () {
            var curStep = $(this).closest(".setup-content"),
                curStepBtn = curStep.attr("id"),
                nextStepSteps = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                curInputs = curStep.find("input[type='text'],input[type='url']"),
                isValid = true;

            $(".booking-form-input").removeClass("has-error");
            for (var i = 0; i < curInputs.length; i++) {
                if (!curInputs[i].validity.valid) {
                    isValid = false;
                    $(curInputs[i]).closest(".booking-form-input").addClass("has-error");
                }
            }

            if (isValid)
                nextStepSteps.removeAttr('disabled').trigger('click');
        });

        $('div.setup-panel div a.step-active').trigger('click');
    });


    // tour image change activation
    $(document).ready(function () {
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                    $('#imagePreview').hide();
                    $('#imagePreview').fadeIn(650);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#imageUpload").change(function () {
            readURL(this);
        });
    });


    // Text editor
    tinymce.init({
        selector: '#tinymce_simple_textarea',
        toolbar: 'undo redo blockquote blocks bold italic alignleft aligncenter alignright outdent indent code anchor link restoredraft charmap codesample ltr rtl emoticons fullscreen help image insertdatetime lists media nonbreaking pagebreak preview save searchreplace visualblocks visualchars wordcount accordion print',
        toolbar_mode: 'wrap',
        plugins: ['code', 'table', 'lists', 'anchor', 'autolink', "autosave", "charmap", "codesample", "directionality", "emoticons", "fullscreen", "help", "image", "importcss", "insertdatetime", "visualblocks", "visualchars", "wordcount", "accordion"],
        link_default_target: '_blank',
        quickbars_insert_toolbar: false,
        height: "300"
    });


  // Add event listeners to all close buttons
  document.querySelectorAll('.remove-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Remove the parent element of the clicked button
      this.parentNode.remove();
    });
  });

  // Dropzone Activision
  Dropzone.options.myDropzone = {
    url: "/fake/location",
    autoProcessQueue: false,
    paramName: "file",
    clickable: true,
    maxFilesize: 5, //in mb
    addRemoveLinks: true,
    acceptedFiles: '.png,.jpg',
    dictDefaultMessage: "Upload your file here",
    init: function() {
      this.on("sending", function(file, xhr, formData) {
        console.log("sending file");
      });
      this.on("success", function(file, responseText) {
        console.log('great success');
      });
      this.on("addedfile", function(file) {
        console.log('file added');
      });
    }
  };
  



})(jQuery);