import { Image } from "./Image";

export type TGifType = 'gif';

export interface Gif {
  id: string;
  rating: string;
  username: string;
  type: TGifType;
  title: string;
  images: {
    original: Image;
  }
}