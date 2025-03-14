import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit, AfterViewInit {
  private map!: L.Map;
  private markerIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.initMap();
    this.addMarker(10.917049894941618, -74.79950688913112);
  }

  private initMap() {
    const baseMapURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    this.map = L.map('map').setView([10.917049894941618, -74.79950688913112], 15);
    
    L.tileLayer(baseMapURL, {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private addMarker(lat: number, lng: number) {
    const marker = L.marker([lat, lng], { icon: this.markerIcon }).addTo(this.map);
    marker.bindPopup("Dromascotas Veterinaria").openPopup();
  }
}
