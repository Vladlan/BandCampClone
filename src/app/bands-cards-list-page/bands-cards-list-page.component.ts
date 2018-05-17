import {Component, OnInit} from '@angular/core';
import {BandsService} from '../bands.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-bands-cards-list-page',
  templateUrl: './bands-cards-list-page.component.html',
  styleUrls: ['./bands-cards-list-page.component.css']
})
export class BandsCardsListPageComponent implements OnInit {

  bandsCardsData = [];
  searchStr: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bandsService: BandsService
  ) {}

  ngOnInit() {
    this.loadBandsInBandsService();
    console.log( 'this.route.snapshot', this.route.snapshot );
    console.log(this.route.snapshot.params['searchStr']);
    Observable.from(this.route.snapshot.params['searchStr'])
      .subscribe((data) => {
          console.log('data: ', data);
        },
        (err) => {
          console.log('error: ', err);
        },
        () => {
          console.log('completed in ngOnInit');
        });
  }

  assignBandsFromServiceToThisComponent() {
    for (let i = 0; i < this.bandsService.bands.length; i++) {
      this.bandsCardsData.push(
        Object.assign({}, this.bandsService.bands[i])
      );
    }
  }

  loadBandsInBandsService() {
    if (this.bandsCardsData.length === 0) {
      if (this.bandsService.bands.length === 0) {
        this.bandsService.assignBandsToService()
          .subscribe((data) => {
              this.assignBandsFromServiceToThisComponent();
            },
            (err) => {
              console.log('error: ', err);
            },
            () => {
              console.log('completed in ngOnInit of BandsCardsListPageComponent');
            }
          );
      } else {
        this.assignBandsFromServiceToThisComponent();
      }
    }
  }

}
