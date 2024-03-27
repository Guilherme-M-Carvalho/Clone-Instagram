import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @Output() public exibirPainel: EventEmitter<boolean> = new EventEmitter()

  togglePainel(): void{
    this.exibirPainel.emit(true)
  }
}
