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
  inputStr: string;
  searchButton: any;
  searchButton$: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private bandsService: BandsService) {
  }

  ngOnInit() {
    this.searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    this.searchButton$ = Observable.fromEvent(this.searchButton, 'click');
    let searchInput$ = Observable.fromEvent(searchInput, 'keyup');


    //Interactive search
    // searchInput$.subscribe( (e)=> {
    //   console.log(e);
    //   console.log(e.target.value);
    //   this.searchStr = e.target.value;
    // });

    this.searchStr = this.route.snapshot.queryParams['searchQuery'];
    this.searchButton$.subscribe((event) => {
      setTimeout(
        () => {
          this.searchStr = this.route.snapshot.queryParams['searchQuery'];
          this.assignBandsFromServiceToThisComponent(this.searchStr);
        }, 100);
    });

    this.loadBandsInBandsService();
  }


  assignBandsFromServiceToThisComponent(searchStr) {
    this.bandsCardsData = [];
    for (let i = 0; i < this.bandsService.bands.length; i++) {
      if (this.bandsService.bands[i]['title'].toLowerCase()
          .indexOf(searchStr.toLowerCase()) !== -1) {
        this.bandsCardsData.push(
          Object.assign({}, this.bandsService.bands[i])
        );
      }
    }
  }

  loadBandsInBandsService() {
    if (this.bandsCardsData.length === 0) {
      if (this.bandsService.bands.length === 0) {
        this.bandsService.assignBandsToService()
          .subscribe((data) => {
              this.assignBandsFromServiceToThisComponent(this.searchStr);
            },
            (err) => {
              console.log('error: ', err);
            },
            () => {
              console.log('completed in ngOnInit of BandsCardsListPageComponent');
            }
          );
      } else {
        this.assignBandsFromServiceToThisComponent(this.searchStr);
      }
    }
  }

}
