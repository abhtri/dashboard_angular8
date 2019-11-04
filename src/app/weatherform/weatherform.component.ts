import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import { ListapiService } from '../listapi.service';
@Component({
  selector: 'app-weatherform',
  templateUrl: './weatherform.component.html',
  styleUrls: ['./weatherform.component.sass']
})
export class WeatherformComponent implements OnInit {
  city = new FormControl('');  
  temp;
  constructor(private apiService:ListapiService) { }

  ngOnInit() {
  }

  getWeather() {  
    this.city.setValue('Kolkata');  
    this.apiService.getKolkataWeather().subscribe((data)=>{
      console.log(data);

      this.temp = data;
    });
  }  

}
