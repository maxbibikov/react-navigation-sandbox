// Core
import React from 'react';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// Instruments
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

export default createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Favorites: {
            screen: FavoritesScreen,
        },
        Settings: {
            screen: SettingsScreen,
        },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Home':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-home${focused ? '' : '-outline'}`
                                : 'md-home';
                        break;
                    case 'Settings':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-settings${focused ? '' : '-outline'}`
                                : 'md-settings';
                        break;
                    case 'Favorites':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-heart${focused ? '' : '-outline'}`
                                : 'md-heart';
                }
                return (
                    <Ionicons
                        name={iconName}
                        size={26}
                        color={focused ? '#2f95dc' : '#ccc'}
                    />
                );
            },
        }),
        animationEnabled: true,
        swipeEnabled: true,
    }
);
