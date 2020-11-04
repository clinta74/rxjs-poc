import { Component } from '@angular/core';
import { ApiService, WeatherForecast } from './api/api.service';
import { debounceTime, shareReplay, switchMap, switchMapTo, take, takeLast, map } from 'rxjs/operators';
import { fromEvent, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'rxjs-ng';
    weatherForecasts: WeatherForecast[] = [];

    constructor(private api: ApiService) { };

    ngOnInit() {
        const getWeather = document.getElementById('getWeather');

        fromEvent(getWeather, 'click')
            .pipe(switchMap(this.api.getWeatherForecast))
            .subscribe(res => this.weatherForecasts = res)
    }
}
