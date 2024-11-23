import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  data: any[] =[];
  loadData(){
    this.data=[
      {
        title: 'Desarrollo de pepinos',
        description: 'Desarrollo de pepinos a medida para empresas y particulares.',
      },
      {
        title: 'Desarrollo de calzones',
        description: 'Desarrollo de calzones a medida para empresas y particulares.',
      },
      {
        title: 'Desarrollo de bananas',
        description: 'Desarrollo de bananas a medida para empresas y particulares.',
      }
    ]
  }
  constructor() {
    this.loadData();
  }
}
