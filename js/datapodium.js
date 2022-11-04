// window.onload = function() {
//     getDataPodium();
// };

// function getDataPodium() {
//     fetch('./json/data_podium.json')
//         .then(res => res.json())
//         .then(data => {

//             let trv = [];
//             let cit = [];
//             let cla = [];

//             data.forEach(function viewData(podium) {
//                 trv.push(podium.top.top2.travellers);
//                 trv.push(podium.top.top1.travellers);
//                 trv.push(podium.top.top3.travellers);
//                 cit.push(podium.top.top2.country);
//                 cit.push(podium.top.top1.country);
//                 cit.push(podium.top.top3.country);
//                 cla.push(podium.top.top2.class);
//                 cla.push(podium.top.top1.class);
//                 cla.push(podium.top.top3.class);
//             });

//             console.log(trv);
//             console.log(cit);
//             console.log(cla);

//             let cl = cit.length;
//             let space = 100 / cit.length + 3;

//             for (var i = 0; i < cl; i++) {
//                 // let r = ;
//                 console.log(i);
//                 let rect = document.createElement("rect").classList.add(`rect${i}`);
//                 document.querySelector("#podiumsvg").innerHTML += `<rect class="rect${i}"></rect>`;

//                 $('.rect' + i + '').attr("transform", "translate(" + space * i + ", 0)");
//                 $('.rect' + i + '').css({
//                     "width": "33px",
//                     "height": (trv[i]) + "px",
//                     "y": -(trv[i]) + 95,
//                     "fill": "#0a061d"
//                 });
//             };
//         });
// };