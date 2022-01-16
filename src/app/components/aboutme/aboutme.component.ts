import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import {CargarScriptsService} from './../../cargar-scripts.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']


})
export class AboutmeComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public web: string;
  public sttatus: string;
  public confirm: boolean;




  constructor(private _CargarScripts: CargarScriptsService) {

this.title="Matias Perez Yerga";
this.subtitle="FULLSTACK IT ENGINEER";
this.web= "Portfolio.com/mpy"
this.sttatus="false";
this.confirm=false;






/*
_CargarScripts.Carga(["capa/jquery-3.6.0"]);
_CargarScripts.Carga(["capa/capa"]);   
_CargarScripts.Carga(["capa/app_inicio"]);   
*/
  }
   

  ngOnInit(): void {
  }


/*visualizarSignosVitales(confirm):void{

 
      this.confirm=confirm;
}*/


 

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









}
