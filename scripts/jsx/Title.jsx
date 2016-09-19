class Title extends React.Component {

	render () {
		return (
			<header>
				<div id="header">
					<h1>Weather | {this.props.city}, {this.props.country}</h1>
				</div>
			</header>
		);
	}
}