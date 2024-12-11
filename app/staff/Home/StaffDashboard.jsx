import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const StaffDashboard = (props) => {
  return (
    <View>
      <Text>StaffDashboard</Text>
      <TouchableOpacity  onPress={()=> props.navigation.navigate("PolicyList")}>
        <Text>Click here to view all policies</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StaffDashboard