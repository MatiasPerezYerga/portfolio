import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importamos los modulos de los HTTP y de nuestros formularios
import {HttpClientModule}from'@angular/common/http'; // para hacer peticiones con el client Http
import {FormsModule} from'@angular/forms';  //para utilizar wl twoyas data binding
//importo este fichero desde el fichero de rutas
import {routing,appRoutingProviders} from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {UploadService} from'./services/upload.service';

//INICIO SERVICIOS
import {CargarScriptsService} from './cargar-scripts.service';
import {ProjectService} from './services/project.service';


// FIN SERVICIOS

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ContactComponent,
    CreateComponent,
    DetailComponent,
    EditComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
     BrowserModule,
    routing,  //cargo el routing de la linea 4 en imports por que es un modulo
    HttpClientModule,
    FormsModule,
  ],
  providers: [
  appRoutingProviders, // cargo appRoutingProviders ya que es un servicio
  CargarScriptsService,
  ProjectService,
  UploadService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
