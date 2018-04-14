// Core
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';

export default class AppOrderScreen extends Component {
    static navigationOptions = {
        header: null,
      };

    render() {
        return (
            <View style = {styles.container}>
                <Text> Welcome To Starbucks </Text>
                <Button 
                    onPress = {() => this.props.navigation.goBack()}
                    title = 'Go To Main App'
                    color = 'lightblue'
                />
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
