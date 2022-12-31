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

   }

  ngOnInit(): void {
  }

  

}
