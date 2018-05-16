import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bands-cards-list-page',
  templateUrl: './bands-cards-list-page.component.html',
  styleUrls: ['./bands-cards-list-page.component.css']
})
export class BandsCardsListPageComponent implements OnInit {

  bandsCardsData = [
    {
      imageUrl: 'https://f4.bcbits.com/img/a2482547434_2.jpg',
      bandUrl: '/garage',
      title: 'Heartbeat by Alice Boman',
      description: 'Alice Boman is electric on this new piano-heavy single.',
      genre: 'alternative'
    },
    {
      imageUrl: 'https://f4.bcbits.com/img/a1884813622_16.jpg',
      bandUrl: '/garage',
      title: 'Heartbeat by Alice Boman',
      description: 'Alice Boman is electric on this new piano-heavy single.',
      genre: 'alternative'
    },
    {
      imageUrl: 'https://f4.bcbits.com/img/a2482547434_2.jpg',
      bandUrl: '/garage',
      title: 'Heartbeat by Alice Boman',
      description: 'Alice Boman is electric on this new piano-heavy single.',
      genre: 'alternative'
    },
    {
      imageUrl: 'https://f4.bcbits.com/img/a0008085777_16.jpg',
      bandUrl: '/garage',
      title: 'Heartbeat by Alice Boman',
      description: 'Alice Boman is electric on this new piano-heavy single.',
      genre: 'alternative'
    },
    {
      imageUrl: 'https://f4.bcbits.com/img/a2482547434_2.jpg',
      bandUrl: '/garage',
      title: 'Heartbeat by Alice Boman',
      description: 'Alice Boman is electric on this new piano-heavy single.',
      genre: 'alternative'
    },
    {
      imageUrl: 'https://f4.bcbits.com/img/a2810862928_16.jpg',
      bandUrl: '/garage',
      title: 'Heartbeat by Alice Boman',
      description: 'Alice Boman is electric on this new piano-heavy single.',
      genre: 'alternative'
    },
    {
      imageUrl: 'https://f4.bcbits.com/img/a2810862928_16.jpg',
      bandUrl: '/garage',
      title: 'Heartbeat by Alice Boman',
      description: 'Alice Boman is electric on this new piano-heavy single.',
      genre: 'alternative'
    },
    {
      imageUrl: 'https://f4.bcbits.com/img/a2810862928_16.jpg',
      bandUrl: '/garage',
      title: 'Heartbeat by Alice Boman',
      description: 'Alice Boman is electric on this new piano-heavy single.',
      genre: 'alternative'
    },
    {
      imageUrl: 'https://f4.bcbits.com/img/a2810862928_16.jpg',
      bandUrl: '/garage',
      title: 'Heartbeat by Alice Boman',
      description: 'Alice Boman is electric on this new piano-heavy single.',
      genre: 'alternative'
    },
    {
      imageUrl: 'https://f4.bcbits.com/img/a2810862928_16.jpg',
      bandUrl: '/garage',
      title: 'Heartbeat by Alice Boman',
      description: 'Alice Boman is electric on this new piano-heavy single.',
      genre: 'alternative'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
