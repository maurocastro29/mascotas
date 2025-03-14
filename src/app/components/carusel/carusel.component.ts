import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carusel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css'
})
export class CaruselComponent {
  images = [
    '/images/banner/presentacion.png',
    '/images/banner/atencion.png',
  ];
  currentIndex = 0;

  prevSlide() {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }
}
