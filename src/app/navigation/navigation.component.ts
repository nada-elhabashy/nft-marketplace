import { Component } from '@angular/core';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

   menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
