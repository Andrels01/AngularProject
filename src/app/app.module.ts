import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importação 1_1
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import {FormsModule} from '@angular/forms';
import { ListUsuarioComponent } from './pages/list-usuario/list-usuario.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddUsuarioComponent,
    ListUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //depois chamar aqui 1_1
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
