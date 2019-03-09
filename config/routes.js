import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Magias from "../screens/Magias";
import { Icon } from "react-native-elements";
import React from "react";
import Config from "../screens/Config";
import Grimorio from "../screens/Grimorio";
import { colors } from "./styles";
const MagiasStack = createStackNavigator({
  Magias: {
    screen: Magias,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});
const ConfigStack = createStackNavigator({
  Config: {
    screen: Config,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});
const GrimorioStack = createStackNavigator({
  Grimorio: {
    screen: Grimorio,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

const Tabs = createBottomTabNavigator(
  {
    Magias: {
      screen: MagiasStack
    },
    Grimorio: {
      screen: GrimorioStack
    },
    Config: {
      screen: ConfigStack
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconType;
        let iconName;
        if (routeName === "Magias") {
          iconName = "book-open-page-variant";
          iconType = "material-community";
        } else if (routeName === "Config") {
          iconName = "gear";
          iconType = "evilicon";
        } else if (routeName === "Grimorio") {
          iconName = "wunderlist";
          iconType = "material-community";
        }

        // You can return any component that you like here!
        return (
          <Icon name={iconName} size={25} color={tintColor} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: colors.textIcons,
      inactiveTintColor: colors.secondaryText,
      activeBackgroundColor: colors.primaryColor,
      inactiveBackgroundColor: colors.primaryColor,
      labelStyle: {
        fontSize: 15
      }
    }
  }
);

export default createAppContainer(Tabs);
