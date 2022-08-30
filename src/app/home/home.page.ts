import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   meteo: any;
   private img:any
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'localhost:8200',
      'Content-Type': 'application/json'
    }),

  };
  constructor(private http: HttpClient) {
    
    this.meteo=this.getMeteoVille()
    //this.img='assets/images/'+this.meteo.weather[0].main+'.png'
  
  }

    getMeteo(form) {
  
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+ form.ville + '&appid=8933442263ba730f3b09b8913247e510').
        subscribe(response => { this.meteo=response;  console.log(this.meteo.main); return response;  } );
    }

    getMeteoVille() {
  
      this.http.get('http://api.openweathermap.org/data/2.5/weather?q=dakar&appid=8933442263ba730f3b09b8913247e510').
          subscribe(response => { this.meteo=response;  console.log(this.meteo.main); return response;  } );
      }
}
