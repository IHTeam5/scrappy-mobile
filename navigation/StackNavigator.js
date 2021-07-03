import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ProfileScreen from '../screens/ProfileScreen'

const HeaderNavigator = createStackNavigator({
  Proflie: {
    screen: ProfileScreen
  },
  Scrappy: {
      navigationOptions: {
        headerTitle: 'Scrappy'
      }
    }
  })
export default createAppContainer(HeaderNavigator)