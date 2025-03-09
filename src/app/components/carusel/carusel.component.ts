import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

interface Product {
  id: string,
  code: string,
  name: string,
  description: string,
  image: string,
  price: number,
  category: string,
  quantity: number,
  inventoryStatus: string,
  rating: number
}

@Component({
  selector: 'app-carusel',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    TagModule,
    CommonModule
  ],
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css'
})
export class CaruselComponent implements OnInit {
    products: Product[] = [];

    responsiveOptions: any[] | undefined;

    constructor() {}

    ngOnInit() {

        this.products = [
          {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'presentacion.png',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
          },
          {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'atencion.png',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
          },
          {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'presentacion.png',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
          },
          {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'atencion.png',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
          },
        ]

       this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ]
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
              return 'info'; // O cualquier otro valor por defecto
        }
    }
}
