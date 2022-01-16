import { Component, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked,AfterViewChecked} from '@angular/core';
import {CargarScriptsService} from './../../cargar-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public intro: String;
  public title: string;
  public subtitle: string;
  public web: string;
  public sttatus: string;
  public confirm: boolean;
  constructor(private _CargarScripts: CargarScriptsService) {
    this.intro="HOLA, SOY" 
    this.title="Matias Perez Yerga";
    this.subtitle="FULLSTACK IT ENGINEER";
    this.web= "Portfolio.com/mpy"
    this.sttatus="false";
    this.confirm=false;
    _CargarScripts.Carga(["capa/capa"]);  
   }

  ngOnInit(): void {
console.log("On INIT");
  }

  ngAfterContentInit(): void {
console.log("AfterContentInit");
  }

  ngAfterContentChecked(): void {
console.log("AfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }

  ngAfterViewChecked():void{
    console.log("AfterViewChecked");

  }
  
  ngOnDestroy():void{}

}
