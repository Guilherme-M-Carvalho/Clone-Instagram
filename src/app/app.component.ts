import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcessoComponent } from './acesso/acesso.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [AcessoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front';
}
