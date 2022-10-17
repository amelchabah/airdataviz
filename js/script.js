// récupération des données en json

fetch("./json/data_reasons.json")
    .then(res => res.json())
    .then(data => console.log(JSON.stringify(data)));

document.addEventListener("DOMContentLoaded", function () {
    //création de mes section de "Si j'étais ... Je serais..."
    //lier le data.json
    fetch('./json/data_reasons.json').then(function (res) {
        res.json().then(function (data) {
            data.forEach(function viewData(reason) {
                document.querySelector('.data-reasons').innerHTML += '<p class=' + reason.reason + '>' + reason.reason + ' : ' + reason.percentage + '</p>'
            })
        })
    })
});

// animations
AOS.init();

// smooth scroll
$(function () {
    $.scrollify({
        section: ".scrollify",
        scrollSpeed: 800,
        scrollbars: false,
    });
});


// data - map

let $continent = $('.continent');
$continent.on('mouseenter', opacityOnHover).on('mouseleave', opacityRemove);

let $latinAmerica = $('#latin-america'),
    $latinAmericaTooltip = $('#latin-america-tooltip');

$latinAmerica.on('mousemove', showTooltip).on('mouseleave', hideTooltip);

let $westAfrica = $('#west-africa'),
    $westAfricaTooltip = $('#west-africa-tooltip');

$westAfrica.on('mousemove', showTooltip).on('mouseleave', hideTooltip);

let $northAfrica = $('#north-africa'),
    $northAfricaTooltip = $('#north-africa-tooltip');

$northAfrica.on('mousemove', showTooltip).on('mouseleave', hideTooltip);

let $southAfrica = $('#south-africa'),
    $southAfricaTooltip = $('#south-africa-tooltip');

$southAfrica.on('mousemove', showTooltip).on('mouseleave', hideTooltip);

var $russia = $('#russia'),
    $russiaTooltip = $('#russia-tooltip');

$russia.on('mousemove', showTooltip).on('mouseleave', hideTooltip);

var $southAsia = $('#south-asia'),
    $southAsiaTooltip = $('#south-asia-tooltip');

$southAsia.on('mousemove', showTooltip).on('mouseleave', hideTooltip);

function showTooltip(event) {
    var el = event.currentTarget.id,
        selector = "#" + el + "-tooltip",
        tooltip = $(selector);

    var top = event.pageY,
        left = event.pageX,
        tooltipWidth = tooltip.outerWidth(),
        tooltipHeight = tooltip.outerHeight();

    var positionX = (left - (tooltipWidth / 2)) + "px",
        positionY = (top - (tooltipHeight + 22)) + "px";

    tooltip.css({
        "left": positionX,
        "top": positionY,
        "display": "block"
    });
};

function hideTooltip() {
    $('.world-tooltip').hide();
};

function opacityOnHover() {
    $(".continent").css("opacity", "0.5");
    $(this).css("opacity", "1")
};

function opacityRemove() {
    $(".continent").css("opacity", "1");
};
