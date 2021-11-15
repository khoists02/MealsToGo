export interface IRestaurant {
  name: string;
  icon: string;
  photos: Array<string>;
  address?: string;
  isOpeningNow?: boolean;
  openingHours?: string;
  rating?: number;
  isClosedTemporarily?: boolean;
}

export interface IRestaurantInfo {
  restaurant: IRestaurant;
}
