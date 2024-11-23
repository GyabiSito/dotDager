import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { title } from 'process';

@Component({
  selector: 'app-info-videos',
  standalone: true,
  imports: [],
  templateUrl: './info-videos.component.html',
  styleUrl: './info-videos.component.scss'
})
export class InfoVideosComponent {
  data: any[] = [];
  selectedVideo: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {
    // Datos de los videos
    this.data = [
      {
        title: 'Dejá de perder tiempo',
        description: 'Bueno, después de cuatrocientos años me digné a hacer otro video, y no específicamente de tu culo y mi fideo sino acerca de la pregunta del millón: "¿cuándo estás listo para empezar a buscar trabajo de programador?"',
        video: 'https://www.youtube.com/embed/FlO796ke0AI?si=3R7H0M3ErjtP9nO8',
        isActive: true
      },
      {
        title: 'Por qué dejé la universidad',
        description: 'Bueno, esto es un video sobre educación formal, universidades y esas cosas, en relación a la programación.',
        video: 'https://www.youtube.com/embed/SoblGnOSHws?si=aYYZ0yS4nhDeF7PL',
        isActive: false
      },
      {
        title: 'Empresa grande vs empresa chica | ¿Dónde programar?',
        description: 'Esto es un video sobre la dicotomía entre empresas grandes y empresas chicas. Es medio "qué buena data pero no te pregunté", pero me parece algo importante que rara vez se menciona.',
        video: 'https://www.youtube.com/embed/QgZmaHOiIu8?si=65nJGKWQPHssk-sJ',
        isActive: false
      }
    ];

    // Seleccionar el primer video por defecto y sanitizarlo
    this.selectedVideo = this.sanitizeUrl(this.data[0].video);
  }

  // Sanitizar la URL del video
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Método para manejar el cambio del video activo
  handleActive(index: number) {
    this.data.forEach((item, i) => {
      item.isActive = i === index; // Activar solo el elemento seleccionado
    });

    // Actualizar el video seleccionado y sanitizar la URL
    this.selectedVideo = this.sanitizeUrl(this.data[index].video);
  }
}