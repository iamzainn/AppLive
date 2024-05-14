import { View, Text } from 'react-native'
import React from 'react'
import StreambtwIframe from '@/components/Stream'
import router, { Link } from 'expo-router'

const index = () => {
  return (
    <View style={{ flex: 1,  backgroundColor:"white"}}>
      <Text>index</Text>
      <Link asChild href={"/StreamScreen"} style={{padding:20}}>
        <Text>IPL</Text>
            </Link>
  
    </View>
  )
}

export default index