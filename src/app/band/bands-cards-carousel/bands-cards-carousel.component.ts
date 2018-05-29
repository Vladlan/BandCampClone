import { Component, Input } from '@angular/core';
import { Band } from 'app/models';

@Component({
  selector: 'app-bands-cards-carousel',
  templateUrl: './bands-cards-carousel.component.html',
  styleUrls: ['./bands-cards-carousel.component.css']
})
export class BandsCardsCarouselComponent {
  @Input() bands: Array<Band> = [];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
}
