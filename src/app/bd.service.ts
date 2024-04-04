import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { Injectable } from '@angular/core';
import { Progresso } from './progresso.service';

@Injectable()
export class Bd {

    constructor(private progresso: Progresso) { }

    public publicar(props: { email: string; titulo: string; image: File | undefined }): void {


        firebase.database().ref(`publicacao/${btoa(props.email)}`)
            .push({ titulo: props.titulo })
            .then((res) => {
                const nameImage = res.key
                if (props.image) {
                    firebase.storage()
                        .ref()
                        .child(`imagens/${nameImage}`)
                        .put(props.image)
                        .on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
                            this.progresso.status = "Em andamento"
                            this.progresso.estado = snapshot
                        }, (error) => {
                            this.progresso.status = "Error"

                        }, () => {
                            this.progresso.status = "Finalizado"
                        })
                }
            })
    }

    public consultar(email: string): Promise<any> {

        return new Promise((resolve, rej) => {

            firebase.database().ref(`publicacao/${btoa(email)}`)
                .orderByKey()
                .once('value')
                .then((res) => {
                    // console.log(res.val());
                    const pubs: any[] = []
                    res.forEach((el) => {
                        const val = el.val()
                        console.log({val});
                        
                        val.key = el.key
                        pubs.push(val)

                    })
                    // resolve(pubs);
                    return pubs.reverse()
                })
                .then((result) => {
                    result.forEach(el => {

                        firebase.storage().ref()
                        .child(`imagens/${el.key}`)
                        .getDownloadURL()
                        .then((response) => {
                    
                            firebase.database().ref(`usuario_detalhe/${btoa(email)}`)
                                .once('value')
                                .then((snap: any) => {
                                    el.url_imagem = response
                                    const user = snap.val()
                                    
                                    el.nome_completo = user.user.nome_completo
                                    el.nome_usuario = user.user.nome_usuario
                                    el.email = user.user.email
                                    // pubs.push({ , url_imagem: response, })
                    
                                })
                        })
                    })
                    resolve(result)
                    
                })
        })
    }
}


// console.log(el.key);

