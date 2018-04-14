// Core
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';

export default class AppCartScreen extends Component {
    static navigationOptions = {
        header: null,
      };

    render() {
        return (
            <View style = {styles.container}>
                <Text> Please check your order </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})
