import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-rated-artist',
  standalone: true,
  imports: [CommonModule,RouterLink ],
  templateUrl: './top-rated-artist.component.html',
  styleUrl: './top-rated-artist.component.css',
})
export class TopRatedArtistComponent {
  topRated = [
    {
      id: 1,
      name: 'Keepitreal',
      src: 'c1.png',
      alt: 'Image 1',
      totalSales: '34.53 ETH',
    },
    {
      id: 2,
      name: 'DigiLab',
      src: 'c2.png',
      alt: 'Image 2',
      totalSales: '34.53 ETH',
    },
    {
      id: 3,
      name: 'GravityOne',
      src: 'c3.png',
      alt: 'Image 3',
      totalSales: '34.53 ETH',
    },
    {
      id: 4,
      name: 'Juanie',
      src: 'c4.png',
      alt: 'Image 4',
      totalSales: '34.53 ETH',
    },
    {
      id: 5,
      name: 'BlueWhale',
      src: 'c5.png',
      alt: 'Image 5',
      totalSales: '34.53 ETH',
    },
    {
      id: 6,
      name: 'mr fox',
      src: 'c6.png',
      alt: 'Image 6',
      totalSales: '34.53 ETH',
    },
    {
      id: 7,
      name: 'Shroomie',
      src: 'c7.png',
      alt: 'Image 7',
      totalSales: '34.53 ETH',
    },
    {
      id: 8,
      name: 'robotica',
      src: 'c8.png',
      alt: 'Image 8',
      totalSales: '34.53 ETH',
    },
    {
      id: 9,
      name: 'RustyRobot',
      src: 'c9.png',
      alt: 'Image 9',
      totalSales: '34.53 ETH',
    },
    {
      id: 10,
      name: 'animakid',
      src: 'c10.png',
      alt: 'Image 10',
      totalSales: '34.53 ETH',
    },
    {
      id: 11,
      name: 'Dotgu',
      src: 'c11.png',
      alt: 'Image 11',
      totalSales: '34.53 ETH',
    },
    {
      id: 12,
      name: 'Ghiblier',
      src: 'c12.png',
      alt: 'Image 12',
      totalSales: '34.53 ETH',
    },
  ];
}
