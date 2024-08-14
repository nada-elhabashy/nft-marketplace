import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-browse-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browse-categories.component.html',
  styleUrl: './browse-categories.component.css',
})
export class BrowseCategoriesComponent {
  categories = [
    {
      id: 1,
      name: 'Art',
      src: 'Category Icon.png',
      alt: 'Image 1',
    },
    {
      id: 2,
      name: 'Collectibles',
      src: 'Category Icon2.png',
      alt: 'Image 2',
    },
    {
      id: 3,
      name: 'Music',
      src: 'Category Icon3.png',
      alt: 'Image 3',
    },
    {
      id: 4,
      name: 'Photography',
      src: 'Category Icon4.png',
      alt: 'Image 4',
    },
    {
      id: 5,
      name: 'Video',
      src: 'Category Icon5.png',
      alt: 'Image 5',
    },
    {
      id: 6,
      name: 'Utility',
      src: 'Category Icon6.png',
      alt: 'Image 6',
    },
    {
      id: 7,
      name: 'Sport',
      src: 'Category Icon7.png',
      alt: 'Image 7',
    },
    {
      id: 8,
      name: 'Virtual Worlds',
      src: 'Category Icon8.png',
      alt: 'Image 8',
    },
  ];
}
