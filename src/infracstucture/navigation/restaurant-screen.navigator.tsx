import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant.screen";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantDetail } from "../../features/restaurants/screens/restaurant-detail.screen";
import {
  RestaurantNavigationParamsList,
  RestaurantRoutes,
} from "../../types/route.type";

export const RestaurantScreenNavigator = () => {
  const RestaurantStack =
    createStackNavigator<RestaurantNavigationParamsList>();
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name={RestaurantRoutes.Restaurant}
        component={RestaurantsScreen}
        options={{
          headerShown: false,
        }}
      />
      <RestaurantStack.Screen
        options={({ navigation, route }) => {
          const { restaurant } = route.params;
          return {
            title: restaurant.name,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="md-arrow-back" style={styles.icon} size={25} />
              </TouchableOpacity>
            ),
          };
        }}
        name={RestaurantRoutes.RestaurantDetails}
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});
