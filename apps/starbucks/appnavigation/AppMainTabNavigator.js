// Core
import React from 'react';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// Instruments
import { Ionicons } from '@expo/vector-icons';

// Screens
import AppOrderScreen from '../appscreens/AppOrderScreen';
import AppCartScreen from '../appscreens/AppCartScreen';

export default createMaterialBottomTabNavigator(
    {
        Order: {
            screen: AppOrderScreen,
        },
        Cart: {
            screen: AppCartScreen,
        },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Order':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-add${focused ? '' : '-outline'}`
                                : 'md-add';
                        break;
                    case 'Cart':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-cart${focused ? '' : '-outline'}`
                                : 'md-cart';
                        break;
                }
                return (
                    <Ionicons
                        name={iconName}
                        size={28}
                        style={{ marginBottom: -3, width: 25 }}
                        color={focused ? '#2f95dc' : '#ccc'}
                    />
                );
            },
        }),
        animationEnabled: true,
        swipeEnabled: true,
    }
);
