import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bd } from '../../bd.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Progresso } from '../../progresso.service';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-incluir-publicacao',
  // standalone: true,
  // imports: [],
  templateUrl: './incluir-publicacao.component.html',
  styleUrl: './incluir-publicacao.component.scss'
})
export class IncluirPublicacaoComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    "titulo": new FormControl(null)
  })

  public email: string = ""
  public image: File | undefined
  public progressoPub: string = "pendente"
  public porcentagemUpload: number = 0

  constructor(private bd: Bd, private progresso: Progresso) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.email) this.email = user?.email
    })
  }

  publicar() {
    this.bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      image: this.image
    })

    const subject = new Subject()
    subject.next(true)

    const upload = interval(1500)
    upload
      .pipe(takeUntil(subject))
      .subscribe(() => {
        this.porcentagemUpload = Math.round((this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes) * 100)
        this.progressoPub = "andamento"
        if (this.progresso.status == "Finalizado") {
          subject.next(false)
          this.progressoPub = "Finalizado"
        }
      })
    // takeUntil(subject)
  }


  changeImg(event: Event) {
    const files = (<HTMLInputElement>event.target).files
    if (!files) return
    this.image = files[0]

  }
}
