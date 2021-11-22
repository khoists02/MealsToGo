/* eslint-disable no-shadow */
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { IRestaurant } from "./restaurants.type";

export interface IBottomTabNavigatorProps {
  route: RouteProp<ParamListBase>;
  navigation: any;
  headerShown: boolean;
  options: any;
}

export interface ITabBarIcon {
  size: number;
  color: string;
}

export enum RestaurantRoutes {
  Restaurant = "Restaurant",
  RestaurantDetails = "RestaurantDetails",
}

export enum MainRoutes {
  Restaurant = "Restaurant",
  Settings = "Settings",
  Map = "Map",
}

export type MainBottomTabParamList = {
  [MainRoutes.Restaurant]: undefined;
  [MainRoutes.Settings]: undefined;
  [MainRoutes.Map]: undefined;
};

export type RestaurantNavigationParamsList = {
  [RestaurantRoutes.Restaurant]: undefined;
  [RestaurantRoutes.RestaurantDetails]: { restaurant: IRestaurant };
};
