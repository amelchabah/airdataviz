let pod = [];

fetch('./json/data_podium.json').then(function(e) {
    e.json().then(function(data) {
        window.onload = function() {

            let trv = [];
            let cit = [];

            data.forEach(function viewData(podium) {
                trv.push(podium.top.top2.travellers);
                trv.push(podium.top.top1.travellers);
                trv.push(podium.top.top3.travellers);
                cit.push(podium.top.top2.city);
                cit.push(podium.top.top1.city);
                cit.push(podium.top.top3.city);
            })

            console.log(trv);
            console.log(cit);

            let width = 100 / trv.length;
            let space = (100 / trv.length) + 2;

            console.log(width);

            step = d3.select("#podiums")
                .selectAll(".steps")
                .data(trv)
                .enter()
                .append("g")
                .attr("class", "steps")
                .attr("transform", (d, i) => `translate(${i*space}, 0)`);

            d3.selectAll(".steps")
                .append("rect")
                .style("width", width)
                .style("height", (d, i) => trv[i] * 3)
                .style("y", (d, i) => -(trv[i] * 3) + 95)
                .style("fill", "#0a061d");


            step.on("mouseenter", function(e, d) {
                /* transparence */
                d3.selectAll(".steps")
                    .style("opacity", "0.5")
                d3.select(this)
                    .style("opacity", null)
            })

            step.on("mouseleave", function() {
                /* transparence */
                d3.selectAll(".steps")
                    .style("opacity", null)
            })
        }
    })
});