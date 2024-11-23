import { Component } from '@angular/core';
import { faTwitter,  faFacebookF, faInstagramSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  faInstagram = faInstagramSquare;
  faYoutube = faYoutube;

  
}
