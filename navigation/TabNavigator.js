import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import Community  from '../screens/Community'

const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeScreen
    },
    Community: {
      screen: Community
    },
    Settings: {
      screen: SettingsScreen
    }
  })
export default createAppContainer(TabNavigator)


