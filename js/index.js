const $nav = $('nav');
const $navItem = $('.nav-item');
const $immersionBlock = $('.immersion-block');

$nav.hover(function () {
    $immersionBlock.stop(true, false).html("").show().fadeIn(300);
}, function () {
    $immersionBlock.stop(true, false).html("").show().fadeOut(300);
});


const $windowHeight = $(window).height();
const $scrollContainer = $('.scroll-container');
const NumIntroduction = $('.introduction').length;
const NumLiterature = $('.literature').length;
const NumExperiment = $('.experiment').length;
const NumResults = $('.results').length;
const NumDiscussion = $('.discussion').length;

const anchorIntroduction = $windowHeight * (2);
const anchorLiterature = anchorIntroduction + $windowHeight * NumLiterature;
const anchorExperiment = anchorLiterature + $windowHeight * NumExperiment;
const anchorResults = anchorExperiment + $windowHeight * NumResults;
const anchorDiscussion = anchorResults + $windowHeight * NumDiscussion;

$scrollContainer.scroll(function () {
    var position = $(this).scrollTop();
    console.log(position);
    if (position < $windowHeight * 2) {
        $navItem.removeClass('js-click');

    } else if (position > $windowHeight * 2 - 200 && position <= anchorIntroduction) {
        $('#introduction').addClass('js-click').siblings().removeClass('js-click');

    } else if (position > anchorIntroduction && position <= anchorLiterature) {
        $('#literature').addClass('js-click').siblings().removeClass('js-click');

    } else if (position > anchorLiterature && position <= anchorExperiment) {
        $('#experiment').addClass('js-click').siblings().removeClass('js-click');

    } else if (position > anchorExperiment && position <= anchorResults) {
        $('#results').addClass('js-click').siblings().removeClass('js-click');

    } else if (position > anchorResults && position <= anchorDiscussion) {
        $('#discussion').addClass('js-click').siblings().removeClass('js-click');

    } else if (position > anchorDiscussion) {
        $('#reference').addClass('js-click').siblings().removeClass('js-click');

    }
});

$immersionBlock.hide();
$navItem.click(function () {
    var text = $(this).find('.immer-en').text()
    $(this).addClass('js-click').siblings().removeClass('js-click');
    $immersionBlock.stop(true, false).html(text).show().fadeOut(800);
})

// icon

const $icon = $('.icon');
const $iconMoon = $('.icon-moon');
const $changeBackground = $('.js-change-white');
const $imgInvert = $('.img-invert');

$iconMoon.click(function () {
    $icon.toggleClass('js-icon-white-mode');
    $changeBackground.toggleClass('js-change-white').siblings().toggleClass('js-change-white');
    $imgInvert.toggleClass('img-invert').toggleClass('js-img-invert');
})

// ppt-web mode

const $iconComputer = $('.icon-computer');
const $webOnly = $('.web-only');
const $pptOnly = $('.ppt-only');

$webOnly.hide();

$iconComputer.click(function () {
    $(this).toggleClass('icon-computer').toggleClass('icon-ppt');
    $webOnly.toggle()
    $pptOnly.toggle()
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
// 初始背景顏色-白
var bg = false;
$root.css({
    "--main-color": "rgb(67, 151, 141)",
    "--bg-color2": "rgb(255, 255, 255)",
    "--bg-color3": "rgb(255, 255, 255)",
    "--bg-color4": "rgb(10, 10, 10)",
    "--bg-color5": "rgb(255, 255, 255)",
    "--bg-color6": "rgb(255, 255, 255)",
    "--bg-color7": "rgb(155, 155, 155)",
    "--font-color": "rgb(0, 0, 0)",
    "--font-color-content": "rgb(57, 57, 57)",
})
$icon.toggleClass('js-icon-white-mode');
$changeBackground.toggleClass('js-change-white').siblings().toggleClass('js-change-white');
// 
$iconMoon.click(function () {
    bg ? $root.css({
        "--main-color": "rgb(67, 151, 141)",
        "--bg-color2": "rgb(255, 255, 255)",
        "--bg-color3": "rgb(255, 255, 255)",
        "--bg-color4": "rgb(10, 10, 10)",
        "--bg-color5": "rgb(255, 255, 255)",
        "--bg-color6": "rgb(255, 255, 255)",
        "--bg-color7": "rgb(155, 155, 155)",
        "--font-color": "rgb(0, 0, 0)",
        "--font-color-content": "rgb(57, 57, 57)",
    }) : $root.css({
        "--main-color": "rgb(255, 41, 92)",
        "--bg-color2": "rgb(10, 10, 10)",
        "--bg-color3": "rgb(22, 22, 22)",
        "--bg-color4": "rgb(28, 28, 28)",
        "--bg-color5": "rgb(35, 35, 35)",
        "--bg-color6": "rgb(57, 57, 57)",
        "--bg-color7": "rgb(155, 155, 155)",
        "--font-color": "rgb(255, 255, 255)",
        "--font-color-content": "rgb(255, 255, 255)",
    });
    bg = !bg;
})


// language
const $cn = $('.cn');
const $en = $('.en');
const $language = $('.icon-language');
const $figCount = $('.fig-count-en');
const $tableCount = $('.table-count-en');

var language = true;
$cn.addClass('js-cnange-language')
$language.click(function () {
    language ? $language.css({ "background-position-y": "-240px", })
        : $language.css({ "background-position-y": "-270px", });
    $figCount.toggleClass('fig-count-en').toggleClass('fig-count-cn');
    $tableCount.toggleClass('table-count-en').toggleClass('table-count-cn');
    $cn.toggleClass('js-cnange-language');
    $en.toggleClass('js-cnange-language');
    language = !language;
    console.log(language);
})

// note

const $eye = $('.icon-eye');
const $eyeSlash = $('.icon-eye-slash');

var eye = 1;
$eye.click(function () {
    eye ? $(this).toggleClass("icon-eye").toggleClass("icon-eye-slash").parents().find('.js-eye-open').toggleClass("js-eye-open").toggleClass("js-eye-close") :
        $(this).toggleClass("icon-eye").toggleClass("icon-eye-slash").parents().find('.js-eye-close').toggleClass("js-eye-open").toggleClass("js-eye-close")
    eye = !eye;
    console.log(eye);
})


// refence-search

$(document).ready(function () {
    $('#search').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('#tab tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

const $reference = $('#tab>tr');
const $literatureLibrary = $('.literature-library > embed');

$reference.click(function () {
    $(this).addClass('js-reference-select').siblings().removeClass('js-reference-select');
    var refNum = $(this).index() + 1;
    $literatureLibrary.attr("src", `/ref/${refNum}.pdf`);
    console.log($literatureLibrary);
})
// RWD

const $window = $(window).width();


// img

// const $imgBox = $('.img-box-border>img');

// $imgBox.load(function () {
//     $('this').width();
//     $('this').height();
// })
