class Cities extends React.Component {

	changeLocation(city) {
		this.props.handleUserInput(city);
	}

	render () {
		let that = this;
		return (
			<ul className="city-list">
				<li className="city-heading">Around the world</li>
				{this.props.list.map(city => {
					return <li onClick={() => that.changeLocation(city)}>{ city }</li>
				}) }
			</ul>
		)
	}
}