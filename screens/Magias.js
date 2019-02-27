import React, { PureComponent } from "react";
import { View, Text, FlatList } from "react-native";
import { magias, createMagia } from "../config/data";
import MagiaItem from "../components/MagiaItem";

export default class Magias extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList data={magias} renderItem={({ item }) => <MagiaItem />} />
      </View>
    );
  }
}
