import React from "react";
import { Searchbar } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea, SearchContainer, RestaurantList } from "./restaurant.styles";

const data = [
  { name: "a" },
  { name: "b" },
  { name: "c" },
  { name: "d" },
  { name: "f" },
];

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={data as any}
        renderItem={({ item }: any) => (
          <Spacer position="bottom" size="medium">
            <RestaurantInfoCard
              restaurant={{
                name: "Some Restaurant",
                icon: "test",
                photos: [
                  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
                ],
                address: "100 some random address",
                isOpeningNow: true,
                rating: 4,
              }}
            />
          </Spacer>
        )}
        keyExtractor={(item: any) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
