import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = ({ handlePress, text }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={handlePress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#007AFF',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    btnText: {
      color: '#fff',
      textAlign: 'center',
    }
  }})
