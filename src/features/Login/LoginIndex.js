import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container,Icon, Content, Item, Input, Form, Button, Text, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as theme from '../../utils/Theme';
import Validate from '../../utils/FormValidation';
import { loginUser, registerUser } from './ActionAuth';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasErros: true,
            textInputStatus: 'success',//error
            loginText: 'Login',
            registerWarningText: 'Dont have a Account Register here',
            formValues: {
                email: {
                    value: '',
                    valid: false,
                    rules: {
                        isEmail: true,
                        isRequired: true
                    },
                    error: {
                        value: 'Plese enter valid Email',
                        valid: false
                    }
                },
                password: {
                    value: '',
                    valid: false,
                    rules: {
                        minLength: 6,
                        isRequired: true
                    },
                    error: {
                        value: 'Minimum password length is 6',
                        valid: false
                    }
                },
                comfirmPassword: {
                    value: '',
                    valid: false,
                    rules: {
                        comfirmPassword: 'password'
                    },
                    error: {
                        value: 'Passord dosent match please check again',
                        valid: false
                    }
                }
            }
        }
    }

    //update input
    _updateInput = (name, value) => {

        console.log(name, value)

        this.setState({
            hasErros: false
        })
        let formCopy = this.state.formValues;
        formCopy[name].value = value;

        //validating input values
        let valid = Validate(name, value, formCopy)

        if (valid) {
            formCopy[name].valid = valid
            formCopy[name].error.valid = false
        } else {
            formCopy[name].error.valid = true
        }



        this.setState({
            formValues: formCopy
        })

        console.log(this.state.formValues)
    }


    //handle user auth
    _userAuth = () => {
        switch (this.state.loginText) {
            case 'Login':
                this._loginUser();
                break;
            case 'Register':
                this._registerUser()
                break;
            default:
                break;
        }
    }

    //login user
    _loginUser = () => {


        this.props.navigation.navigate('AddUserInfoScreen')

      /*   let emailObject = this.state.formValues.email;
        let passwordObject = this.state.formValues.password;

        if (emailObject.valid && passwordObject.valid) {
            this.props.loginUser(emailObject.value, passwordObject.value).then(this._manegUserAction())
        } else {

            this.setState({
                hasErros: true
            })
        } */
    }

    //register
    _registerUser = () => {
        let emailObject = this.state.formValues.email;
        let passwordObject = this.state.formValues.password;
        let comfPasswordObject = this.state.formValues.comfirmPassword;


        if (emailObject.valid && passwordObject.valid && comfPasswordObject.valid) {
            this.props.registerUser(emailObject.value, passwordObject.value).then(this._manegUserAction())
        } else {
            this.setState({
                hasErros: true
            })
        }
    }

    _manegUserAction = () => {

    }

    //change user registring or login
    _changeAuthType = () => {
        if (this.state.loginText === 'Login') {
            this.setState({
                registerWarningText: 'Dont have a Account Register here',
                loginText: 'Register'
            })
        } else {
            this.setState({
                registerWarningText: 'Are you User, Login here',
                loginText: 'Login',
                formCopy: {
                    comfirmPassword: {
                        value: '',
                        valid: false
                    }
                }
            })
        }
    }

    render() {
        /**
         * FIXME: Error showing not working
         */
        let textInputStatus = this.state.hasErros ? 'error' : 'success'
      console.log(this.props.isLoading)

        return (
            <Container pointerEvents={this.props.isLoading ? 'none':'auto'}>
                <Content>
                    <Form>

                        <Item textInputStatus >
                            <Input onChangeText={(value) => this._updateInput('email', value)} placeholder='Email'></Input>
                            <Icon name='close-circle' />
                        </Item>

                        <Item textInputStatus>
                            <Input onChangeText={(value) => this._updateInput('password', value)} placeholder='Password'></Input>
                        </Item>

                        {this.state.loginText === 'Register' && (
                            <Item textInputStatus>
                                <Input onChangeText={(value) => this._updateInput('comfirmPassword', value)} placeholder='Password'></Input>
                            </Item>
                        )}
                      
                        <Button onPress={() => this._userAuth()} disabled={this.state.hasErros} style={styles.buttonLogin}>
                            <Text>{this.state.loginText}</Text>
                        </Button>

                        <Button onPress={() => this._changeAuthType()} transparent dark>
                            <Text>{this.state.registerWarningText}</Text>
                        </Button>
                      
                          { this.props.isLoading && (
                            <View style={styles.loadingContainer}>
                            <Spinner color={theme.colorPrimaryLight} />
                            </View>
                          )
                        }
                       
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    buttonLogin: {
        backgroundColor: theme.colorPrimary
    },
    loadingContainer:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

function mapDispatchToProps(dispatch) {

    return bindActionCreators({ loginUser, registerUser }, dispatch)

}

function mapStateToProps(state) {
    return {
        isLoading: state.userAuthReducer.isloading
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Login)