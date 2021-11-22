import React from "react";
import { Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/core";
import { SafeArea } from "../../../components/utility/safe-view-are.component";
import {
  RestaurantNavigationParamsList,
  RestaurantRoutes,
} from "../../../types/route.type";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetail = () => {
  const route =
    useRoute<
      RouteProp<
        RestaurantNavigationParamsList,
        RestaurantRoutes.RestaurantDetails
      >
    >();
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <Text>This is the menu list for restaurant detail screen !!!</Text>
    </SafeArea>
  );
};
