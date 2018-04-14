// Core
import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

// Instruments
import { Ionicons } from '@expo/vector-icons';

// Screens
import AppHomeScreen from '../appscreens/AppHomeScreen';

export default TabNavigator(
    {
        Home: {
            screen: AppHomeScreen,
        }
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
                                ? `ios-home${ focused ? '' : '-outline'}`
                                : 'md-home';
                        break;
                }
                return (
                    <Ionicons 
                        name = { iconName }
                        size = { 28 }
                        style = {{ marginBottom: -3, width: 25 }}
                        color= { focused ? '#2f95dc' :'#ccc' }
                    />
                );
            }
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: true
    }
)
