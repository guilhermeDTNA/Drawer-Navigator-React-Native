import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

class Tela1 extends Component{

	static navigationOptions = {
		drawerLabel:'Tela 1',
		drawerIcon:() => (
			<Image source={require('./assets/images/icone1.jpeg')} style={styles.icon} />
			)
	}

	render(){
		return (
			<View style={styles.container}>
			<Text>Esta é a tela 1</Text>
			</View>
			);
	}
}

class Tela2 extends Component {
	static navigationOptions = {
		drawerIcon:() => (
			<Image source={require('./assets/images/icone2.png')} style={styles.icon} />
			)
	}
	render(){
		return(
			<View style={styles.container}>
			<Text>Esta é a tela 2</Text>
			<Text></Text>
			<Button title="Voltar" onPress={()=>this.props.navigation.goBack()} />
			</View>
			)
	}
}

class Tela3 extends Component {
	static navigationOptions = {
		drawerIcon:() => (
			<Image source={require('./assets/images/icone2.png')} style={styles.icon} />
			)
	}
	render(){
		return(
			<View style={styles.container}>
			<Text>Esta é a tela 3</Text>
			<Text></Text>
			<Button title="Abrir menu" onPress={()=>this.props.navigation.toggleDrawer()} />
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop:20,
		alignItems: 'center',
		justifyContent: 'center',
	},

	icon: {
		width:26,
		height:26
	}
});


const Navegador = createDrawerNavigator({
	Tela1:{
		screen:Tela1
	},
	Tela2:{
		screen:Tela2
	},
	Tela3:{
		screen:Tela3
	}
},{
  //Se quiser adicionar em cada tela, basta criar uma variável nela e definir
  drawerPosition: 'right',
  drawerWidth: 150,
  drawerBackgroundColor: '#FFFF00', //transparent tbm funciona
  contentOptions:{
  	activeTintColor: '#FFFFFF',
  	inativeTintColor: '#000000',
  	activeBackgroundColor: 'red',
  	itemsContainerStyle:{
  		backgroundColor:'#FFFFFF',
  		marginTop: 30
  	},
  	itemStyle:{
  		height: 50
  	},
  	labelStyle:{
  		fontSize:25
  	},
  	iconContainerStyle:{
  		//backgroundColor: '#000000'
  	}
  }
});

const AppContainer = createAppContainer(Navegador);

export default AppContainer;
