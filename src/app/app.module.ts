// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { LoginComponent } from './acesso/login/login.component';
import { Authenticacao } from './authenticacao.service';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';
import { HomeComponent } from './home/home.component';
import { AuthenticacaoGuard } from './authenticacao-guard.service';
import { IncluirPublicacaoComponent } from './home/incluir-publicacao/incluir-publicacao.component';
import { Bd } from './bd.service';
import { Progresso } from './progresso.service';

// @NgModule decorator with its metadata
@NgModule({
    declarations: [AppComponent, AcessoComponent, BannerComponent, CadastroComponent, LoginComponent, PublicacoesComponent, HomeComponent, IncluirPublicacaoComponent],
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes), BrowserAnimationsModule, ReactiveFormsModule],
    providers: [Authenticacao, AuthenticacaoGuard, Bd, Progresso],
    bootstrap: [AppComponent]
})
export class AppModule { }