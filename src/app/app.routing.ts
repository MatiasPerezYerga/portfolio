import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
/*import { ErrorComponent} from './components/error/error.component';*/
import { DetailComponent} from './components/detail/detail.component';
import { EditComponent} from './components/edit/edit.component';
import { HomeComponent} from './components/home/home.component';

//defino mi arrays de rutas
const appRoutes: Routes=[
{path:'',component: HomeComponent},
{path:'sobre-mi',component: AboutmeComponent},
{path:'proyectos',component: ProjectsComponent},
{path:'crear-proyecto', component:CreateComponent},
{path:'contacto', component:ContactComponent},
{path:'proyecto/:id',component: DetailComponent},
{path:'editar-proyecto/:id',component:EditComponent},
/*{path:'**',component: ErrorComponent}*/
];

//exportamos el servicio/configuracion de rutas
export const appRoutingProviders: any[]=[]; 
//exportamos el modulo de routing . Cargo appRoutes en el router de angular.
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);