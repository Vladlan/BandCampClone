import {Component, OnInit} from '@angular/core';
import {BandsService} from '../bands.service';

@Component({
  selector: 'app-bands-cards-list-page',
  templateUrl: './bands-cards-list-page.component.html',
  styleUrls: ['./bands-cards-list-page.component.css']
})
export class BandsCardsListPageComponent implements OnInit {

  // bandsCardsData = [
  //   {
  //     imageUrl: 'https://f4.bcbits.com/img/a2482547434_2.jpg',
  //     bandUrl: '/garage',
  //     title: 'Heartbeat by Alice Boman',
  //     description: 'Alice Boman is electric on this new piano-heavy single.',
  //     genre: 'alternative'
  //   },
  //   {
  //     imageUrl: 'https://f4.bcbits.com/img/a1884813622_16.jpg',
  //     bandUrl: '/garage',
  //     title: 'Heartbeat by Alice Boman',
  //     description: 'Alice Boman is electric on this new piano-heavy single.',
  //     genre: 'alternative'
  //   },
  //   {
  //     imageUrl: 'https://f4.bcbits.com/img/a2482547434_2.jpg',
  //     bandUrl: '/garage',
  //     title: 'Heartbeat by Alice Boman',
  //     description: 'Alice Boman is electric on this new piano-heavy single.',
  //     genre: 'alternative'
  //   },
  //   {
  //     imageUrl: 'https://f4.bcbits.com/img/a0008085777_16.jpg',
  //     bandUrl: '/garage',
  //     title: 'Heartbeat by Alice Boman',
  //     description: 'Alice Boman is electric on this new piano-heavy single.',
  //     genre: 'alternative'
  //   },
  //   {
  //     imageUrl: 'https://f4.bcbits.com/img/a2482547434_2.jpg',
  //     bandUrl: '/garage',
  //     title: 'Heartbeat by Alice Boman',
  //     description: 'Alice Boman is electric on this new piano-heavy single.',
  //     genre: 'alternative'
  //   },
  //   {
  //     imageUrl: 'https://f4.bcbits.com/img/a2810862928_16.jpg',
  //     bandUrl: '/garage',
  //     title: 'Heartbeat by Alice Boman',
  //     description: 'Alice Boman is electric on this new piano-heavy single.',
  //     genre: 'alternative'
  //   },
  //   {
  //     imageUrl: 'https://f4.bcbits.com/img/a2810862928_16.jpg',
  //     bandUrl: '/garage',
  //     title: 'Heartbeat by Alice Boman',
  //     description: 'Alice Boman is electric on this new piano-heavy single.',
  //     genre: 'alternative'
  //   },
  //   {
  //     imageUrl: 'https://f4.bcbits.com/img/a2810862928_16.jpg',
  //     bandUrl: '/garage',
  //     title: 'Heartbeat by Alice Boman',
  //     description: 'Alice Boman is electric on this new piano-heavy single.',
  //     genre: 'alternative'
  //   },
  //   {
  //     imageUrl: 'https://f4.bcbits.com/img/a2810862928_16.jpg',
  //     bandUrl: '/garage',
  //     title: 'Heartbeat by Alice Boman',
  //     description: 'Alice Boman is electric on this new piano-heavy single.',
  //     genre: 'alternative'
  //   },
  //   {
  //     imageUrl: 'https://f4.bcbits.com/img/a2810862928_16.jpg',
  //     bandUrl: '/garage',
  //     title: 'Heartbeat by Alice Boman',
  //     description: 'Alice Boman is electric on this new piano-heavy single.',
  //     genre: 'alternative'
  //   }
  // ];

  bandsCardsData = [];

  constructor(private bandsService: BandsService) {}

  ngOnInit() {
    this.loadBandsInBandsService();
    console.log(this.bandsCardsData);
  }

  assignBandsFromServiceToThisComponent() {
    for (let i = 0; i < this.bandsService.bands.length; i++) {
      this.bandsCardsData.push(Object.assign({}, this.bandsService.bands[i]));
    }
  }

  loadBandsInBandsService() {
    if (this.bandsCardsData.length === 0) {
      if (this.bandsService.bands.length === 0) {
        this.bandsService.assignBandsToService()
          .subscribe((data) => {
              console.log('data: ', data);
              this.assignBandsFromServiceToThisComponent();
            },
            (err) => {
              console.log('error: ', err);
            },
            () => {
              console.log('completed in ngOnInit');
            }
          );
      } else {
        this.assignBandsFromServiceToThisComponent();
      }
    }
  }

}
