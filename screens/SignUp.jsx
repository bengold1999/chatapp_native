import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../comp/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const onHandleSignUp = () => {
        if (email !== '' && password !== '' && userName !== '') {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    console.log("sign up success");
                    navigation.navigate('Login');
                })
                .catch((err) => Alert.alert("sign up error", err.message));
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.header}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Name'
                    placeholderTextColor='#888'
                    autoCapitalize='none'
                    textContentType='username'
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                />
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
                <CustomButton handlePress={onHandleSignUp} text={'Enter'} />
                <Text style={styles.text}>Already have an account?</Text>
                <CustomButton handlePress={() => navigation.navigate('Login')} text={'Login'} />
            </SafeAreaView>
        </View>
    );
};

export default SignUp;

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
