// déclaration des svg
import { blanksvgfamily } from './svg.js';
import { blanksvgbusiness } from './svg.js';
import { blanksvgholidays } from './svg.js';
import { blanksvgother } from './svg.js';
import { holidayssvg } from './svg.js';
import { businesssvg } from './svg.js';
import { familysvg } from './svg.js';
import { othersvg } from './svg.js';

window.onload = function() {
    getDataPodium();
    getDataReasons();
};

// fait pas néo le dieuxxxxx
// remplissage de la grille

// most visited country over the years

function getDataPodium() {
    fetch('./json/data_podium.json')
        .then(res => res.json())
        .then(data => {


            let idtrv = [];
            let cit = [];
            let trv = [];

            data.forEach(function viewData(podium) {
                idtrv.push(podium.top.top2.travellers, podium.top.top1.travellers, podium.top.top3.travellers);
                cit.push(podium.top.top2.country, podium.top.top1.country, podium.top.top3.country);
            });

            trv.push(idtrv[0], idtrv[1], idtrv[2]);
            console.log(trv);

            let cl = cit.length;
            let space = 150 / trv.length;



            for (var i = 0; i < cl; i++) {
                console.log(i);
                document.querySelector("#podiumsvg").innerHTML += `<rect class="rect${i}"></rect>`;
                $(`.rect${i}`).attr("transform", "translate(" + ((space * i) - (0.5 * space)) + ", 0)");
                $(`.rect${i}`).css({
                    "width": "50px",
                    "height": (trv[i]) + "px",
                    "y": -(trv[i]) + 95,
                    "fill": "#0a061d",
                    "stroke": "#87b1ff",
                });
            };

            for (var i = 1; i < 4; i++) {
                let pod = [2, 1, 3];
                document.querySelector('#podiumsvg').innerHTML += `<text class="top top${i}" x="${22.5 - space}px" y="90px">${pod[i-1]}</text>`;
                $(`.top${i}`).attr("transform", "translate(" + ((space * i) - (0.5 * space)) + ", 0)");
            };


            const range = document.querySelector("input[type=\"range\"]");
            range.addEventListener("input", () => {
                let valR = -(range.value - 2021) + 1;

                let trvR = [];
                trvR.push(idtrv[valR * 3], idtrv[valR * 3 + 1], idtrv[valR * 3 + 2]);

                let clR = cit.length;
                let spaceR = 150 / trv.length;

                for (var i = 0; i < clR; i++) {
                    console.log(i);
                    document.querySelector("#podiumsvg").innerHTML += `<rect class="rect${i}"></rect>`;
                    $(`.rect${i}`).attr("transform", "translate(" + ((spaceR * i) - (0.5 * space)) + ", 0)");
                    $(`.rect${i}`).css({
                        "width": "50px",
                        "height": (trvR[i]) + "px",
                        "y": -(trvR[i]) + 95,
                        "fill": "#0a061d",
                        "stroke": "#87b1ff"
                    });

                };

                for (var i = 1; i < 4; i++) {
                    let pod = [2, 1, 3];
                    document.querySelector('#podiumsvg').innerHTML += `<text class="top top${i}" x="${22.5 - space}px" y="90px">${pod[i-1]}</text>`;
                    $(`.top${i}`).attr("transform", "translate(" + ((space * i) - (0.5 * space)) + ", 0)");
                };
            });

        });

};


let wrapperBlock = document.querySelector(".container");
let tab = [];

function getDataReasons() {
    fetch('./json/data_reasons.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(function viewData(reason) {
                for (var i = 0; i < reason.percentage; i++) {
                    tab.push(reason.reason);
                }
                // shuffleArray(tab);
                tab.sort(function(a, b) { return Math.random() - 0.5 })
            })

            tab.forEach(function(reason) {
                var square = document.createElement("div");
                square.classList.add("" + reason + "");
                wrapperBlock.appendChild(square).innerHTML += '<svg id="blanksvg' + reason + '" width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 55.3199C44.577 55.3199 48.8126 53.8583 52.2656 51.3765C54.2195 49.9721 57.0585 50.0213 58.2664 52.1023C61.4644 57.6118 63.3766 64.5997 63.3766 72.203C56.8831 76.2729 52.9106 80 40 80C27.0894 80 21.7336 75.5951 16.6234 72.203C16.6234 64.5997 18.5356 57.6118 21.7336 52.1023C22.9415 50.0213 25.7805 49.9721 27.7344 51.3765C31.1874 53.8583 35.423 55.3199 40 55.3199Z" fill="#F1F7ED"/><path d="M58.1818 33.7662C58.1818 43.8078 50.0415 51.9481 40 51.9481C29.9585 51.9481 21.8182 43.8078 21.8182 33.7662C21.8182 23.7247 29.9585 15.5844 40 15.5844C50.0415 15.5844 58.1818 23.7247 58.1818 33.7662Z" fill="#F1F7ED"/></svg>';
            })
        });
};


let perholidays = '<h3 class="h3Per black   "> 51% </h3>' +
    '<p> The main reason people travel is for holidays. We can see that almost one in two people travel for the pleasure of going on holiday. <p>';
let perbusiness = '<h3 class="h3Per black   "> 15% </h3>' +
    '<p> People also travel for work reasons. 15% of travellers travel to work abroad or to set up their own business. <p>';
let perfamily = '<h3 class="h3Per black "> 27% </h3>' +
    '<p> The second main reason people travel, after holidays, is for family reasons. Nearly a quarter of people travel for this reason. <p>';
let perother = '<h3 class="h3Per black  "> 7% </h3>' +
    '<p> There are also many other reasons, they do not travel for business or tourism but probably for a more personal reason like 7% of the people. <p>';

// animation au hover

let $holidays = $('.bouton.divholidays');
let $business = $('.bouton.divbusiness');
let $family = $('.bouton.divfamily');
let $other = $('.bouton.divother');


function businessHover() {
    $(".business").html(businesssvg);
    $(".percentage").html(perbusiness);
    $(this).css("cursor", "pointer").css("color", "#0a061d");
};

function holidaysHover() {
    $(".holidays").html(holidayssvg);
    $(".percentage").html(perholidays);
    $(this).css("cursor", "pointer").css("color", "#0a061d");
};

function familyHover() {
    $(".family").html(familysvg);
    $(".percentage").html(perfamily);
    $(this).css("cursor", "pointer").css("color", "#0a061d");
};

function otherHover() {
    $(".other").html(othersvg);
    $(".percentage").html(perother);
    $(this).css("cursor", "pointer").css("color", "#0a061d");
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