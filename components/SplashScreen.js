import React, { PureComponent } from "react";
import { View, Text } from "react-native";

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
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center"
        }}
      />
    );
  }
}
