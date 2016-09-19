class Sun extends React.Component {
	render () {
		var rise = this.props.data.rise,
			set = this.props.data.set;

		return (
			<ul className="current-weather-list">
				<li><img src="images/Weather-Sunrise-icon.png" alt="sunrise" title="sunrise" /> Sunrise: {rise}</li>
				<li><img src="images/Weather-Sunset-icon.png" alt="sunset" title="sunset" /> Sunset: {set}</li>
			</ul>
		);
	}
}