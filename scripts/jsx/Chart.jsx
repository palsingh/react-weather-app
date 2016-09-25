class Chart extends React.Component {

	renderChart() {
		if (!this.props.data) {
			return;
		}
		d3.selectAll("svg > *").remove();
		// Set the dimensions of the canvas / graph
		var margin = {top: 30, right: 20, bottom: 30, left: 50},
		    width = 600 - margin.left - margin.right,
		    height = 270 - margin.top - margin.bottom;

		// Parse the date / time
		var parseDate = d3.time.format("%Y-%m-%dT%H:%M:%S").parse;

		// Set the ranges
		var x = d3.time.scale().range([0, width]);
		var y = d3.scale.linear().range([height, 0]);

		// Define the axes
		var xAxis = d3.svg.axis().scale(x)
		    .orient("bottom").ticks(5);

		var yAxis = d3.svg.axis().scale(y)
		    .orient("left").ticks(5);

		// Define the line
		var valueline = d3.svg.line()
		    .x(function(d) {
		    	return x(d.from);
		    })
		    .y(function(d) {
		    	return y(d.temperature.value);
		    });
		    
		// Adds the svg canvas
		var svg = d3.select("svg")
		    .append("g")
		        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	    this.props.data.time.forEach(function(d) {
	        d.from = parseDate(d.from);
	        d.temperature.value = +d.temperature.value;
	    });

	    // Scale the range of the data
	    x.domain(d3.extent(this.props.data.time, function(d) { return d.from; }));
	    y.domain([0, d3.max(this.props.data.time, function(d) { return d.temperature.value; })]);

	    // Add the valueline path.
	    svg.append("path")
	        .attr("class", "line")
	        .attr("d", valueline(this.props.data.time));

	    // Add the X Axis
	    svg.append("g")
	        .attr("class", "x axis")
	        .attr("transform", "translate(0," + height + ")")
	        .call(xAxis);

	    // Add the Y Axis
	    svg.append("g")
	        .attr("class", "y axis")
	        .call(yAxis);

	}

	componentDidMount () {
		this.renderChart();
	}

	componentWillUpdate () {
		this.renderChart();
	}

	render () {
		return (
			<div className="chart-wrapper">
				<h3>Weather forecast of next 4 days</h3>
				<svg width="100%" viewBox="0 0 600 270" height="300" id="forecast"></svg>
			</div>
		);
	}
}