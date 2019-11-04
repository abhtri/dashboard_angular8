import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListapiService {
  API_KEY = '10d5414f3680d2f4061949295552471d';
  url = './assets/weather.json';
  kolkataurl = './assets/kolkata.json';
  constructor(private httpClient:HttpClient) { 

  }
  public getWeather(){
    
      return this.httpClient.get(this.url);
    
  }

  public getKolkataWeather(){
    
    return this.httpClient.get(this.kolkataurl);
  
}
}
