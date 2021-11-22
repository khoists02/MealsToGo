/* eslint-disable @typescript-eslint/no-unused-vars */
/* @ts-ignore */
import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  SearchContainer,
  RestaurantList,
  LoadingContainer,
  Loading,
} from "./restaurant.styles";
import { SafeArea } from "../../../components/utility/safe-view-are.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantsContext } from "../../../services/restaurant/restaurant.context";
import { RouteProp, useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  RestaurantRoutes,
  RestaurantNavigationParamsList,
} from "../../../types/route.type";

type RestaurantScreenProps = StackNavigationProp<
  RestaurantNavigationParamsList,
  RestaurantRoutes.RestaurantDetails
>;

export const RestaurantsScreen = () => {
  const navigation = useNavigation<RestaurantScreenProps>();
  /* @ts-ignore */
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log({ restaurants });
  /* @ts-ignore */
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const onChangeSearch = (query: string) => setSearchQuery(query);

  if (restaurants.length > 0) {
    console.log(JSON.stringify(restaurants));
  }

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      {restaurants?.length > 0 && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }: any) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(RestaurantRoutes.RestaurantDetails, {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="medium">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item: any) => item.name}
        />
      )}
    </SafeArea>
  );
};
