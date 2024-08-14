import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending-collection.component.html',
  styleUrl: './trending-collection.component.css',
})
export class TrendingCollectionComponent {
  trending = [
    {
      id: 1,
      name: 'DSGN Animals',
      cotent: 'MoonDancer',
      src: 'Primary Photo Placeholder.png',
      alt: 'Image 1',
      img1: 'Secondary Photo Placeholder.png',
      img2: 'Secondary Photo Placeholder1.png',
    },
    {
      id: 2,
      name: 'Magic Mushrooms',
      cotent: 'NebulaKid',
      src: 'Primary Photo Placeholder2.png',
      alt: 'Image 1',
      img1: 'Secondary Photo Placeholder2.png',
      img2: 'Secondary Photo Placeholder22.png',
    },
    {
      id: 3,
      name: 'Disco Machines',
      cotent: 'MoonDancer',
      src: 'Primary Photo Placeholder3.png',
      alt: 'Image 1',
      img1: 'Secondary Photo Placeholder3.png',
      img2: 'Secondary Photo Placeholder33.png',
    },
  ];
}
