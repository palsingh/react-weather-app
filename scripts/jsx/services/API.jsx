class API {
	constructor (baseUrl, key, format) {
		this.baseUrl = baseUrl;
		this.key = key;
		this.format = format;
	}

	fetchWeather (city) {
		return axios(`${this.baseUrl}weather?q=${city}&APPID=${this.key}&mode=${this.format}&units=metric`)
			.catch(error => {
				console.log("ERROR: ", error);
			});
	}

	fetchForecast (city) {
		return axios(`${this.baseUrl}forecast?q=${city}&APPID=${this.key}&mode=${this.format}&units=metric`)
			.catch(error => {
				console.log("ERROR: ", error);
			});
	}

	fetchWeatherForecast (city) {
		return axios.all([this.fetchWeather(city), this.fetchForecast(city)])
			.then(axios.spread((weather, forecast) =>  {
				return {
					weather,
					forecast
				}
			}))
			.catch(error => {
				console.log("ERROR: ", error);
			});
	}
}