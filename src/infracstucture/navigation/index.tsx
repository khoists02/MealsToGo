import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "../../components/utility/safe-view-are.component";
import { RestaurantScreenNavigator } from "./restaurant-screen.navigator";
import {
  IBottomTabNavigatorProps,
  ITabBarIcon,
  MainBottomTabParamList,
  MainRoutes,
} from "../../types/route.type";
import { theme } from "../theme";
import { TAB_BOTTOM_ICONS } from "../../constants";

const tabBarOption = (headerShown = false) => {
  return {
    headerShown: headerShown,
    tabBarActiveTintColor: theme.colors.ui.success,
    tabBarInactiveTintColor: theme.colors.ui.disabled,
  };
};

export const Navigation = () => {
  return <AppNavigator />;
};

const AppNavigator = () => {
  const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

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

  const createScreenOptions = ({
    route,
  }: IBottomTabNavigatorProps): BottomTabNavigationOptions | any => {
    const iconName: string = TAB_BOTTOM_ICONS[route.name] || "";
    return {
      tabBarIcon: ({ size, color }: ITabBarIcon) => (
        <Ionicons name={iconName as any} size={size} color={color} />
      ),
    };
  };
  const MyTabs = () => {
    return (
      <BottomTab.Navigator
        screenOptions={createScreenOptions as BottomTabNavigationOptions}
      >
        <BottomTab.Screen
          options={tabBarOption()}
          name={MainRoutes.Restaurant}
          component={RestaurantScreenNavigator}
        />
        <BottomTab.Screen
          options={tabBarOption(true)}
          name={MainRoutes.Settings}
          component={Settings}
        />
        <BottomTab.Screen
          options={tabBarOption(true)}
          name={MainRoutes.Map}
          component={Map}
        />
      </BottomTab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
