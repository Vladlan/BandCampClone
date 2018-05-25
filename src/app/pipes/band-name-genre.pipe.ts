import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BandNameGenreFilter'
})
export class BandNameGenreFilter implements PipeTransform {

  transform(bandsCardsData, searchStr: string, key1: string, key2: string) {

    if (bandsCardsData.length === 0 || searchStr === undefined ) {
      return bandsCardsData;
    }

    return bandsCardsData.filter((bandCard) => bandCard[key1]
          .toLowerCase()
          .indexOf(searchStr.toLowerCase()) !== -1 ||
          bandCard[key2]
            .toLowerCase()
            .indexOf(searchStr.toLowerCase()) !== -1
    );
  }
}
