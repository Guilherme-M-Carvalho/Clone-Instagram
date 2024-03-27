import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcessoComponent } from './acesso/acesso.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { BrowserModule } from '@angular/platform-browser';
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyBE8IiS_KFq4aUbJF5RUheNqy1VZmIcJQs",
  authDomain: "jta-instagram-clone-f9775.firebaseapp.com",
  projectId: "jta-instagram-clone-f9775",
  storageBucket: "jta-instagram-clone-f9775.appspot.com",
  messagingSenderId: "1035187674375",
  appId: "1:1035187674375:web:4c3f9cbe119e88282ab9a2",
  measurementId: "G-GTTLZP11Y9"
};


@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [AcessoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'front';

  ngOnInit(): void {
    firebase.initializeApp(firebaseConfig)
  }
}
