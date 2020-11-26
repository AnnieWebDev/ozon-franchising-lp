$(document).foundation();
document.addEventListener("DOMContentLoaded", () => {

    //header-dropdown

    const headerMenuItems = document.querySelectorAll(".header__menu-item");
    headerMenuItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            $(".header-dropdown", item).fadeIn();

        });
        item.addEventListener("mouseleave", () => {
            $(".header-dropdown", item).fadeOut();

        });

    });






});