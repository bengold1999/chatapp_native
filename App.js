import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Chat from './screens/Chat.jsx'
import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login.jsx'

const Stack = createStackNavigator()

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>

  )
}
function RootNavigator() {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>

  )
}




const App = () => {
  return <RootNavigator />
}

export default App

const styles = StyleSheet.create({})