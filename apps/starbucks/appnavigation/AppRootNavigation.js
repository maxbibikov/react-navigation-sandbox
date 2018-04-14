// Core
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// Components
import AppMainTabNavigator from './AppMainTabNavigator';
import RootNavigation from '../../../navigation/MainTabNavigator';

const AppRootStackNavigator = StackNavigator(
    {
        AppMain: {
            screen: AppMainTabNavigator
        },
        Main: {
            screen: RootNavigation,
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

export default class AppRootNavigator extends Component {
    render() {
        return <AppRootStackNavigator />;
    }
}
