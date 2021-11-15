import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infracstucture/theme";
import {
  NavigationContainer,
  RouteProp,
  ParamListBase,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "./src/components/utility/safe-view-are.component";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./src/services/restaurant/restaurant.service";
import {
  RestaurantsContext,
  IRestaurantContextValue,
} from "./src/services/restaurant/restaurant.context";
interface IScreenOptions {
  route: RouteProp<ParamListBase>;
  navigation: any;
}

interface ITabBarIcon {
  size: string;
  color: string;
}

const Settings = () => (
  <SafeArea>
    <Text>Settings !</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map !</Text>
  </SafeArea>
);

const TAB_ICONS: any = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Tab: any = createBottomTabNavigator();

const createScreenOptions = ({ route }: IScreenOptions) => {
  const iconName: string = TAB_ICONS[route.name] || "";
  return {
    tabBarIcon: ({ size, color }: ITabBarIcon) => (
      <Ionicons
        name={iconName as any}
        size={size as any}
        color={color as any}
      />
    ),
  };
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions as any}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);

  const [fontOswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [fontLatoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!fontOswaldLoaded || !fontLatoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContext.Provider
          value={
            {
              restaurants,
              isLoading,
              error,
            } as IRestaurantContextValue as any
          }
        >
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </RestaurantsContext.Provider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
