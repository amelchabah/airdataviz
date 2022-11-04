fetch('./json/data_podium.json').then(function(e) {
    e.json().then(function(data) {
        window.onload = function() {

            let trv = [];
            let cit = [];
            console.log(trv);
            console.log(cit);

            data.forEach(function viewData(podium) {
                trv.push(podium.top.top2.travellers);
                trv.push(podium.top.top1.travellers);
                trv.push(podium.top.top3.travellers);
                cit.push(podium.top.top2.country);
                cit.push(podium.top.top1.country);
                cit.push(podium.top.top3.country);
            });

            cit.forEach(function(step) {
                var newG = document.createElement("g");
                newG.classList.add("" + step + "");
                document.querySelector(".podiumsvg").appendChild(newG);
            });

            for (var i = 0; i < trv.length; i++) {

                let width = 100 / trv.length;
                let tour = trv[i];
                let city = cit[i];

                let newStep = '<rect style="width: ' + width + '; height: ' + tour + '; fill: #0a061d; stroke: white;"></rect>';
                $("." + city + "").html(newStep);

                console.log(width);
                console.log(city);
                console.log(tour);
                console.log(newStep);

            };
        };
        // $("." + city + "").css("background-color", "blue");
        // $("." + city + "").css("transform", "translate(25px, 0)");

        // step = d3.select("#podiums")
        //     .selectAll(".steps")
        //     .data(trv)
        //     .enter()
        //     .append("g")
        //     .attr("class", "steps")
        //     .attr("transform", (d, i) => `translate(${i*space}, 0)`);

        // d3.selectAll(".steps")
        //     .append("rect")
        //     .style("width", width)
        //     .style("height", (d, i) => trv[i] * 3)
        //     .style("y", (d, i) => -(trv[i] * 3) + 95)
        //     .style("fill", "#0a061d");


        // step.on("mouseenter", function(e, d) {
        //     /* transparence */
        //     d3.selectAll(".steps")
        //         .style("opacity", "0.5")
        //     d3.select(this)
        //         .style("opacity", null)
        // })

        // step.on("mouseleave", function() {
        //     /* transparence */
        //     d3.selectAll(".steps")
        // .style("opacity", null)
        // })
    });
});