// // déclaration des svg
// import { blanksvgfamily } from './svg.js';
// import { blanksvgbusiness } from './svg.js';
// import { blanksvgholidays } from './svg.js';
// import { blanksvgother } from './svg.js';
// import { holidayssvg } from './svg.js';
// import { businesssvg } from './svg.js';
// import { familysvg } from './svg.js';
// import { othersvg } from './svg.js';

// window.onload = function() {
//     getDataPodium();
//     getDataReasons();
// };

// // most visited country over the years

// function getDataPodium() {
//     fetch('./json/data_podium.json')
//         .then(res => res.json())
//         .then(data => {


//             let idtrv = [];
//             let idcit = [];
//             let cit = [];
//             let trv = [];
//             let years = [];

//             data.forEach(function viewData(podium) {
//                 idtrv.push(podium.top.top1.travellers, podium.top.top2.travellers, podium.top.top3.travellers);
//                 idcit.push(podium.top.top1.country, podium.top.top2.country, podium.top.top3.country);
//                 years.push(podium.year);
//             });


//             trv.push(idtrv[0], idtrv[1], idtrv[2]);
//             cit.push(idcit[0], idcit[1], idcit[2]);

//             changeHeight(trv);
//             changeLabel(cit);

//             $(".rect1").hover(function() {
//                 hoverPodium(2022, cit[0], trv[0]);
//                 evidencePodium("rect1");
//             }).mouseleave(function() {
//                 removePodium();
//                 evidenceRemovePodium("rect1");
//             }).css("cursor", "pointer");

//             $(".rect2").hover(function() {
//                 hoverPodium(2022, cit[1], trv[1]);
//                 evidencePodium("rect2");
//             }).mouseleave(function() {
//                 removePodium();
//                 evidenceRemovePodium("rect2");
//             }).css("cursor", "pointer");

//             $(".rect3").hover(function() {
//                 hoverPodium(2022, cit[2], trv[2]);
//                 evidencePodium("rect3");
//             }).mouseleave(function() {
//                 removePodium();
//                 evidenceRemovePodium("rect3");
//             }).css("cursor", "pointer");

//             const range = document.querySelector("input[type=\"range\"]");
//             range.addEventListener("input", () => {
//                 let valR = -(range.value - 2021) + 1;
//                 let trvR = [];
//                 let citR = [];
//                 let yearsR = [];
//                 citR.push(idcit[valR * 3], idcit[valR * 3 + 1], idcit[valR * 3 + 2]);
//                 trvR.push(idtrv[valR * 3], idtrv[valR * 3 + 1], idtrv[valR * 3 + 2]);
//                 yearsR = years[valR];
//                 changeHeight(trvR);
//                 changeLabel(citR);

//                 $(".rect1").hover(function() {
//                     hoverPodium(yearsR, citR[0], trvR[0]);
//                     evidencePodium("rect1");
//                 }).mouseleave(function() {
//                     removePodium();
//                     evidenceRemovePodium("rect1");
//                 }).css("cursor", "pointer")

//                 $(".rect2").hover(function() {
//                     hoverPodium(yearsR, citR[1], trvR[1]);
//                     evidencePodium("rect2");
//                 }).mouseleave(function() {
//                     removePodium();
//                     evidenceRemovePodium("rect2");
//                 }).css("cursor", "pointer");

//                 $(".rect3").hover(function() {
//                     hoverPodium(yearsR, citR[2], trvR[2]);
//                     evidencePodium("rect3");
//                 }).mouseleave(function() {
//                     removePodium();
//                     evidenceRemovePodium("rect3");
//                 }).css("cursor", "pointer");


//             });
//         });
// };

// function hoverPodium(years, cit, trv) {
//     $(".desc").html("<h3 class=\"descyear\">In " + years + "</h3><p class=\"desccit\">" + cit + " was visited by</p><h3 class=\"desctourist\">" + trv + "</h3><p class=\"inline desccit \"> million tourists</p>");
// };

// function removePodium() {
//     $(".desc").html(" ");
// };

// function evidencePodium(rect) {
//     $(".podium").css("opacity", "60%");
//     $(`.${rect}`).css("opacity", "100%");
// };

// function evidenceRemovePodium(rect) {
//     $(".podium").css("opacity", "100%");
// };

// function changeLabel(tab) {
//     // changer la hauteur du .top
//     // boucle for
//     for (let i = 1; i < 4; i++) {
//         $(`.rect${i} .labelpays`).html(tab[i - 1])
//     }
// };

// function changeHeight(tab) {
//     // changer la hauteur du .top
//     // boucle for
//     for (let i = 1; i < 4; i++) {
//         $(`.rect${i} .top`).css({
//             "height": (tab[(i - 1)]) + "%",
//         });
//     }
// };


// //while hover .podium .rect1 use hoverPodium() with the value of the range

// // //while hover .podium .rect2 use hoverPodium() with the value of the range
// // $(".podium .rect2").hover(function() {
// //     hoverPodium();
// // });

