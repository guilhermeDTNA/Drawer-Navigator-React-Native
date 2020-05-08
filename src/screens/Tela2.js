import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Tela2 extends Component {

  static navigationOptions = {
    title: 'Tela 2',
    tabBarOptions:{
      tabStyle:{
        backgroundColor:'#00FF00'
      }
    }
  };

  render(){
    return (
      <View style={styles.body}>
      <Text>Tela 2</Text>

      <Text>Nome: {this.props.navigation.getParam('nome', 'Ninguém')} </Text>
      <Text>Idade: {this.props.navigation.getParam('idade', 0)} </Text> 


      <Button title="Voltar" onPress={()=>this.props.navigation.goBack()} />

      <Text></Text>

      <Button title="Abrir menu" onPress={()=>this.props.navigation.toggleDrawer()} />
      
      <Text></Text>

      <Button title="Ir para a tela 3, que trabalha com Tag Navigator" onPress={()=>this.props.navigation.navigate('Tela3')} />
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
