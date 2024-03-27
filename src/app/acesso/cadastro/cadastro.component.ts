import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  // standalone: true,
  // imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  @Output() public exibirCadastro: EventEmitter<boolean> = new EventEmitter

  toggleCadastro(){
    this.exibirCadastro.emit(false)
  }
}
