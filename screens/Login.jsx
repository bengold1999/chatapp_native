import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onHandleLogin = () => {
        if (email !== '' && password !== '') {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log("login success"))
                .catch((err) => Alert.alert("login error", err.message))
        }
    }


    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text>Login</Text>
                <Text>username:</Text>
                <TextInput
                    style={{ backgroundColor: 'black' }}
                    placeholder='Enter Mail'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAdress'
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text>password:</Text>
                <TextInput
                    style={{ backgroundColor: 'black' }}
                    placeholder='Enter password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    autoFocus={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                
                


            </SafeAreaView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})