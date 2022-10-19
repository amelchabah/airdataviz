// récupération des données en json

fetch("./json/data_reasons.json")
    .then(res => res.json())
    .then(data => console.log(JSON.stringify(data)));

document.addEventListener("DOMContentLoaded", function () {
    //création de mes section de "Si j'étais ... Je serais..."
    //lier le data.json
    // fetch('./json/data_reasons.json').then(function (res) {
    //     res.json().then(function (data) {
    //         data.forEach(function viewData(reason) {
    //             document.querySelector('.data-reasons').innerHTML += '<p class=' + reason.reason + '>' + reason.reason + ' : ' + reason.percentage + '</p>'
    //         })
    //     })
    // });

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


