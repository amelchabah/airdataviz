// data - map

let $after = $('#after');
$after.on('click', switchRed);

let $before = $('#before');
$before.on('click', switchGreen);



// continents hover

let $continent = $('.continent');
$continent.on('mouseenter', opacityOnHover).on('mouseleave', opacityRemove);

let $America = $('#america'),
    $AmericaTooltip = $('#america-tooltip');
$America.on('mousemove', showTooltip).on('mouseleave', hideTooltip);

let $europe = $('#europe'),
    $europeTooltip = $('#europe-tooltip');
$europe.on('mousemove', showTooltip).on('mouseleave', hideTooltip);

let $northAfrica = $('#north-africa'),
    $northAfricaTooltip = $('#north-africa-tooltip');
$northAfrica.on('mousemove', showTooltip).on('mouseleave', hideTooltip);

let $Africa = $('#africa'),
    $AfricaTooltip = $('#africa-tooltip');
$Africa.on('mousemove', showTooltip).on('mouseleave', hideTooltip);

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

function switchRed() {
    $('#after').attr("class","white").css('transition','0.5s').css('cursor',"default");
    $('#before').attr("class","red").css('transition','0.5s').css('cursor',"pointer");
    $('.data-map article').attr("class", "red").css('transition','0.5s');
    $('#america g').attr("class", "red").css('transition','0.5s');
    $('#africa g').attr("class", "red").css('transition','0.5s');
    $('#europe g').attr("class", "red").css('transition','0.5s');
    $('#south-asia g').attr("class", "red").css('transition','0.5s');
    $('#north-africa g').attr("class", "red").css('transition','0.5s');
}

function switchGreen() {
    $('#after').attr("class", "green").css('transition','0.5s').css('cursor',"pointer");
    $('#before').attr("class","white").css('transition','0.5s').css('cursor',"default");
    $('.data-map article').attr("class", "green").css('transition','0.5s');
    $('#america g').attr("class", "green").css('transition','0.5s');
    $('#africa g').attr("class", "green").css('transition','0.5s');
    $('#europe g').attr("class", "green").css('transition','0.5s');
    $('#south-asia g').attr("class", "green").css('transition','0.5s');
    $('#north-africa g').attr("class", "green").css('transition','0.5s');
}