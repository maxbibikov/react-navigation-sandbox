// Core
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';


import AppRootNavigation from './appnavigation/AppRootNavigation'


export default class Starbucks extends Component {

    render() {

      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          <AppRootNavigation />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  