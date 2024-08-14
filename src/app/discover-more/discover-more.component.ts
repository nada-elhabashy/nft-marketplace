import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-discover-more',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './discover-more.component.html',
  styleUrl: './discover-more.component.css',
})
export class DiscoverMoreComponent {
  discover = [
    {
      id: 1,
      name: 'Distant Galaxy',
      cotent: 'MoonDancer',
      src: 'discover1.png',
      alt: 'Image 1',
      price: '1.63 ETH',
      bid: '0.33 wETH',
    },
    {
      id: 2,
      name: 'Life On Edena',
      cotent: 'NebulaKid',
      src: 'discover2.png',
      alt: 'Image 1',
      price: '1.63 ETH',
      bid: '0.33 wETH',
    },
    {
      id: 3,
      name: 'AstroFiction',
      cotent: 'MoonDancer',
      src: 'discover3.png',
      alt: 'Image 1',
      price: '1.63 ETH',
      bid: '0.33 wETH',
    },
  ];
}
