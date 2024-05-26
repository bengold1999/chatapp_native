import { TouchableOpacity,Text } from 'react-native'
import React from 'react'

const CustomButton = ({handlePress,text}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton