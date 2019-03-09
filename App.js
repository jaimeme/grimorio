import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Magias from "./screens/Magias";
import makeStore from "./redux/createStore";
import SplashScreen from "./components/SplashScreen";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: null,
      isLoading: true
    };
  }
  onMakeStore = (message, store) => {
    console.log("Message", message, "new State", store);
    this.setState({ isLoading: false });
  };
  componentWillMount() {
    const store = makeStore(this.onMakeStore);
    this.setState({ store });
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      <Provider store={this.state.store}>
        <Magias />
      </Provider>
    );
  }
}
