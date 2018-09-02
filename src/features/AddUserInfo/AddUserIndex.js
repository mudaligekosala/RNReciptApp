import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableNativeFeedback } from 'react-native';
import { Thumbnail, Item, Content, Input, Container, Fab, Icon } from 'native-base'
import { colorPrimary } from '../../utils/Theme';
import { ImagePicker } from 'expo';

export default class AddUserInfo extends Component {

    constructor(props) {
        super(props)
        let { width, height } = Dimensions.get('window')

        this.state = {
            screnHeight: height,
            formData: {
                username: {
                    value: '',
                    isRequird: true
                },
                companyName: {
                    value: '',
                    isRequird: false
                },
                image: {
                    value: '',
                    isRequird: false
                }
            }
        }
    }

    //pick a profile image
    _getImageFromGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3]
        })

        console.log('image picker', result)

        if (!result.cancelled) {
            this.setState({
                formData: {
                    image: {
                        value: result.uri
                    }
                }
            })
        }
    }


    render() {
        console.log('image',this.state.formData.image.value)
       // let {imageFromState} = `{uri:${this.state.formData.image.value}}`
        let imageFromState = this.state.formData.image.value
        console.log('images',imageFromState)
        return (


            <Container style={{ flex: 1 }}>
                <Container style={[styles.container, { marginVertical: this.state.screnHeight / 3, marginHorizontal: 20 }]}>

                    <TouchableNativeFeedback onPress={() => this._getImageFromGallery()}>
                        {!imageFromState ? (
                            <Thumbnail
                            
                                large
                                source={require('../../image/profile.jpg')}
                            />
                        ) : (
                            <Thumbnail
                                large
                                source={{uri: imageFromState}}
                            />
                        )
                        }
                    </TouchableNativeFeedback>

                    <Item>
                        <Input placeholder='Your Company Name' />
                    </Item>

                    <Item>
                        <Input placeholder='Your Name' />
                    </Item>

                </Container>

                <Fab
                    style={{ backgroundColor: colorPrimary }}
                    position={"bottomRight"}
                >
                    <Icon name='checkmark' />
                </Fab>

            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',

    }
})