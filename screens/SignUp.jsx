import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
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
        if (email !== '' && password !== ''&&userName!=='') {
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
            <SafeAreaView>
                <Text>Sign Up</Text>
                <Text>Name:</Text>
                <TextInput
                    style={{ backgroundColor: 'black', color: 'white', marginBottom: 10 }}
                    placeholder='Enter Name'
                    autoCapitalize='none'
                    textContentType='userName'
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                />
                <Text>Email:</Text>
                <TextInput
                    style={{ backgroundColor: 'black', color: 'white', marginBottom: 10 }}
                    placeholder='Enter Email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text>Password:</Text>
                <TextInput
                    style={{ backgroundColor: 'black', color: 'white', marginBottom: 10 }}
                    placeholder='Enter Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <CustomButton handlePress={onHandleSignUp} text={'Sign Up'} />
                <Text>Already have an account?</Text>
                <CustomButton handlePress={() => navigation.navigate('Login')} text={'Login'} />
            </SafeAreaView>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
});
