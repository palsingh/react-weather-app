class CurrentWeather extends React.Component {
	render () {
		return (
			<ul className="current-weather-list">
				<li>Current: {this.props.data.value}℃</li>
				<li>Min: {this.props.data.min}℃</li>
				<li>Max: {this.props.data.max}℃</li>
			</ul>
		)
	}
}