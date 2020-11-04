import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = "https://localhost:5001/api";
  constructor(private http: HttpClient) { }

  getWeatherForecast = () => 
    this.http.get<WeatherForecast[]>(`${this.apiUrl}/weatherforecast`);
}
