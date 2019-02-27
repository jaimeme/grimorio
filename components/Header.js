import React, { PureComponent } from 'react';
import { View, Text, TextInput, StyleSheet, Picker } from 'react-native';
import { Button, Icon,Overlay } from 'react-native-elements';
import { colors } from '../config/styles';



export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      classe: "Todos",
      overlayAberto:false
    };
  }

  abrirOverlay=()=>{
    this.setState({overlayAberto:true})  
  }
  fecharOverlay=()=>{
    this.setState({overlayAberto:false})
  }

  render() {
    return (
      <View>
        <View style={styles.buscaContainer}>
          <Icon
            name='search'
            size={35}
            containerStyle={{marginTop:10}}
          />
          <TextInput
            underlineColorAndroid={colors.dividerColor}
            style={{flex:1,fontSize:18}}
            placeholder={'Nome da Magia...'}
          />
          <Button
            buttonStyle={{flex:1}}
            containerStyle={{width:90,height:40,marginHorizontal:20}}
            title="Filtros"
            type="outline"
            raised
            onPress={this.abrirOverlay}
          />
        </View>
        <View>
          <Picker
            selectedValue={this.state.classe}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({classe : itemValue })
          }>
            <Picker.Item label="Todos" value="todos" />
            <Picker.Item label="Bárbaro" value="barbaro" />
            <Picker.Item label="Bardo" value="bardo" />
            <Picker.Item label="Bruxo" value="bruxo" />
            <Picker.Item label="Clérigo" value="clerigo" />
            <Picker.Item label="Druida" value="druida" />
            <Picker.Item label="Feiticeiro" value="feiticeiro" />
            <Picker.Item label="Guerreiro" value="guerreiro" />
            <Picker.Item label="Ladino" value="ladino" />
            <Picker.Item label="Mago" value="mago" />
            <Picker.Item label="Monge" value="monge" />
            <Picker.Item label="Paladino" value="paladino" />
            <Picker.Item label="Patrulheiro" value="patrulheiro" />
          </Picker>
        </View>
        <Overlay 
        isVisible={this.state.overlayAberto}
        onBackdropPress={this.fecharOverlay} >
          <Text>UHUL</Text>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {

  },
  buscaContainer: {
    flexDirection:"row",

  },
  classeContainer: {},
})