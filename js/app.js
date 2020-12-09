$(document).foundation();
document.addEventListener("DOMContentLoaded", () => {

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
        btnsPoint = document.querySelectorAll(".calc__btn_point");





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

    });








});