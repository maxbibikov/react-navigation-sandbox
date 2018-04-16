// Core
import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

// Instruments
import signInWithGoogleAsync from '../instruments/signInWithGoogleAsync';

export default class Login extends Component {
    state = {
        loggedIn: false,
        googleAuthToken: '',
        userName: ''
    }

    _googleLogin = async () => {
        const token = await signInWithGoogleAsync();
        const userInfo = await this._getUserInfo(token);

        this.setState({googleAuthToken: token});
        this.setState({userName: userInfo.name});
        this.setState({loggedIn: true})
    }

    _getUserInfo = async accessToken => {
        const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
          method: 'GET',
          headers: { Authorization: `Bearer ${accessToken}`},
        });
        const userInfoResponseJson = await userInfoResponse.json()

        return userInfoResponseJson;
      } 


    _logOut = () => {this.setState({loggedIn: false})};

    render () {
        const { userName, loggedIn } = this.state;
        const logBtn = loggedIn
            ? <Button
                onPress = { this._logOut } 
                title = 'LogOut'
                color = 'salmon'
              />
            : <Button
                onPress = { this._googleLogin } 
                title = 'LogIn'
                color = 'blue'
              />

        return (
            <View>
                <Text>{ loggedIn ? `Welcome ${ userName }` : 'Please login' }</Text>
                {logBtn}
            </View>
        )
    }
    
}

