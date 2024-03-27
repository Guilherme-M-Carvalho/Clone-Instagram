import { Usuario } from "./acesso/usuario.model";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class Authenticacao {

    public token_id: string | undefined

    constructor(
        private router: Router
    ) { }

    public cadastrarUsuario(user: Usuario): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.senha).then((res) => {
            const userRegister: any = {
                ...user
            }
            delete userRegister.senha
            firebase.database().ref(`usuario_detalhe/${btoa(user.email)}`)
                .set({ user: userRegister })

        }).catch((res) => {
            console.log({ res });

        })
    }

    public authenticar(email: string, senha: string) {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((res) => {
                firebase.auth().currentUser?.getIdToken()
                    .then(response => {
                        this.token_id = response
                        localStorage.setItem("token_id", response as any)
                        this.router.navigate(["/home"])
                    })
            })
            .catch((res) => {
                console.log(res);

            })
    }

    public autenticado(): boolean {
        const tokenIdLocal = localStorage.getItem("token_id")
        if (!this.token_id && tokenIdLocal) {
            this.token_id = tokenIdLocal
        }

        return !!this.token_id
    }
}