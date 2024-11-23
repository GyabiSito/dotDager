import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // Para el icono

@Component({
  selector: 'app-flag',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './flag.component.html',
  styleUrl: './flag.component.scss'
})
export class FlagComponent {

}
