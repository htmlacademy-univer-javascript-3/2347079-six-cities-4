import { City } from './city';
import { PointLocation } from './point-location';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: PointLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  };
