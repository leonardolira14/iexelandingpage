import { FaqsComponent } from './preguntasfrecunetes/faqs/faqs.component';
import { ReviveComponent } from './reviveelmomento/revive/revive.component';
import { DiaComponent } from './ordendia/dia/dia.component';
import { NuestroComponent } from './nuestroorgullo/nuestro/nuestro.component';
import { DatosComponent } from './datosgraducion/datos/datos.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path:'home', component: InicioComponent,
  },
  {
    path:'datosgraduacion',component:DatosComponent
  },
  {
    path:'nuestroorgullo',component:NuestroComponent
  },
  {
    path:'ordendia', component:DiaComponent
  },
  {
    path:'revivemomento',component:ReviveComponent
  },
  {
    path:'preguntas',component:FaqsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
