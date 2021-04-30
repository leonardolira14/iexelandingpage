import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosComponent } from './datosgraducion/datos/datos.component';
import { NuestroComponent } from './nuestroorgullo/nuestro/nuestro.component';
import { DiaComponent } from './ordendia/dia/dia.component';
import { ReviveComponent } from './reviveelmomento/revive/revive.component';
import { FaqsComponent } from './preguntasfrecunetes/faqs/faqs.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './shared/head/head.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DatosComponent,
    NuestroComponent,
    DiaComponent,
    ReviveComponent,
    FaqsComponent,
    InicioComponent,
    HeadComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
