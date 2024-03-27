import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from '../usuario.model';
import { Authenticacao } from '../../authenticacao.service';
@Component({
  selector: 'app-cadastro',
  // standalone: true,
  // imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  @Output() public exibirCadastro: EventEmitter<boolean> = new EventEmitter

  constructor(private autenticacao: Authenticacao){}

  public formulario: FormGroup = new FormGroup({
    "email": new FormControl(null),
    "nome_completo": new FormControl(null),
    "nome_usuario": new FormControl(null),
    "senha": new FormControl(null),
  })

  toggleCadastro(){
    this.exibirCadastro.emit(false)
  }

  cadastrarUsuario(){
    const user: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha,
      )
      
      this.autenticacao.cadastrarUsuario(user)
      .then((res) => {
        console.log({res});
        
        this.toggleCadastro()
      })
  }
}
