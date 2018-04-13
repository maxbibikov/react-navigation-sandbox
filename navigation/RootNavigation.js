// Core
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// Components
import MainTabNavigator from './MainTabNavigator';

const RootStackNavigator = StackNavigator(
    {
        Main: {
            screen: MainTabNavigator
        },
        
    },
    {
        navigationOptions: () => ({
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }),
      }
);

export default class RootNavigator extends Component {
    render() {
        return <RootStackNavigator />;
    }
}
