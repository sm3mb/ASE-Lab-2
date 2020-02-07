import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather';
  weatherData;
  temperature;
  forecastData;
  cityNameAlert : boolean = false;
  apiNotFoundError : boolean = false;
  apiServerError : boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    
  }

  onWeather(city,state) {
    if (city == undefined || city == '') {
      this.cityNameAlert = true;
      setInterval(() => {
        this.cityNameAlert = false;
      },5000)
    } else {
      console.log('dsadadasdsa.........',city,state);
    this.weatherService.getWeather(city,state).subscribe( data => {
      this.weatherData = data;
      console.log('Data..............',data);
      this.onHourlyForecast(city,state);
    }, error => { 
      console.log('error....',error);
      if(error.status === 404) {
        this.apiNotFoundError = true;
        setInterval(() => {
          this.apiNotFoundError = false;
        },5000)
      } else if(error.status === 500) {
        this.apiServerError = true;
        setInterval(() => {
          this.apiServerError = false;
        },5000)
      }
    });
    }
  }

  onHourlyForecast(city,state) { 
    this.weatherService.getForecast(city,state).subscribe( res => { 
      console.log('forecast data......', res);
      this.forecastData = res;
    }, error => { 
      console.log('error....',error.status);
    })
  }

  tryNewCity() { 
    this.weatherData = null;
    this.forecastData = null;
  }
}
