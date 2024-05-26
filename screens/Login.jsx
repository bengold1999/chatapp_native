import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../comp/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const onHandleLogin = () => {
        if (email !== '' && password !== '') {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log("login success"))
                .catch((err) => Alert.alert("login error", err.message));
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text>Login</Text>
                <Text>Email:</Text>
                <TextInput
                    style={{ backgroundColor: 'black', color: 'white', marginBottom: 10 }}
                    placeholder='Enter Mail'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text>password:</Text>
                <TextInput
                    style={{ backgroundColor: 'black', color: 'white', marginBottom: 10 }}
                    placeholder='Enter password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <CustomButton handlePress={onHandleLogin} text={'Login'} />
                <Text>Don't have an account?</Text>
                <CustomButton handlePress={() => navigation.navigate('SignUp')} text={'Sign Up'} />
            </SafeAreaView>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
});
