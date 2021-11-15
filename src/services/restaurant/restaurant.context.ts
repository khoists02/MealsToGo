import React from "react";

export interface IRestaurantContextValue {
  restaurants: Array<any>;
  isLoading: boolean;
  error: any;
}

interface IRestaurantContext {
  value: IRestaurantContextValue;
}

export const RestaurantsContext = React.createContext<IRestaurantContext>({
  value: {
    restaurants: [],
    isLoading: false,
    error: null,
  },
});
