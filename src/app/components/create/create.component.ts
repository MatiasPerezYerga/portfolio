import { Component, OnInit } from '@angular/core';
//para salir del directorio son 2 puntos
import{Project} from '../../models/project';//sali del directorio de create , sali del directorio de compomnentes y entras al de modelos
import{ProjectService} from '../../services/project.service';
//importo la clase y el servicio

//importo el servicio Upload
import {UploadService} from'../../services/upload.service';
import{Global} from '../../services/global';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
  
  export class CreateComponent implements OnInit {

//creo atributos
    public title: string;
    public project: Project;//objeto tipo Project
    public save_project: any;
    public status: string;
    public filesToUpload: Array<File>= new Array();

  constructor(
     private _projectService: ProjectService, //
    private _uploadService: UploadService // con el constructor declaras un objeto tipo uploadService

    ) { 

    this.title="Crear Proyecto";
    this.project=new Project('','','','',2019,'','');
    this.status="";


  }

  ngOnInit(): void {

 
  }



  //metodo para recibir el formulario y probarlo en la consola
  onSubmit (form:any){
    console.log(this.project);
    //Guardar datos básicos
     this._projectService.saveProject(this.project).subscribe(
        response =>{
          if(response.project){
          

          //subir la imagen
// usamos el servicio con el this_nombreDelServicio

// la url la conseguimos del archivo Global de mi api
//"upload-image/" el nombre del metodo necesita ID entonces le concatena lo sgte 
//response.project._id, //viene en la response
//[], parametros opcionales
//this.filesToUpload,// los arhchivos a recibir
//'image' //el nombre del campo que recibe el backend en project.js (La clase en el backend)
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.filesToUpload,'image')
          .then((result:any)=>{
           
           this.save_project= result.project;//  ESTA SENTENCIA LA ESCRIBE CUANDO 
           //INTENTA ACCEDER AL DETAIL DEL PROYECT Y NO PUEDE

            this.status= 'success';

            form.reset();
          })
          
          }else{
          this.status = 'failed';}
        },
        error =>{console.log(<any> error);}
    );
   }


 fileChangeEvent(fileInput: any){
     // lo castea, lo forza a ser un archivo tipo FILE
      this.filesToUpload= <Array<File>>fileInput.target.files;
//fileinput lo que caputra el evento, la propiedad target la propiedad files


   }

}
