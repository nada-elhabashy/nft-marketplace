import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css',
})
export class HowItWorksComponent {
  steps = [
    {
      id: 1,
      name: 'Setup Your wallet',
      cotent:
        ' Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
      src: 'Icon1.png',
      alt: 'Image 1',
    },
    {
      id: 2,
      name: 'Create Collection',
      cotent:
        'Upload your work and setup your collection. Add a description, social links and floor price.',
      src: 'Icon2.png',
      alt: 'Image 1',
    },
    {
      id: 3,
      name: ' Start Earning',
      cotent:
        'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
      src: 'Icon3.png',
      alt: 'Image 1',
    },
  ];
}
