import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Tela2 from './Tela2';
import Tela3 from './Tela3';

export default class Tela1 extends Component {

  static navigationOptions = {
    
    tarBarLabel:'Tela 1',
    
  }

  render(){
    return (
      <View style={styles.body}>
      <Text>Tela 3</Text>

      <Text>Nome: {this.props.navigation.getParam('nome', 'Ninguém')} </Text>
      <Text>Idade: {this.props.navigation.getParam('idade', 0)} </Text> 


      <Button title="Voltar" onPress={()=>this.props.navigation.goBack()} />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});