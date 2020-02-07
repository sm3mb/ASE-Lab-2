import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f6ccf06846f34432b0fcdd57ec7ae65a';
  constructor(private http: HttpClient) { 
    
   }

  getWeather(city,state) { 
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type':  'application/json'
    //   })
    // }; 
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + state +'&APPID=f6ccf06846f34432b0fcdd57ec7ae65a');
  }

  getForecast(city,state) {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + state +'&APPID=f6ccf06846f34432b0fcdd57ec7ae65a');
  }
}
