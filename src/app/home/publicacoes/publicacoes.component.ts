import { Component, OnInit } from '@angular/core';
import { Bd } from '../../bd.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-publicacoes',
  // standalone: true,
  // imports: [],
  templateUrl: './publicacoes.component.html',
  styleUrl: './publicacoes.component.scss'
})
export class PublicacoesComponent implements OnInit {

  private email: string = ""
  public pubs: any[] = []

  constructor(private db: Bd) { }
  ngOnInit(): void {

    firebase.auth().onAuthStateChanged((user) => {
      if (user?.email) this.email = user?.email
      this.atualizarTimeLine()
    })
  }

  public atualizarTimeLine() {
    this.db.consultar(this.email)
      .then((res) => {
        console.log({ res });
        this.pubs = res
      })
  }

}
