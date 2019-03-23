import React, { PureComponent } from "react";
import { View, Text, ActivityIndicator, Image, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../config/styles";

export default class SplashScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { height, width } = Dimensions.get("window");
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.darkPrimaryColor
        }}
      >
        <Image
          source={require("../assets/campfire.jpg")}
          style={{
            height,
            width,
            flex: 1
          }}
        />
      </View>
    );
  }
}
