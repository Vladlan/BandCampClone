import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BandNameGenreYearFilter'
})
export class BandNameGenreYearFilter implements PipeTransform {

  transform(bandsCardsData, searchStr: string, key: string) {

    if (bandsCardsData.length === 0 || searchStr === undefined ) {
      return bandsCardsData;
    }

    return bandsCardsData.filter((bandCard) => {
        return bandCard[key]
          .toLowerCase()
          .indexOf(searchStr.toLowerCase()) !== -1;
      }
    );
  }


}
