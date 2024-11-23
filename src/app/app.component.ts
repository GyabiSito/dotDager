import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { MainCarouselComponent } from "./components/main-carousel/main-carousel.component";
import { InfoVideosComponent } from "./components/info-videos/info-videos.component";
import { ServicesComponent } from "./components/services/services.component";
import { FlagComponent } from "./components/flag/flag.component";
import { FourCardsComponent } from "./components/four-cards/four-cards.component";
import { FooterComponent } from "./footer/footer.component";
import { VideogamesComponent } from "./components/videogames/videogames.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainCarouselComponent, InfoVideosComponent, ServicesComponent, FlagComponent, FourCardsComponent, FooterComponent, VideogamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DotDager';
}
