import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Review {
  hostName: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

@Component({
  selector: 'app-host-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './host-reviews.component.html',
  styleUrl: './host-reviews.component.css'
})
export class HostReviewsComponent {
  reviews: Review[] = [
    {
      hostName: 'John Doe',
      location: 'New York, USA',
      rating: 5,
      comment: 'Great host! Very welcoming and the place was clean and comfortable.',
      date: '2024-12-01'
    },
    {
      hostName: 'Jane Smith',
      location: 'Lisbon, Portugal',
      rating: 4,
      comment: 'Nice experience, but the place was a bit small for my liking.',
      date: '2024-11-28'
    },
    {
      hostName: 'Carlos Silva',
      location: 'São Paulo, Brazil',
      rating: 5,
      comment: 'Amazing host! The best experience I have ever had.',
      date: '2024-11-25'
    },
    {
      hostName: 'Yuki Tanaka',
      location: 'Tokyo, Japan',
      rating: 4,
      comment: 'Very polite and friendly host. Highly recommended!',
      date: '2024-11-20'
    },
    {
      hostName: 'Alice Johnson',
      location: 'Toronto, Canada',
      rating: 3,
      comment: 'It was okay, but there were some issues with cleanliness.',
      date: '2024-11-15'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }
}
