import { Component, OnInit } from '@angular/core';
import { ListapiService } from '../listapi.service';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.sass']
})
export class StocklistComponent implements OnInit { 
  cities;
  constructor(private apiService:ListapiService) {}
  ngOnInit() {
    this.apiService.getWeather().subscribe((data)=>{
      console.log(data);

      this.cities = data;
    });
  }
}