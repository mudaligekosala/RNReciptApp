import React, { Component } from 'react';
import { StyleSheet, View,Dimensions } from 'react-native';
import { Button, Text, Icon } from 'native-base';
//import const
import * as theme from '../../utils/Theme';
//presentional compnets
import DetailDisplayView from '../../components/HelperView'

export default class Helper extends Component {

    constructor(props) {
        super(props)
        let {width, height} = Dimensions.get('window')
        this.state = {
            isFontLoading: true,
            screenheight: height,
            label:{
            text1Label:'SignIn using your Email',
            text2Label:'Fill your details',
            text3Label:'Enjoy'
            },
            pageIndex:0
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({
            isFontLoading: false
        })
    }

_goToNextPage=()=>{
    let pageIndex=this.state.pageIndex;
    //check current page
    if(pageIndex === 0){
        this.setState({
            pageIndex:1,
            label:{
                text1Label:'Add All of your Vehicle details',
                text2Label:'Meet your Buyer and get his Signature using our app and Generate Recipt fro your new sale.',
                text3Label:'Start Now !!'
                },
        })
    }else if(pageIndex === 1){
        this.props.navigation.navigate('LoginScreen')
    }

}
    
    render() {
        if (this.state.isFontLoading) { return <Expo.AppLoading /> }
        return (
            <View style={styles.container}>

            <DetailDisplayView 
            screenHeight={this.state.screenheight}
            text1={this.state.label.text1Label}
            text2={this.state.label.text2Label}
            text3={this.state.label.text3Label}
            onPress={()=>this._goToNextPage()}
             />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },
})