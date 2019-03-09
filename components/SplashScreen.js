import React, { PureComponent } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../config/styles";

export default class SplashScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.textIcons,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Icon
          size={275}
          color={colors.primaryText}
          type={"material-community"}
          name={"shield"}
        />
        <Icon
          size={175}
          color={colors.primaryColor}
          type={"material-community"}
          name={"fire"}
          containerStyle={{ position: "absolute" }}
        />
        <ActivityIndicator color={colors.primaryColor} size={"large"} />
      </View>
    );
  }
}
