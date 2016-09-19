class WeatherApp extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			currentCity: '',
			data: {},
			forecast: {}
		}
		this.api = new API(this.props.api, this.props.appid, this.props.format);
		this.onCityChange = this.onCityChange.bind(this);
	}

	componentDidMount () {
		if (this.state.currentCity === '') {
			this.setState({ currentCity: this.props.cities[0]}, () => {
				this.fetchWeatherForecast(this.state.currentCity);
			});
		} else {
			this.fetchWeatherForecast(this.state.currentCity);
		}
		
  	}

  	fetchWeatherForecast (city) {
  		let that = this;
  		this.api.fetchWeatherForecast(city).then(response => {
  			let x2js = new X2JS({attributePrefix : ''}),
  				weatherData = x2js.xml2js(response.weather.data),
  				forecastData = x2js.xml2js(response.forecast.data);

			that.setState({ forecast: forecastData, data: weatherData, currentCity: city });
		});
  	}

  	onCityChange(city) {
  		this.fetchWeatherForecast(city);
  	}

	render () {
		let country = this.state.data.current ? this.state.data.current.city.country : '',
			temperature = this.state.data.current ? this.state.data.current.temperature : '',
			sun = this.state.data.current ? this.state.data.current.city.sun : '',
			forecast = this.state.forecast.weatherdata ? this.state.forecast.weatherdata.forecast : '';

		return (
			<div id="main">
				<div className="sidebar">
					<Cities list={this.props.cities} handleUserInput={this.onCityChange} />
				</div>
				<div className="content">
					<Title city={this.state.currentCity} country={country} />
					<CurrentWeather data={temperature} />
					<Sun data={sun} />
					<Chart data={forecast} />
				</div>
			</div>
		)
	}
}
//<Chart data={forecast} />
var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "San Francisco", "Mexico City", "Tokyo", "London", "Paris", "New Delhi", "Kuala Lumpur"];

ReactDOM.render(<WeatherApp appid="3c3cdd60dedd1935630b41776bcba5cf" api="http://api.openweathermap.org/data/2.5/" format="xml" cities={cities} />, document.getElementById("container"));