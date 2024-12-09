import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [20.0, 0.0],
      zoom: 2
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    this.addMarkers();
  }

  private addMarkers(): void {
    const locations: { coords: [number, number], country: string }[] = [
      { coords: [38.736946, -9.142685], country: 'Portugal' },
      { coords: [37.7749, -122.4194], country: 'USA' },
      { coords: [45.4215, -75.6972], country: 'Canada' },
      { coords: [-23.55052, -46.633308], country: 'Brazil' },
      { coords: [35.6895, 139.6917], country: 'Japan' }
    ];

    locations.forEach(location => {
      L.marker(location.coords).addTo(this.map)
        .bindPopup(`<b>${location.country}</b>`)
        .openPopup();
    });
  }

  ngOnInit(): void {
    this.initMap();
  }
}
