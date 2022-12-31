
import { Component, OnInit } from '@angular/core';
import{Project} from '../../models/project';//sali del directorio de create , sali del directorio de compomnentes y entras al de modelos
import{ProjectService} from '../../services/project.service';
//importo la clase y el servicio

//importo el servicio Upload
import {UploadService} from'../../services/upload.service';
import{Global} from '../../services/global';
import {Router,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService, UploadService]
})


export class EditComponent implements OnInit {

  public title: string;
    public project: Project;//objeto tipo Project
    public save_project:any;
    public status: string;
    public filesToUpload: Array<File>= new Array();
    public url: string;

  constructor(

    private _projectService: ProjectService, //
    private _uploadService: UploadService, // con el constructor declaras un objeto tipo uploadService
    private _router: Router,
    private _route: ActivatedRoute

    ) { 

    this.title="Editar Proyecto";
    this.project = new Project('','','','',2019,'','');
  this.url=Global.url;
  this.status="";


  }

  ngOnInit(): void {

     this._route.params.subscribe(params =>{ //SUBSCRIBE PARA RECIBIR LOS PARAMETROS
      let id= params['id']; //
      this.getProject(id);
    });

  }


   getProject(id: any){
// MANDA PEICIO AJAX AL BACKEND
        this._projectService.getProject(id).subscribe(
          response=>{  //Response es el objeto que llega de la API
            this.project=response.project;

        },
        error=>{
          console.log(<any>error);
        })

    }

     onSubmit (form: any){
      console.log(this.project);
    //Guardar datos básicos
       this._projectService.updateProject(this.project).subscribe(
        response =>{
          if(response.project){
          console.log(1);
            if(this.filesToUpload.length >=1 ){
              console.log(this.filesToUpload);
              console.log(2);
              this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.filesToUpload,'image')
                      .then((result:any)=>{
                        console.log(result);
                          console.log(2);
                       this.save_project= result.project;//  ESTA SENTENCIA LA ESCRIBE CUANDO 
                       //INTENTA ACCEDER AL DETAIL DEL PROYECT Y NO PUEDE

                        this.status= 'success';

                        
                      });
            }else{
              this.save_project=response.project;
              this.status='success';
                 console.log(3);
            }
        
          
          }else{
          this.status = 'failed';
        }
        },
        error =>{console.log("NO HAY FILES TO UPLOAD");
        }
    );
   }


   fileChangeEvent(fileInput: any){
     // lo castea, lo forza a ser un archivo tipo FILE
      this.filesToUpload= <Array<File>>fileInput.target.files;
//fileinput lo que caputra el evento, la propiedad target la propiedad files


   }


}
