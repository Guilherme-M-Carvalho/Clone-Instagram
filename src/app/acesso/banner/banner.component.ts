import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Images } from './image.model';

@Component({
  selector: 'app-banner',
  // standalone: true,
  // imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  animations: [
    trigger("banner", [
      state("escondido", style({
        opacity: 0,
      })),
      state("visivel", style({
        opacity: 1
      })),
      transition("escondido <=> visivel", animate("1s ease-in")),
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'escondido'
  public images: Images[] = [
    {
      estado: "visivel",
      url: "/assets/img_1.png",
    },
    {
      estado: "escondido",
      url: "/assets/img_2.png",
    },
    {
      estado: "escondido",
      url: "/assets/img_3.png",
    },
    {
      estado: "escondido",
      url: "/assets/img_4.png",
    },
    {
      estado: "escondido",
      url: "/assets/img_5.png",
    }
  ]  

  ngOnInit(): void {
    setInterval(() => this.rotationImg(), 3000) 
  }

  rotationImg():void {

    const image = this.images.findIndex(el => el.estado === "visivel")
    if(image > -1){
      this.images[image].estado = "escondido"
    }
    
    if(image === (this.images.length -1)){
      this.images[0].estado = "visivel"
    } else {
      this.images[image + 1].estado = "visivel"
    }

  }

}
