import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';
/*rnpc cria componente puro */
export default class MagiaItem  extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> MagiaItem    </Text>
      </View>
    );
  }
}
