import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [ThemeDirective, CarouselComponent, CarouselInnerComponent, CarouselItemComponent, CarouselControlComponent, RouterLink],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss',
})
export class MainCarouselComponent {

  slides: any[] = [];


  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.loadCarousel();
  }
  loadCarousel() {
    this.slides = [
      { src: './img1.png', title: 'Dot Dagger', h1: 'Dot Dagger', p: 'Hola, soy Dagger. Me encantan los pepinos bien duros, golosos y mojados. Además de la programacion y estar en pelotas. Sobretodo estar en bolas con pepinos.' },
      { src: './guitarra.jpg', title: 'Guitarra', h1: 'Me gusta la guitarrear la tuya', p: 'Desde que tengo pepino, las guitarras me apasionan. ' },
      { src: './img9.png', title: 'Filosofía', h1: 'Filosofea con ésta', p: 'Además, la filosofía esta muy presente en mi vida. Todo se debe al cuestionamiento de: ¿Porque tengo pepino?...' },
    ];
  }


}
