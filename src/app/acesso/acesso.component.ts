import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
        animate("500ms ease-in-out")
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

}
