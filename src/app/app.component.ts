import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { CaruselComponent } from "./components/carusel/carusel.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { CommonModule } from '@angular/common';
import { PersonalComponent } from "./components/personal/personal.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CaruselComponent,
    ServiciosComponent,
    ProductosComponent,
    CommonModule,
    PersonalComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DroMascotas';

  carouselElement = document.getElementById('carousel-example');

  items = [
      {
          position: 0,
          el: document.getElementById('carousel-item-1'),
      },
      {
          position: 1,
          el: document.getElementById('carousel-item-2'),
      },
      {
          position: 2,
          el: document.getElementById('carousel-item-3'),
      },
      {
          position: 3,
          el: document.getElementById('carousel-item-4'),
      },
  ];

  // options with default values
  options = {
      defaultPosition: 1,
      interval: 3000,

      indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses:
              'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: [
              {
                  position: 0,
                  el: document.getElementById('carousel-indicator-1'),
              },
              {
                  position: 1,
                  el: document.getElementById('carousel-indicator-2'),
              },
              {
                  position: 2,
                  el: document.getElementById('carousel-indicator-3'),
              },
              {
                  position: 3,
                  el: document.getElementById('carousel-indicator-4'),
              },
          ],
      },

      // callback functions
      onNext: () => {
          console.log('next slider item is shown');
      },
      onPrev: () => {
          console.log('previous slider item is shown');
      },
      onChange: () => {
          console.log('new slider item has been shown');
      },
  };

  // instance options object
  instanceOptions = {
    id: 'carousel-example',
    override: true
  };




}
