import { Pipe, PipeTransform } from '@angular/core';
import { BandsListItemComponent } from '../band/bands-list-item/bands-list-item.component';
import { Band } from 'app/models';
@Pipe({
  name: 'BandNameGenreFilterPipe'
})
export class BandNameGenreFilterPipe implements PipeTransform {
  transform = (bands: Array<Band>, searchStr: string) =>
    bands.filter(
      band =>
        band['title'].toLowerCase().includes(searchStr.toLowerCase()) ||
        band['genre'].toLowerCase().includes(searchStr.toLowerCase())
    );
}
