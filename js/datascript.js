// animations
AOS.init();

// smooth scroll
$(function () {
    $.scrollify({
        section: ".scrollify",
        scrollSpeed: 200,
    });
});

// importation des svg du fichier svg.js
import { loadingplanesvg } from './svg.js';
import { blanksvgfamily } from './svg.js';
import { blanksvgbusiness } from './svg.js';
import { blanksvgholidays } from './svg.js';
import { blanksvgother } from './svg.js';
import { holidayssvg } from './svg.js';
import { businesssvg } from './svg.js';
import { familysvg } from './svg.js';
import { othersvg } from './svg.js';
import { mapsvg } from './svg.js';

document.querySelector('#loader').innerHTML += loadingplanesvg;

// lancement des fonctions au chargement de la page
window.onload = function () {
    getDataPodium();
    getDataReasons();
    getDataMap();
};

// injection des données des fichiers json : carte
function getDataMap() {
    fetch('./json/data_map.json')
        .then(res => res.json())
        .then(data => {

            // injection (push) des données dans deux tableaux
            let data2019 = [];
            let data2020 = [];

            data.forEach(function viewDataMap(map) {
                data2019.push(map.africa.year2019.number, map.northafrica.year2019.number, map.southasia.year2019.number, map.europe.year2019.number, map.america.year2019.number);
                data2020.push(map.africa.year2020.number, map.northafrica.year2020.number, map.southasia.year2020.number, map.europe.year2020.number, map.america.year2020.number);
            });

            // injection des données des tableaux dans les 5 balises correspondant aux 5 régions dans index.html
            for (let i = 0; i < 5; i++) {
                // M = millions
                document.querySelector(`.n${i} p`).innerHTML += data2019[i] + 'M';
            };

            // au clic du bouton "avant", injecter les données de 2019
            document.querySelector('#before').addEventListener("click", () => {
                for (let i = 0; i < 5; i++) {
                    document.querySelector(`.n${i} p`).innerHTML = data2019[i] + 'M';
                }
            });

            // au clic du bouton "après", injecter les données de 2020
            document.querySelector('#after').addEventListener("click", () => {
                for (let i = 0; i < 5; i++) {
                    // calcul du taux de variation entre 2019 et 2020, arrondi au dixième
                    function numVariation(a, b) {
                        return ((b / a) - 1) * 100;
                    }
                    document.querySelector(`.n${i} p`).innerHTML = data2020[i] + 'M<br><span class="red"><b>' + Math.round(numVariation(data2019[i], data2020[i])) + '%</b></span>';
                }
            });
        });
}


// injection de la carte en svg
document.querySelector('.map').innerHTML += mapsvg;

// interactions des regions au hover et au clic des boutons "before" et "after"

// apparition de la bulle, suivant la position du curseur
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
    $('#after').attr("class", "white").css('transition', '0.5s').css('cursor', "default");
    $('#before').attr("class", "red").css('transition', '0.5s').css('cursor', "pointer");
    $('.data-map article').attr("class", "red").css('transition', '0.5s');
    $('#america g').attr("class", "red").css('transition', '0.5s');
    $('#africa g').attr("class", "red").css('transition', '0.5s');
    $('#europe g').attr("class", "red").css('transition', '0.5s');
    $('#south-asia g').attr("class", "red").css('transition', '0.5s');
    $('#north-africa g').attr("class", "red").css('transition', '0.5s');
}

function switchGreen() {
    $('#after').attr("class", "green").css('transition', '0.5s').css('cursor', "pointer");
    $('#before').attr("class", "white").css('transition', '0.5s').css('cursor', "default");
    $('.data-map article').attr("class", "green").css('transition', '0.5s');
    $('#america g').attr("class", "green").css('transition', '0.5s');
    $('#africa g').attr("class", "green").css('transition', '0.5s');
    $('#europe g').attr("class", "green").css('transition', '0.5s');
    $('#south-asia g').attr("class", "green").css('transition', '0.5s');
    $('#north-africa g').attr("class", "green").css('transition', '0.5s');
}

let $after = $('#after');
$after.on('click', switchRed);

let $before = $('#before');
$before.on('click', switchGreen);

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






// script : podium


// remplissage de la grille

