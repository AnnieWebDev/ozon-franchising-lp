$(document).foundation();
document.addEventListener("DOMContentLoaded", () => {

    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 991px)');
    let tablet = window.matchMedia('(min-width: 992px) and (max-width: 1471px)');
    let desktop = window.matchMedia('(min-width: 1472px)');

    $('.phone-mask').inputmask("+7 (999) 999-99-99", { showMaskOnHover: false });
    $(".email-mask").inputmask("email", { showMaskOnHover: false });


    $('.js-select2').select2({
        minimumResultsForSearch: -1,
        placeholder: "Выберите пакет",


    });





    $('a[data-rel^=lightcase]').lightcase();

    //header-dropdown

    const headerMenuItems = document.querySelectorAll(".header__menu-item");
    headerMenuItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            $(".header-dropdown", item).stop().fadeIn();

        });
        item.addEventListener("mouseleave", () => {
            $(".header-dropdown", item).stop().fadeOut();

        });

    });

    //calc input,points

    const calcInput = document.querySelector(".calc__input"),
        calcInputResult = document.querySelector(".calc__input-result"),
        calcLabel = document.querySelector(".calc__input-label"),
        calcInputDefaultValue = calcInputResult.innerText,
        btnsPoint = document.querySelectorAll(".calc__btn_point"),
        btnsPackage = document.querySelectorAll(".calc__btn-package");





    calcInput.addEventListener("input", function () {
        if (this.value > 10000) {
            this.value = 10000;
        }
        if (this.value == "") {
            calcLabel.classList.remove("calc__input-label_active");
        } else {
            calcLabel.classList.add("calc__input-label_active");
            $(btnsPoint).removeClass("calc__btn_active");
        }
        calcInputResult.innerHTML = new Intl.NumberFormat('ru-RU').format(this.value);
        calc();
    });

    calcInput.addEventListener("focus", function () {
        if (this.value == "") {
            calcInputResult.innerText = "";
        }

    });
    calcInput.addEventListener("blur", function () {
        if (this.value == "") {
            calcInputResult.innerText = calcInputDefaultValue;
        }

    });

    // btnsPoint.forEach((btn) => {

    //     btn.addEventListener("click", (e) => {
    //         btnsPoint.forEach((btn) => {
    //             btn.classList.remove("calc__btn_active");
    //         });
    //         e.target.classList.add("calc__btn_active");

    //     });
    // });

    $(btnsPoint).click(function () {
        $(this).siblings("button").removeClass("calc__btn_active");
        $(this).addClass("calc__btn_active");
        calcInputResult.innerText = calcInputDefaultValue;
        calcInput.value = "";
        calcLabel.classList.remove("calc__input-label_active");
        calc();

    });

    $(btnsPackage).click(function () {
        $(this).siblings("button").removeClass("calc__btn_active");
        $(this).addClass("calc__btn_active");
        calc();
    });

    //calc slider

    $(".calc__slider-container .slider").on("moved.zf.slider", function () {
        let value = $("input", this).val();
        value = new Intl.NumberFormat('ru-RU').format(value);
        $(this).siblings(".calc__slider-value").html(value + " &#8381;");
        calc();
    });
    // let test = $(".calc__slider-container .slider").data();
    // console.log(test);


    function calc() {
        let turnOver = +$(".calc__slider-turnover input").val(),
            rent = +$(".calc__slider-rent input").val(),
            fund = +$(".calc__slider-fund input").val(),
            other = +$(".calc__slider-other input").val(),
            additional = +$(".calc__slider-additional input").val();


        let package = +$(".calc__btn-package.calc__btn_active").data("package"),
            points = 1;

        if ($(".calc__btn_point.calc__btn_active").length > 0) {
            points = +$(".calc__btn_point.calc__btn_active").data("point");
        } else if ($(".calc__input-point.calc__input-label_active").length > 0) {
            points = +$(".calc__input-point input").val();
        }
        console.log(points);

        let n = package == 1 ? 0.035 : 0.044;
        let reward = (turnOver * n + additional).toFixed(0) * points;
        let profit = reward - (fund + rent + other) * points;
        reward = new Intl.NumberFormat('ru-RU').format(reward);
        profit = new Intl.NumberFormat('ru-RU').format(profit);
        $(".calc__reward-value").html(reward + ' &#8381;');
        $(".calc__profit-value").html(profit + ' &#8381;');

    }

    //input placeholders 
    $('.form__input').focus(function () {
        $(this).siblings('.form__placeholder').addClass('form__placeholder_focus');
    });
    $('.form__input').blur(function () {
        if (this.value !== '') return;
        $(this).siblings('.form__placeholder').removeClass('form__placeholder_focus');
    });


    /* Support slider
    **************************************************************/

    const supportSlider = $(".support__slider");

    new Swiper($('.swiper-container', supportSlider)[0], {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: $('.swiper-slider__arrow_right', supportSlider)[0],
            prevEl: $('.swiper-slider__arrow_left', supportSlider)[0]
        },
        slidesPerView: 5,
        spaceBetween: 24

    });

    /* Reasons slider
    // **************************************************************/

    const reasonsSlider = $(".reasons__slider");

    new Swiper($('.swiper-container', reasonsSlider)[0], {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: $('.swiper-slider__arrow_right', reasonsSlider)[0],
            prevEl: $('.swiper-slider__arrow_left', reasonsSlider)[0]
        },

        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
                allowTouchMove: true
            },
            // when window width is >= 480px
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
                allowTouchMove: true
            },
            // when window width is >= 640px
            1472: {
                slidesPerView: 5,
                spaceBetween: 24,
                allowTouchMove: false
            }
        }

    });
    // var reasonSwiper = Swiper;
    // var reasonSwiperInit = false;
    // const reasonsSlider = $(".reasons__slider");

    // function reasonsSwiperMode() {

    //     if (mobile.matches && reasonSwiperInit) {
    //         reasonSwiper.destroy();
    //         reasonSwiperInit = false;
    //         console.log('mobile');

    //     }

    //     // Disable (for tablet)
    //     else if (tablet.matches && !reasonSwiperInit) {

    //         reasonSwiperInit = true;

    //         reasonSwiper = new Swiper($('.swiper-container', reasonsSlider)[0], {
    //             direction: 'horizontal',
    //             loop: true,
    //             navigation: {
    //                 nextEl: $('.swiper-slider__arrow_right', reasonsSlider)[0],
    //                 prevEl: $('.swiper-slider__arrow_left', reasonsSlider)[0]
    //             },
    //             slidesPerView: 4,
    //             spaceBetween: 24,


    //         });

    //         console.log('tablet');
    //     }

    //     // Disable (for desktop)
    //     else if (desktop.matches && reasonSwiperInit) {
    //         reasonSwiper.destroy();
    //         reasonSwiperInit = false;

    //         console.log('desktop');
    //     }

    // }

    // window.addEventListener('load', function () {
    //     reasonsSwiperMode();
    // });


    // window.addEventListener('resize', function () {
    //     reasonsSwiperMode();
    // });



});
