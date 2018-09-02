import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import navigation
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
//import screens
import BeginerHelperScreen from './src/features/BeginerHelper/BeginerHelperIndex'
import LoginScreen from './src/features/Login/LoginIndex'
import MyBusinessScreen from './src/features/MyBusiness/MyBusinessIndex';
import MyInventoryScreen from './src/features/MyInventory/MyInventortIndex'
import ViewCarScreen from './src/features/ViewCar/ViewCarIndex';
import SellCarScreen from './src/features/SellCar/SellCarIndex';
import AddCarScreen from './src/features/AddCar/AddCarIndex';
import AddUserInfoScreen from './src/features/AddUserInfo/AddUserIndex';
import SettingScreen from './src/features/Setting/SettingIndex';
//store
import store from './src/store'
import { Provider } from 'react-redux';

//Tabs

const tabs = createBottomTabNavigator({
  MyBusinessScreen: {
    screen: MyBusinessScreen
  },
  MyInventoryScreen: {
    screen: MyInventoryScreen
  }
})

//stacknavigation
const Stack = createStackNavigator({
  HelperScreen: {
    screen: BeginerHelperScreen,
    navigationOptions: {
      header: null
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  AddUserInfoScreen: {
    screen: AddUserInfoScreen,
    navigationOptions:{
      header:null
    }
  },
  Home: {
    screen: tabs
  },
  ViewCarScreen: {
    screen: ViewCarScreen
  },
  SellCarScreen: {
    screen: SellCarScreen
  },
  AddCarScreen: {
    screen: AddCarScreen
  },
  SettingScreen: {
    screen: SettingScreen
  }

})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Stack />
      </Provider>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