function getDataPodium() {
    fetch('./json/data_podium.json')
        .then(res => res.json())
        .then(data => {

            // injection (push) des données dans cinq tableaux
            let idtrv = [];
            let idcit = [];
            let cit = [];
            let trv = [];
            let years = [];

            data.forEach(function viewData(podium) {
                idtrv.push(podium.top.top1.travellers, podium.top.top2.travellers, podium.top.top3.travellers);
                idcit.push(podium.top.top1.country, podium.top.top2.country, podium.top.top3.country);
                years.push(podium.year);
            });


            trv.push(idtrv[0], idtrv[1], idtrv[2]);
            cit.push(idcit[0], idcit[1], idcit[2]);

            changeHeight(trv);
            changeLabel(cit);

            // boucle
            for (let i = 1; i < 4; i++) {
                $(`.rect${i}`).hover(function () {
                    hoverPodium(2022, cit[i], trv[i]);
                    evidencePodium(`rect${i}`);
                }).mouseleave(function () {
                    removePodium();
                    evidenceRemovePodium(`rect${i}`);
                }).css("cursor", "pointer");
            }

            // $(".rect1").hover(function () {
            //     hoverPodium(2022, cit[0], trv[0]);
            //     evidencePodium("rect1");
            // }).mouseleave(function () {
            //     removePodium();
            //     evidenceRemovePodium("rect1");
            // }).css("cursor", "pointer");

            // $(".rect2").hover(function () {
            //     hoverPodium(2022, cit[1], trv[1]);
            //     evidencePodium("rect2");
            // }).mouseleave(function () {
            //     removePodium();
            //     evidenceRemovePodium("rect2");
            // }).css("cursor", "pointer");

            // $(".rect3").hover(function () {
            //     hoverPodium(2022, cit[2], trv[2]);
            //     evidencePodium("rect3");
            // }).mouseleave(function () {
            //     removePodium();
            //     evidenceRemovePodium("rect3");
            // }).css("cursor", "pointer");

            const range = document.querySelector("input[type=\"range\"]");
            range.addEventListener("input", () => {
                let valR = -(range.value - 2021) + 1;
                let trvR = [];
                let citR = [];
                let yearsR = [];
                citR.push(idcit[valR * 3], idcit[valR * 3 + 1], idcit[valR * 3 + 2]);
                trvR.push(idtrv[valR * 3], idtrv[valR * 3 + 1], idtrv[valR * 3 + 2]);
                yearsR = years[valR];
                changeHeight(trvR);
                changeLabel(citR);

                // boucle
                for (let i = 0; i < 3; i++) {
                    $(`.rect${i + 1}`).hover(function () {
                        hoverPodium(yearsR, citR[i], trvR[i]);
                        evidencePodium(`rect${i + 1}`);
                    }).mouseleave(function () {
                        removePodium();
                        evidenceRemovePodium(`rect${i + 1}`);
                    }).css("cursor", "pointer");
                }

                // $(".rect1").hover(function () {
                //     hoverPodium(yearsR, citR[0], trvR[0]);
                //     evidencePodium("rect1");
                // }).mouseleave(function () {
                //     removePodium();
                //     evidenceRemovePodium("rect1");
                // }).css("cursor", "pointer")

                // $(".rect2").hover(function () {
                //     hoverPodium(yearsR, citR[1], trvR[1]);
                //     evidencePodium("rect2");
                // }).mouseleave(function () {
                //     removePodium();
                //     evidenceRemovePodium("rect2");
                // }).css("cursor", "pointer");

                // $(".rect3").hover(function () {
                //     hoverPodium(yearsR, citR[2], trvR[2]);
                //     evidencePodium("rect3");
                // }).mouseleave(function () {
                //     removePodium();
                //     evidenceRemovePodium("rect3");
                // }).css("cursor", "pointer");
            });
        });
};

function hoverPodium(years, cit, trv) {
    $(".desc").html("<h3 class=\"descyear\">In " + years + "</h3><p class=\"desccit\">" + cit + " was visited by</p><h3 class=\"desctourist\">" + trv + "</h3><p class=\"inline desccit \"> million tourists</p>");
};

function removePodium() {
    $(".desc").html(" ");
};

function evidencePodium(rect) {
    $(".podium").css("opacity", "60%");
    $(`.${rect}`).css("opacity", "100%");
};

function evidenceRemovePodium(rect) {
    $(".podium").css("opacity", "100%");
};

function changeLabel(tab) {
    // changer la hauteur du .top
    // boucle for
    for (let i = 1; i < 4; i++) {
        $(`.rect${i} .labelpays`).html(tab[i - 1])
    }
};

function changeHeight(tab) {
    // changer la hauteur du .top
    // boucle for
    for (let i = 1; i < 4; i++) {
        $(`.rect${i} .top`).css({
            "height": (tab[(i - 1)]) + "%",
        });
    }
};


//while hover .podium .rect1 use hoverPodium() with the value of the range

// //while hover .podium .rect2 use hoverPodium() with the value of the range
// $(".podium .rect2").hover(function() {
//     hoverPodium();
// });

// //while hover .podium .rect3 use hoverPodium() with the value of the range
// $(".podium .rect3").hover(function() {
//     hoverPodium();
// });





// reasons to travel


