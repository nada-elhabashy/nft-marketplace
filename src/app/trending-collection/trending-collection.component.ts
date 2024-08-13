import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-collection',
  standalone: true,
  imports: [],
  templateUrl: './trending-collection.component.html',
  styleUrl: './trending-collection.component.css'
})
export class TrendingCollectionComponent {
  imageArray = [
    { src: 'c1.PNG', alt: 'Image 1' },
    { src: 'c2.PNG', alt: 'Image 2' },
    { src: 'c3.PNG', alt: 'Image 3' },
     { src: 'c4.PNG', alt: 'Image 4' }

  ];
}
