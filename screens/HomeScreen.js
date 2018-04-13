// Core
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
      };

    render() {
        return (
            <View style = {styles.container}>
                <Text> Home </Text>
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
