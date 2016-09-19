class Cities extends React.Component {

	/**
	 * Execute method of parent component to update state. Mobile only.
	 * @param {Object} e - Event object for change in value of selectbox
	 */
	changeLocationSelect (e) {
		this.props.handleUserInput(e.target.value);
	}

	/**
	 * Execute method of parent component to update state
	 * @param {string} city - Name of the city for which weather data will be loaded
	 */
	changeLocation (city) {
		this.props.handleUserInput(city);
	}

	render () {
		let that = this;
		return (
			<div>
				<select className="city-list-select" onChange={ this.changeLocationSelect.bind(this) }>
					{this.props.list.map(city => {
						return <option value={ city }>{ city }</option>
					}) }
				</select>
				<ul className="city-list">
					<li className="city-heading">Around the world</li>
					{this.props.list.map(city => {
						return <li onClick={() => that.changeLocation(city)}>{ city }</li>
					}) }
				</ul>
			</div>
		)
	}
}