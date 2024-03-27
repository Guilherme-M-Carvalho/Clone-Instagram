// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { LoginComponent } from './acesso/login/login.component';


// @NgModule decorator with its metadata
@NgModule({
    declarations: [AppComponent, AcessoComponent, BannerComponent, CadastroComponent, LoginComponent],
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes), BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }