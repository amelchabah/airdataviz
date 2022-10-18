// récupération des données en json

fetch("./json/data_reasons.json")
    .then(res => res.json())
    .then(data => console.log(JSON.stringify(data)));

document.addEventListener("DOMContentLoaded", function() {
    //création de mes section de "Si j'étais ... Je serais..."
    //lier le data.json
    fetch('./json/data_reasons.json').then(function(res) {
        res.json().then(function(data) {
            data.forEach(function viewData(reason) {
                document.querySelector('.data-reasons').innerHTML += '<p class=' + reason.reason + '>' + reason.reason + ' : ' + reason.percentage + '</p>'
            })
        })
    })

    for (let i; i == 3; i++) {
        document.querySelector('.reasons-icons').append(
            '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="250px" viewBox="0 0 500 250" version="1.1">' +
            '<mask id=\"mask0_7_196\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"308\" height=\"308\">' +
            '<circle cx=\"154\" cy="154" r="154" fill="#D9D9D9"/>' +
            '</mask>' +
            '<g mask="url(#mask0_7_196)">' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M154 212.981C171.621 212.981 187.929 207.355 201.223 197.799C208.745 192.393 219.675 192.582 224.326 200.594C236.638 221.805 244 248.709 244 277.981C244 346.465 203.706 401.981 154 401.981C104.294 401.981 64 346.465 64 277.981C64 248.709 71.362 221.805 83.6743 200.594C88.3248 192.582 99.2548 192.393 106.777 197.799C120.071 207.355 136.379 212.981 154 212.981Z" fill="#F1F7ED"/>' +
            '<circle cx="154" cy="130" r="70" fill="#F1F7ED"/>' +
            '</g>' +
            '</svg>')
        console.log(i)
    };

    function appendPhotosToParagraph(paragraph_id, how_many_times):
    var paragraph = document.getElementById(paragraph_id);
    for (var i = 0; i < how_many_times; i++) {
        paragraph.innerHTML += "<img src='location_of_your_photo_file/file_name.jpg'";
    }

    appendPhotosToParagraph('unique_id', 5);
    appendPhotosToParagraph('unique_id2', 25);
});



// animations
AOS.init();

// smooth scroll
$(function() {
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