// Core
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// Components
import MainTabNavigator from './MainTabNavigator';
import Starbucks from '../apps/starbucks'

const RootStackNavigator = StackNavigator(
    {
        Main: {
            screen: MainTabNavigator
        },
        Starbucks: {
            screen: Starbucks
        }
        
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
