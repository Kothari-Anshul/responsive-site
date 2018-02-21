function plot_graph(){
	d3.json("../plot1.json", function(error, data){
		var keys = [];
		var value = [];
		
		
		var i = 0;
		for(key in data){
			 keys[i] = key;
			 value[i] = data[key];
			 
			 i++;
			 
		}


		
		
		/*Create SVG using D3 file or script*/

		var svg = d3.select("body").append("svg")
			.attr("height","100%")
			.attr("width","100%");

		svg.selectAll("rect")
			.data(value)
			.enter().append("rect")
			.attr("height",function(d,i) {
				return 2*Math.floor(d/1000000) + 5 ;
			})
			.attr("class","bar")
			.attr("width","10")
			.attr("x",function(d,i){
				return (i*38 + 10);
			})
			.attr("y",function(d,i){
				return (400 - 2*Math.floor(d/1000000));
			});
		svg.selectAll("text.y")
			.data(value)
			.enter().append("text")
			.attr("class","y")
			.text(function(d){
				return Math.floor(d/1000000) + "M";
			})
			.attr("x",function(d,i){
				return (i*38 + 10);
			})
			.attr("y", function(d,i){
				return (395 - 2*Math.floor(d/1000000));
			});
		svg.selectAll("text.x")
			.data(keys)
			.enter().append("text")
			.attr("class","x")
			.text(function(d){
				return  d;
			})
			.attr("transform", function(d,i){
				return "translate(" + (i*38 + 10) + "," + "430" + ") rotate(90)";
			})
			
		
		
	});
}
/*Call to the function to plot the graph from the JSON build using initial.js file */
