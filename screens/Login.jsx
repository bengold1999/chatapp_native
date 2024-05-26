import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
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
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.header}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Email'
                    placeholderTextColor='#888'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter Password'
                    placeholderTextColor='#888'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <CustomButton handlePress={onHandleLogin} text={'Enter'} />
                <Text style={styles.text}>Don't have an account?</Text>
                <CustomButton handlePress={() => navigation.navigate('SignUp')} text={'Sign Up'} />
            </SafeAreaView>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    safeArea: {
        width: '100%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        color: '#333',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    text: {
        textAlign: 'center',
        marginVertical: 10,
        color: '#333',
    },
});
