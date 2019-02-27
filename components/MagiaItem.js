import React, { PureComponent } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { colors } from '../config/styles';

/*rnpc cria componente puro */
export default class MagiaItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { magia } = this.props
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.nomeText} numberOfLines={3}>
          {magia.nome}  
        </Text>
        <Text style={styles.escolaText}>
            ({magia.escola})
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    borderWidth:2,
    borderColor:colors.accentColor ,
    flex:1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth:0,
    borderTopWidth:4
  },
  nomeText:{
    color:colors.primaryText,
    fontSize:18,
    textAlign:'center'
  }, escolaText:{
    color:colors.dividerColor,
    fontSize:15
  }
})