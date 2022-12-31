import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';

import { ProjectService } from '../../services/project.service';

import { Global } from '../../services/global';//para sacar la  url de la api

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

   public projects: Project[]=[]; //este array publica es la que tendran los objetos JSON.
   public url: string;

  constructor( private _projectService: ProjectService) {


    this.url = Global.url;

   }

  ngOnInit(): void {

  this.getProjects();
  }






 getProjects(){
    
    this._projectService.getProjects().subscribe( //subsicribimos al observable y leemos la respuesta que nos lee por la api
      response => {//primera funcion de callback
        if(response.projects){
          this.projects = response.projects; //
          console.log(response.projects);
          
        }
      },
      error => { //segunda funcion de callback
        console.log(<any>error);
        console.log("ERROR")
      }
    );
  }









}
