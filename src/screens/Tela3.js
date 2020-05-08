import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Tela3 extends Component {

  static navigationOptions = {
    
    tarBarLabel:'Tela 3',
    
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
