import React from 'react'
import { Text, View } from 'react-native'
import firebase from '../firebaseScript'
import database from '@react-native-firebase/database'

/*const db = firebase.firestore().collections('Facilities')
db.onSnapshot(querySnapshot => {
  const filter = [];
}*/

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Home!</Text>
  </View>
)
export default HomeScreen


