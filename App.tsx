import React, { useEffect, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infracstucture/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./src/services/restaurant/restaurant.service";
import {
  RestaurantsContext,
  IRestaurantContextValue,
} from "./src/services/restaurant/restaurant.context";
import { Navigation } from "./src/infracstucture/navigation/index";

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
          <Navigation />
        </RestaurantsContext.Provider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
