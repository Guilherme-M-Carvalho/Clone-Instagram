import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Authenticacao } from '../../authenticacao.service';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  @Output() public exibirPainel: EventEmitter<boolean> = new EventEmitter()

  constructor(
    private authenticacao: Authenticacao
  ) {}

  public formulario: FormGroup = new FormGroup({
    "email": new FormControl(null),
    "senha": new FormControl(null),
  })


  togglePainel(): void {
    this.exibirPainel.emit(true)
  }


  authentication() {
    this.authenticacao.authenticar(this.formulario.value.email, this.formulario.value.senha)
    // console.log(this.formulario.value);
  }
}
