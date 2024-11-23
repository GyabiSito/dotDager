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
      { src: './daggerimage.png', title: 'Slide 2', h1: 'Estoy Mamadísimo', p: 'UwU' },
      { src: './img4.jpg', title: 'Slide 3', h1: 'Pan', p: 'COMETE ÉSTA' },
    ];
  }


}
