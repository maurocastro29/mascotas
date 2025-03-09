import { Component } from '@angular/core';
import { dataPersonal } from './data-personal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {
  data:any = dataPersonal;
}
