class Cities extends React.Component {

	changeLocationSelect (e) {
		this.props.handleUserInput(e.target.value);
	}

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