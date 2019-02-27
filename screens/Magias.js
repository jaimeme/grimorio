import React, { PureComponent } from "react";
import { View, Text, FlatList } from "react-native";
import { magias, createMagia } from "../config/data";
import MagiaItem from "../components/MagiaItem";
import { colors } from "../config/styles";
import Header from "../components/Header";

export default class Magias extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: colors.textIcons }}>
                <FlatList ListHeaderComponent={() => <Header />} ListFooterComponent={() => <View style={{ width: '100%', borderTopWidth: 4, borderColor: colors.accentColor }} />} numColumns={2} keyExtractor={(item, index) => index.toString()} data={magias} renderItem={({ item }) => <MagiaItem magia={item} />} />
            </View>
        );
    }
}
