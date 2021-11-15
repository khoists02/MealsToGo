/* eslint-disable @typescript-eslint/no-unused-vars */
/* @ts-ignore */
import React, { useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SearchContainer, RestaurantList } from "./restaurant.styles";
import { SafeArea } from "../../../components/utility/safe-view-are.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantsContext } from "../../../services/restaurant/restaurant.context";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  /* @ts-ignore */
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
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
            <Spacer position="bottom" size="medium">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(item: any) => item.name}
        />
      )}
    </SafeArea>
  );
};