// // //while hover .podium .rect3 use hoverPodium() with the value of the range
// // $(".podium .rect3").hover(function() {
// //     hoverPodium();
// // });



// let wrapperBlock = document.querySelector(".container");
// let tab = [];
// let per = [];

// function getDataReasons() {
//     fetch('./json/data_reasons.json')
//         .then(res => res.json())
//         .then(data => {
//             data.forEach(function viewData(reason) {
//                 for (var i = 0; i < reason.percentage; i++) {
//                     tab.push(reason.reason);
//                     per.push(reason.percentage);
//                 }
//                 // shuffleArray(tab);
//                 tab.sort(function(a, b) { return Math.random() - 0.5 })
//             })

//             tab.forEach(function(reason) {
//                 var square = document.createElement("div");
//                 square.classList.add("" + reason + "");
//                 wrapperBlock.appendChild(square).innerHTML += '<svg id="blanksvg' + reason + '" width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 55.3199C44.577 55.3199 48.8126 53.8583 52.2656 51.3765C54.2195 49.9721 57.0585 50.0213 58.2664 52.1023C61.4644 57.6118 63.3766 64.5997 63.3766 72.203C56.8831 76.2729 52.9106 80 40 80C27.0894 80 21.7336 75.5951 16.6234 72.203C16.6234 64.5997 18.5356 57.6118 21.7336 52.1023C22.9415 50.0213 25.7805 49.9721 27.7344 51.3765C31.1874 53.8583 35.423 55.3199 40 55.3199Z" fill="#F1F7ED"/><path d="M58.1818 33.7662C58.1818 43.8078 50.0415 51.9481 40 51.9481C29.9585 51.9481 21.8182 43.8078 21.8182 33.7662C21.8182 23.7247 29.9585 15.5844 40 15.5844C50.0415 15.5844 58.1818 23.7247 58.1818 33.7662Z" fill="#F1F7ED"/></svg>';
//             })
//         });
// };


// let perholidays = '<h3 class="h3Per black   "> ' + per[0] + ' </h3>' +
//     '<p> The main reason people travel is for holidays : almost one in two people travel for the pleasure of going on holidays. <p>';
// let perbusiness = '<h3 class="h3Per black   "> ' + per[1] + ' </h3>' +
//     '<p> People also travel for work reasons : to work abroad or to set up their own business. <p>';
// let perfamily = '<h3 class="h3Per black "> ' + per[2] + ' </h3>' +
//     '<p> The second main reason people travel, after holidays, is for family reasons (it\'s nearly a quarter!)<p>';
// let perother = '<h3 class="h3Per black  "> ' + per[3] + ' </h3>' +
//     '<p> There are also many other reasons : 7% of people travel to eat, meet people, explore... <p>';

// // animation au hover

// let $holidays = $('.bouton.divholidays');
// let $business = $('.bouton.divbusiness');
// let $family = $('.bouton.divfamily');
// let $other = $('.bouton.divother');


// function businessHover() {
//     $(".business").html(businesssvg);
//     $(".percentage").html(perbusiness);
//     $(this).css("cursor", "pointer").css("color", "#0a061d");
// };

// function holidaysHover() {
//     $(".holidays").html(holidayssvg);
//     $(".percentage").html(perholidays);
//     $(this).css("cursor", "pointer").css("color", "#0a061d");
// };

// function familyHover() {
//     $(".family").html(familysvg);
//     $(".percentage").html(perfamily);
//     $(this).css("cursor", "pointer").css("color", "#0a061d");
// };

// function otherHover() {
//     $(".other").html(othersvg);
//     $(".percentage").html(perother);
//     $(this).css("cursor", "pointer").css("color", "#0a061d");
// };

// function evidenceRemoveFamily() {
//     $(".family").html(blanksvgfamily);
//     $(".percentage").html(" ");
//     $(this).css("cursor", null).css("color", "#f1f7ed");
// };

// function evidenceRemoveBusiness() {
//     $(".business").html(blanksvgbusiness);
//     $(".percentage").html(" ");
//     $(this).css("cursor", null).css("color", "#f1f7ed");
// };

// function evidenceRemoveHolidays() {
//     $(".holidays").html(blanksvgholidays);
//     $(".percentage").html(" ");
//     $(this).css("cursor", null).css("color", "#f1f7ed");
// };

// function evidenceRemoveOther() {
//     $(".other").html(blanksvgother);
//     $(".percentage").html(" ");
//     $(this).css("cursor", null).css("color", "#f1f7ed");
// };

// $business.on('mouseover', businessHover).on('mouseleave', evidenceRemoveBusiness);
// $holidays.on('mouseover', holidaysHover).on('mouseleave', evidenceRemoveHolidays);
// $family.on('mouseover', familyHover).on('mouseleave', evidenceRemoveFamily);
// $other.on('mouseover', otherHover).on('mouseleave', evidenceRemoveOther);