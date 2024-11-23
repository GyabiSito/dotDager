import { Component } from '@angular/core';
import { GameComponent } from './components/game/game.component';

@Component({
  selector: 'app-videogames',
  standalone: true,
  imports: [GameComponent],
  templateUrl: './videogames.component.html',
  styleUrl: './videogames.component.scss'
})
export class VideogamesComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
