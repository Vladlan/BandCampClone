import { Album } from './album.model';

export interface Band {
  id: string;
  title: string;
  genre: string;
  launchYear: string;
  imageUrl: string;
  description: string;
  albums: Array<Album>;
}
