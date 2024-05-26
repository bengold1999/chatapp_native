import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Chat from './screens/Chat.jsx'
import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login.jsx'
import SignUp from './screens/SignUp.jsx'

const Stack = createStackNavigator()

function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
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