function getDataReasons() {
    fetch('./json/data_reasons.json')
        .then(res => res.json())
        .then(data => {

            // injections des données : svg dans le container et chiffres dans un tableau

            let wrapperBlock = document.querySelector(".container");
            let tab = [];


            data.forEach(function viewData(reason) {
                for (var i = 0; i < reason.percentage; i++) {
                    tab.push(reason.reason);
                }
                // shuffleArray(tab);
                // repartition au hasard des svg
                tab.sort(function (a, b) { return Math.random() - 0.5 })
            })

            // ajout des svg correspondant dans chaque case du container
            tab.forEach(function (reason) {
                var square = document.createElement("div");
                square.classList.add("" + reason + "");
                wrapperBlock.appendChild(square).innerHTML += '<svg id="blanksvg' + reason + '" width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 55.3199C44.577 55.3199 48.8126 53.8583 52.2656 51.3765C54.2195 49.9721 57.0585 50.0213 58.2664 52.1023C61.4644 57.6118 63.3766 64.5997 63.3766 72.203C56.8831 76.2729 52.9106 80 40 80C27.0894 80 21.7336 75.5951 16.6234 72.203C16.6234 64.5997 18.5356 57.6118 21.7336 52.1023C22.9415 50.0213 25.7805 49.9721 27.7344 51.3765C31.1874 53.8583 35.423 55.3199 40 55.3199Z" fill="#F1F7ED"/><path d="M58.1818 33.7662C58.1818 43.8078 50.0415 51.9481 40 51.9481C29.9585 51.9481 21.8182 43.8078 21.8182 33.7662C21.8182 23.7247 29.9585 15.5844 40 15.5844C50.0415 15.5844 58.1818 23.7247 58.1818 33.7662Z" fill="#F1F7ED"/></svg>';
            })
        });
};

// descriptions des données
let perholidays = '<h3 class="h3Per black   "> 51% </h3>' +
    '<p> The main reason people travel is for holidays : almost one in two people travel for the pleasure of going on holidays. <p>';
let perbusiness = '<h3 class="h3Per black   "> 15% </h3>' +
    '<p> People also travel for work reasons : to work abroad or to set up their own business. <p>';
let perfamily = '<h3 class="h3Per black "> 27% </h3>' +
    '<p> The second main reason people travel, after holidays, is for family reasons (it\'s nearly a quarter!)<p>';
let perother = '<h3 class="h3Per black  "> 7% </h3>' +
    '<p> There are also many other reasons : 7% of people travel to eat, meet people, explore... <p>';


// animations et affichages de descriptions au hover
let $holidays = $('.bouton.divholidays');
let $business = $('.bouton.divbusiness');
let $family = $('.bouton.divfamily');
let $other = $('.bouton.divother');

function businessHover() {
    $(".business").html(businesssvg);
    $(".percentage").html(perbusiness);
    $(this).css("cursor", "pointer").css("color", "#0a061d").css("transition", "0.5s ease");
};

function holidaysHover() {
    $(".holidays").html(holidayssvg);
    $(".percentage").html(perholidays);
    $(this).css("cursor", "pointer").css("color", "#0a061d").css("transition", "0.5s ease");
};

function familyHover() {
    $(".family").html(familysvg);
    $(".percentage").html(perfamily);
    $(this).css("cursor", "pointer").css("color", "#0a061d").css("transition", "0.5s ease");
};

function otherHover() {
    $(".other").html(othersvg);
    $(".percentage").html(perother);
    $(this).css("cursor", "pointer").css("color", "#0a061d").css("transition", "0.5s ease");
};

function evidenceRemoveFamily() {
    $(".family").html(blanksvgfamily);
    $(".percentage").html(" ");
    $(this).css("cursor", null).css("color", "#f1f7ed");
};

function evidenceRemoveBusiness() {
    $(".business").html(blanksvgbusiness);
    $(".percentage").html(" ");
    $(this).css("cursor", null).css("color", "#f1f7ed");
};

function evidenceRemoveHolidays() {
    $(".holidays").html(blanksvgholidays);
    $(".percentage").html(" ");
    $(this).css("cursor", null).css("color", "#f1f7ed");
};

function evidenceRemoveOther() {
    $(".other").html(blanksvgother);
    $(".percentage").html(" ");
    $(this).css("cursor", null).css("color", "#f1f7ed");
};

$business.on('mouseover', businessHover).on('mouseleave', evidenceRemoveBusiness);
$holidays.on('mouseover', holidaysHover).on('mouseleave', evidenceRemoveHolidays);
$family.on('mouseover', familyHover).on('mouseleave', evidenceRemoveFamily);
$other.on('mouseover', otherHover).on('mouseleave', evidenceRemoveOther);