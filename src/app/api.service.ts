import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http : HttpClient) { }

  getWeather(location){
   
    return this.http.get('http://api.weatherstack.com/current?access_key=d56ff3279c30c5706593d6d424b0b959&query=' +location);

  }
 


}
