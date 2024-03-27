import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  // standalone: true,
  // imports: [BannerComponent, LoginComponent],
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.scss',
  animations: [
    trigger('animation-banner', [
      state('create', style({
        opacity: 1
      })),
      transition('void => create', [
        style({
          opacity: 0,
          transform: "translate(-50px, 0px)"
        }),
        animate("500ms ease-in-out")
      ])
    ]),
    trigger('animation-painel', [
      state('create', style({
        opacity: 1
      })),
      transition('void => create', [
        style({
          opacity: 0,
          transform: "translate(50px, 0px)"
        }),
        animate("500ms ease-in-out", keyframes([
          style({
            offset: 0.15,
            opacity: 1, transform: 'translateX(0)'
          }),
          style({
            offset: 0.86,
            opacity: 1, transform: 'translateX(0)'
          }),
          style({
            offset: 0.88,
            opacity: 1, transform: 'translateY(-10px)'
          }),
          style({
            offset: 0.90,
            opacity: 1, transform: 'translateY(10px)'
          }),
          style({
            offset: 0.92,
            opacity: 1, transform: 'translateY(-10px)'
          }),
          style({
            offset: 0.94,
            opacity: 1, transform: 'translateY(10px)'
          }),
          style({
            offset: 0.96,
            opacity: 1, transform: 'translateY(-10px)'
          }),
          style({
            offset: 0.98,
            opacity: 1, transform: 'translateY(10px)'
          }),
        ]))
      ])
    ])
  ]
})
export class AcessoComponent {

  public banner: string = "create"
  public cadastro: boolean = false

  toggleCadastro(event: boolean): void {
    this.cadastro = event
  }

  startAnimate(): void {
    console.log("start");
    
  }

  endAnimate(): void{
    console.log("end");
  }

}
