import { Pipe, PipeTransform } from '@angular/core';
import { BandsListItemComponent } from '../band/bands-list-item/bands-list-item.component';

@Pipe({
  name: 'BandNameGenreFilterPipe'
})
export class BandNameGenreFilterPipe implements PipeTransform {
  transform(bands, searchStr: string) {
    if (bands.length === 0 || searchStr === undefined) {
      return bands;
    }

    return bands.filter(band => {
      if (
        band['title'].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1 ||
        band['genre'].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1
      ) {
        return true;
      } else {
        return false;
      }
    });
  }
}
