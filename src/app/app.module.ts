
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importamos los modulos de los HTTP y de nuestros formularios
import {HttpClientModule}from'@angular/common/http'; // para hacer peticiones con el client Http
import {FormsModule} from'@angular/forms';  //para utilizar wl twoyas data binding
//importo este fichero desde el fichero de rutas
import {routing,appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
/*import { ErrorComponent } from './components/error/error.component';*/
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';


//INICIO SERVICIOS
import {CargarScriptsService} from './cargar-scripts.service';
import { HomeComponent } from './components/home/home.component';
// FIN SERVICIOS


@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    /*ErrorComponent,*/
    DetailComponent,
    EditComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    routing,  //cargo el routing de la linea 4 en imports por que es un modulo
    HttpClientModule,
    FormsModule,


  ],
  providers: [
  appRoutingProviders, // cargo appRoutingProviders ya que es un servicio
  CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
