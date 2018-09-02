import React from 'react';
import { StyleSheet, View,Dimensions } from 'react-native';
import { Button, Text, Icon } from 'native-base';
//import const
import * as theme from '../utils/Theme';

const HelperView = ({
    screenHeight,
    text1,
    text2,
    text3,
    isEnable,
    onPress
}) => {
    return(
        <View style={styles.containerOne}>

                    <Button bordered icon style={styles.topButton}>
                        <Icon style={styles.btnIcon} name='close' />
                    </Button>

                    <View style={[styles.textContainer,{marginVertical: screenHeight /4,marginHorizontal:10}]}>
                        <Text style={styles.lable}>{text1}</Text>
                        <Text style={styles.lable}>{text2}</Text>
                        <Text style={styles.lable}>{text3}</Text>
                    </View>

                    <Button onPress={onPress} transparent style={styles.bottomButton}>
                        <Text style={styles.buttonLabel}>Next >></Text>
                    </Button>

                </View>
    )
}

const styles = StyleSheet.create({
    lable:{
        fontSize:theme.fontSizeLarge,
        color:theme.fontColorPrimaryLight,
        fontWeight:'100'
    },
    textContainer:{
        alignItems:'center',
        justifyContent:'space-around',
        flex:1,
        
    },

    btnIcon: {
        color: '#fff'
    },
    buttonLabel: {
        color: theme.fontColorPrimaryLight,
        fontWeight:'100'
    },
    container: {
        flex: 1,
    },
    topButton: {
        borderColor: theme.fontColorPrimaryLight,
        position: 'absolute',
        left: 20,
        top: 30
    },
    bottomButton: {
        position: 'absolute',
        right: 20,
        bottom: 20
    },
    containerOne: {
        flex: 1,
        backgroundColor: theme.colorPrimary
    }
})

export default HelperView