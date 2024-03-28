import { Component } from '@angular/core';
import { Authenticacao } from '../authenticacao.service';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private authenticacao: Authenticacao){}


  logout(){
    this.authenticacao.logout()
  }
}
