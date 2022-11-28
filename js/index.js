const $navItem = $('.nav-item');

$navItem.click(function () {
    $(this).addClass('js-click').siblings().removeClass('js-click');
})


// today
// const $today = $('.today');
// $(document).ready(function () {
//     var myDate = new Date;
//     var year = date.getFullYear();
//     var month = date.getMonth() + 1;
//     var day = date.getDate();
// })

// icon

const $icon = $('.icon');
const $iconSun = $('.icon-sun');
const $iconMoon = $('.icon-moon');

$iconSun.click(function () {
    $icon.addClass('js-icon-bright-mode');
})
$iconMoon.click(function () {
    $icon.addClass('js-icon-dark-mode');
})


// data box
const $iconToggle = $('.icon-toggle');

$iconToggle.click(function () {
    var content = $(this).parent().siblings();
    var container = content.parent();
    container.toggleClass('js-data-container-close')
})

// :root

const $root = $(':root');
const $background = $('.setting-background');
var bg = true;

$background.click(function () {
    bg ? $root.css({
        "--bg-color1": "rgb(100, 100, 100)",
        "--bg-color2": "rgb(255, 255, 255)",
        "--bg-color3": "rgb(255, 255, 255)",
        "--bg-color4": "rgb(255, 255, 255)",
        "--bg-color5": "rgb(255, 255, 255)",
        "--bg-color6": "rgb(255, 255, 255)",
        "--bg-color7": "rgb(255, 255, 255)",
        "--font-color": "rgb(0, 0, 0)",
    }) : $root.css({
        "--bg-color1": "rgb(255, 41, 92)",
        "--bg-color2": "rgb(10, 10, 10)",
        "--bg-color3": "rgb(22, 22, 22)",
        "--bg-color4": "rgb(28, 28, 28)",
        "--bg-color5": "rgb(35, 35, 35)",
        "--bg-color6": "rgb(57, 57, 57)",
        "--bg-color7": "rgb(255, 255, 255)",
        "--font-color": "rgb(255, 255, 255)",
    });
    bg = !bg;
})


// setting
const $cn = $('.cn');
const $en = $('.en');
const $language = $('.setting-language');

$cn.addClass('js-cnange-language')

$language.click(function () {
    $cn.toggleClass('js-cnange-language').toggleClass('js-select');
    $en.toggleClass('js-cnange-language');

})

const $changeBackground = $('.js-change-background');

$changeBackground.click(function () {
    $changeBackground.toggleClass('js-change-background').siblings().toggleClass('js-change-background');
})

