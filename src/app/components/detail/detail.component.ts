import { Component, OnInit } from '@angular/core';
import{Project} from '../../models/project';//sali del directorio de create , sali del directorio de compomnentes y entras al de modelos
import{ProjectService} from '../../services/project.service';
//importo la clase y el servicio
import{Global} from '../../services/global';
import {Router,ActivatedRoute, Params} from '@angular/router' //invocamos estas clases
//ya que vamos a tener que recoger los datos (id) que nos llegan para saber cual 
//projecto devolver 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

 public url: string;
  public project: Project; 
  public confirm: boolean;

  constructor(

    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute

    ) { 

this.url=Global.url;
this.project=new Project('','','','',2019,'','');
this.confirm=false;


  }

  ngOnInit(): void {

    this._route.params.subscribe(params =>{ //SUBSCRIBE PARA RECIBIR LOS PARAMETROS
      let id= params['id']; //
      this.getProject(id);
    });


  }


     getProject(id:any){
// MANDA PEICIO AJAX AL BACKEND
        this._projectService.getProject(id).subscribe(
          response=>{  //Response es el objeto que llega de la API
            this.project=response.project;

        },
        error=>{
          console.log(<any>error);
        })

    }


      deleteProject(id:any){
        this._projectService.deleteProject(id).subscribe(
          response=>{
             console.log(response);
            if (response.project){
              this._router.navigate(['/proyectos']);
            }

                  },
                  error=> {
                    console.log(<any>error);
                    console.log("No esta");
                  }
        );

      }
     

      setConfirm(confirm:any){
      this.confirm=confirm;

      }



     

}
