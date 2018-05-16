import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bands-cards-carousel',
  templateUrl: './bands-cards-carousel.component.html',
  styleUrls: ['./bands-cards-carousel.component.css']
})
export class BandsCardsCarouselComponent implements OnInit {
  cssClassToDisable = 'band-card-disabled';

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

  switcher = 'off';

  constructor() {}

  ngOnInit() {}

  moveRight() {
    // this.bandsCardsData.splice(0, 1);
    // event.target.childNodes[0].childNodes[1].style.display = "block";
    this.switcher = 'right';
  }

  moveLeft(event: any) {
    console.log(event);
    // this.bandsCardsData.splice(4, 1);
    // let renewedCard =  this.bandsCardsData.splice(0, 1)[0];
    // console.log(renewedCard);
    // renewedCard.cssClass = this.cssClassToDisable;
    // this.bandsCardsData[0].cssClass = this.cssClassToDisable;
    // console.log(this.bandsCardsData);
    // setTimeout( () => { this.bandsCardsData.unshift(renewedCard); } , 1000;
    // event.target.childNodes[0].childNodes[1].style.display = "block";
    this.switcher = 'left';
  }

}
