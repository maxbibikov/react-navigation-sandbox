// Core
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
      };

      state = {
          searchText: ''
      }

    render() {
        return (
            <View style = {styles.container}>
                <TextInput 
                    style = {styles.searchInput}
                    onChangeText = { searchText => this.setState({ searchText })}
                    value = { this.state.searchText }
                    placeholder = 'search'
                />
                <Button 
                    onPress = { () => this.props.navigation.navigate('Starbucks') }
                    title = 'Go'
                    color = 'purple'
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
    },
    searchInput: {
        height: 40,
        width: 100,
        textAlign: 'center'
        
    }
})
